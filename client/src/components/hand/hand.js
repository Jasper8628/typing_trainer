import React from 'react'
import './styles.css';

function Hand({ fingerNames, handName, fingers }) {
  return (
    <div className={`${handName}hand hand`} >
      {fingers.map((finger, index) => (
        <div
          key={index}
          className={fingerNames.includes(`${handName}${finger}`) ? `finger ${finger} finger-active` : `finger ${finger}`}>
        </div>
      ))}
    </div>
  )
}

export default Hand
