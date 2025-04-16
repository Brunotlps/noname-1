"use client";
import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    require("../scripts/projects");
  }, []);

  return (
    <nav className="menu">
      <button className="menu-button">Home</button>
      <button className="menu-button">Projects</button>
    </nav>
  );
}