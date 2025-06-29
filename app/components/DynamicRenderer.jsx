"use client"
import React, { useEffect, useState } from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { motion } from "framer-motion";

export default function DynamicRenderer({ type = "accordion", id = 11 }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`/api/components/${type}/${id}`)
      .then((r) => r.json())
      .then(({ code }) => {setCode(code); console.log(code)})
      .catch(console.error);

  }, [type, id]);

  if (!code) return <p>Loading...</p>;

  return (
    <LiveProvider code={code} noInline scope={{motion,React}}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
}


