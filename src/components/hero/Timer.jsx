import React from 'react';

const Timer = () => {
  return (
    <div className="grid grid-flow-col gap-3 text-center items-center mt-20">
      <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-2xl lg:text-3xl">
          <span style={{ '--value': 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-2xl lg:text-3xl">
          <span style={{ '--value': 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-2xl lg:text-3xl">
          <span style={{ '--value': 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl md:text-2xl lg:text-3xl">
          <span style={{ '--value': 46 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
