import React from 'react';
import { Link } from 'react-router-dom';

const ButtonYellow = ({ label, extraStyle, to }) => {
  return (
    <div className={`flex ${extraStyle}`}>
      <Link to={to}>
        <div className='my-py-2 px-5 bg-yellow-400 text-sm'>
          <p className='text-white'>{label}</p>
        </div>
      </Link>
    </div>
  );
};

export default ButtonYellow;
