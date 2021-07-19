import React, { useState } from 'react'
import Hand from '../hand/hand';

function Hands({ fingerNames }) {
  const fingers = ['Pinky', 'RingFinger', 'MiddleFinger', 'IndexFinger', 'Thumb'];
  const rightFingers = ['Thumb', 'IndexFinger', 'MiddleFinger', 'RingFinger', 'Pinky'];

  return (
    <div className='handsContainer' >
      <Hand fingerNames={fingerNames} handName='Left' fingers={fingers} />
      <Hand fingerNames={fingerNames} handName='Right' fingers={rightFingers} />
    </div>

  )
}

export default Hands
