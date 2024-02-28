import React from 'react';
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center sapce-y-2'>
        <div className='spinner'></div>
        <div>
        <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    </div>
  )
}

export default  Spinner;
