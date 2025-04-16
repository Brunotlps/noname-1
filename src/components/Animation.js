"use client";
import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    script.async = true;
    script.onload = () => {
      require("../scripts/animation");
    };
    document.body.appendChild(script);
  }, []);

  return <div className="animation" />;
}