// components/AboutBgVideo.js
const AboutBgVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AboutBgVideo;
