import React from 'react';

const MarqueeRunningText = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="mt-5 md:mt-10 py-12 animate-marquee">
        <RunningText/>
        <RunningText/>
        <RunningText/>
        <RunningText/>
      </div>

      <div className="mt-5 md:mt-10 absolute top-0 py-12 animate-marquee2">
        <RunningText/>
        <RunningText/>
        <RunningText/>
        <RunningText/>
      </div>
    </div>
  );
};

const RunningText = () => {
  return (
    <span className="mx-5 whitespace-nowrap text-4xl tracking-wide md:text-9xl text-transparent
    font-extrabold max-w-7xl bg-gradient-to-r bg-clip-text from-blue-500 to-red-500">
      48h cold 24h hot.
    </span>
  )
}

export default MarqueeRunningText;
