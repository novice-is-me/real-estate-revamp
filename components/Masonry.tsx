"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import "./Masonry.css";

/* ---------------- SAFE useMedia (SSR FIXED) ---------------- */
const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;
    const index = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => setValue(get());
    const mqls = queries.map((q) => window.matchMedia(q));

    mqls.forEach((mql) => mql.addEventListener("change", handler));

    return () =>
      mqls.forEach((mql) => mql.removeEventListener("change", handler));
  }, [queries]);

  return value;
};

/* ---------------- MEASURE CONTAINER ---------------- */
const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

/* ---------------- TYPES ---------------- */
interface Item {
  id: number;
  img: string;
  height: number;
  url?: string;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
}

/* ---------------- COMPONENT ---------------- */
const Masonry: React.FC<MasonryProps> = ({ items }) => {
  const columns = useMedia(
    ["(min-width:1280px)", "(min-width:1024px)", "(min-width:640px)"],
    [4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const hasMounted = useRef(false);

  /* -------- BUILD GRID + HEIGHT -------- */
  const { grid, height } = useMemo(() => {
    if (!width) return { grid: [], height: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    const gridItems: GridItem[] = items.map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const h = item.height / 2;
      const x = col * columnWidth;
      const y = colHeights[col];

      colHeights[col] += h;

      return {
        ...item,
        x,
        y,
        w: columnWidth,
        h,
      };
    });

    return {
      grid: gridItems,
      height: Math.max(...colHeights),
    };
  }, [items, columns, width]);

  /* -------- GSAP POSITIONING -------- */
  useLayoutEffect(() => {
    if (!grid.length) return;

    grid.forEach((item, i) => {
      const selector = `[data-key="${item.id}"]`;

      if (!hasMounted.current) {
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            y: item.y + 100,
          },
          {
            opacity: 1,
            x: item.x,
            y: item.y,
            width: item.w,
            height: item.h,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.05,
          }
        );
      } else {
        gsap.to(selector, {
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    });

    hasMounted.current = true;
  }, [grid]);

  /* -------- RENDER -------- */
  return (
    <div ref={containerRef} className="masonry-list" style={{ height }}>
      {grid.map((item) => (
        <div key={item.id} data-key={item.id} className="masonry-item">
          <div
            className="masonry-img"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
