import React from "react";
import ReactPlayer from "react-player/youtube";

export default function aaa() {
  return (
    <>
      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={800}
        height={600}
        playing={true}
        muted={true}
      />
    </>
  );
}
