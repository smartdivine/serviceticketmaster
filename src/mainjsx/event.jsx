import React, { useState } from 'react';

const Event = () => {
  let setClickedIndex;

  function click(index) {
    setClickedIndex = index;
    return index;
  }

  return (
    <div>
      <button
        onClick={() => click(1)}
        style={{ backgroundColor: setClickedIndex === 1 ? 'red' : 'transparent' }}
      >
        I'm the first
      </button>
      <button
        onClick={() => click(2)}
        style={{ backgroundColor: setClickedIndex === 2 ? 'red' : 'transparent' }}
      >
        I'm the second
      </button>
      <button
        onClick={() => click(3)}
        style={{ backgroundColor: setClickedIndex === 3 ? 'red' : 'transparent' }}
      >
        I'm the third
      </button>
    </div>
  );
};

export default Event;
