"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import videoPlayer from "./player";
import VideoList from "./videolist";

export default function Home() {
  const [vidId, setvidId] = useState("ATYbOiAlyN0");
  function handleClick() {
    setvidId("ATYbOiAlyN0");
  }

  return (
    <div className="flex-auto">
      <div className="flex justify-center">
        <h5 className="text-5xl">Randomizer v2</h5>
      </div>
      <div className="flex flex-col items-center justify-center">
        {videoPlayer(vidId)}
        <Button onPress={handleClick}>Play</Button>
      </div>
      <div className="flex items-center justify-center">
        <VideoList />
      </div>
    </div>
  );
}
