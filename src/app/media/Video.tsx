"use client";

const Video = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-80 w-full object-cover -z-10 rounded-full"
      >
        <source src="/vedio1.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
