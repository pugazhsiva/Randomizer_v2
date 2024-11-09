'use client'
import { useState } from "react";
import { Button } from "@nextui-org/react";
import videoPlayer from "./player";

export default function Home() {
  const [vidId,setvidId] = useState("Q0lu5bxIcv8")
  function handleClick()
{
  setvidId("ATYbOiAlyN0")
}

  return (
    <div>
      {videoPlayer(vidId)}
      <Button onPress={handleClick}>Click me</Button>
      
    </div>
  );
}


