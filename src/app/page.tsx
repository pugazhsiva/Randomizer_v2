"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import videoPlayer from "./player";

export default function Home() {
  const [vidId, setvidId] = useState("");
  function handleClick() {
    setvidId("ATYbOiAlyN0");
  }

  return (
    <div className="flex-auto">
      <div className="flex justify-center">
        <h5 className="text-5xl">Randomizer v2</h5>
      </div>
      <div className="flex-1 items-center justify-center">
        {videoPlayer(vidId)}
        <Button onPress={handleClick}>Click me</Button>
      </div>
    </div>
  );
}
