import React from 'react';
import KeyRow from '../keyRow/keyRow';
const firstRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secRow = ['Cap-lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"];
const thirdRow = ['L-Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', 'R-Shift'];
const fourthRow = ['Space'];

function KeyBoard({ currentKeys }) {
  return (
    <div className='keyBoard'>
      <KeyRow keyArray={firstRow} currentKeys={currentKeys} />
      <KeyRow keyArray={secRow} currentKeys={currentKeys} />
      <KeyRow keyArray={thirdRow} currentKeys={currentKeys} />
      <KeyRow keyArray={fourthRow} currentKeys={currentKeys} />
    </div>
  )
}

export default KeyBoard
