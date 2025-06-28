"use client";
import React, { useEffect } from "react";
import Button1 from "./multi-ui/components/Button_1";
import Example from "./components/accordion/example";

const Page = () => {

  useEffect(() => {
   async function callme(){
    await fetch("/api/accordion", {
      method: "post",
      body: JSON.stringify({ name: "button" }),
    });
   }
   callme();
  }, []);
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <Button1 label="Click me" onClick={() => {}} disabled={true} />
      <Example />
    </div>
  );
};

export default Page;
