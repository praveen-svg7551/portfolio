import { useEffect, useRef } from "react";
import "../Styles/BackgroundVideo.css";

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="bg-video"
    >
      <source src="./assets/video.mp4" type="video/mp4" />
    </video>
  );
}
