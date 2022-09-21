import React from 'react'
import {useRef} from 'react'

function Test() {

  const ref = useRef(null);

  const handleClick = event => {
    console.log(event.currentTarget.id);

    console.log(ref.current.id);
  };

  return (
    <div>
      <button ref={ref} id="3" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default Test