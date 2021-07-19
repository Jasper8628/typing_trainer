import React from 'react';
import './styles.css';

function KeyRow({ keyArray, currentKeys }) {
  return (
    <div className='row'>
      {keyArray.map((letter) => (
        <button
          className={currentKeys.includes(letter.toLowerCase()) || currentKeys.includes(letter)
            ? 'key key-active' : 'key'}
          id={letter.toLowerCase()}
          name={`${letter}`}
          key={letter}>{letter}
        </button>
      ))}
    </div>
  )
}

export default KeyRow
