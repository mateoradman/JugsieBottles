import React from 'react';

const MarqueeRunningText = () => {
  return (
    <div className="inline-grid grid-cols-4 gap-x-24 my-10 w-max">
      <RunningText/>
      <RunningText/>
      <RunningText/>
      <RunningText/>
    </div>
  );
};

const RunningText = () => {
  return (
    <h1 className="whitespace-nowrap text-4xl tracking-wide md:text-9xl text-transparent
    font-extrabold  max-w-7xl bg-gradient-to-r bg-clip-text from-blue-500 to-red-500 animate-marquee">
      48h cold 24h hot.
    </h1>
  )

}
export default MarqueeRunningText;
