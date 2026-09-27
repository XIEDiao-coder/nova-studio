"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/content/home";
import Brand from "./ui/Brand";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 900px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#home"
          aria-label="Nova Studio 首页"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-small nav-cta" href="#contact">
          Start Project <ArrowUpRight size={15} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="移动端导航"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <ArrowUpRight size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
}
