import React, { useState } from 'react'
import Hands from '../hands/hands'
import KeyBoard from '../keyBoard/keyBoard';
import messages from '../../assets/tests.json'
const keys = ['asdfgqwertzxcvb', "yuiophjkl;'nm,.?"];

function Display() {
  const [currentKeys, setCurrentKeys] = useState([]);
  const [fingerNames, setFingerNames] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [typedInput, setInput] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const nextPage = () => {
    setButtonColor('');
    setCurrentLetterIndex(0);
    setInput('')
    setCurrentKeys([]);
    setFingerNames([]);
    setPageNumber(pageNumber + 1 < messages.length ? pageNumber + 1 : 0);
  }
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e) => {
    const input = e.code.replace('Key', '').toLowerCase();
    const letter = converSymbolToLetter(input);
    const currentLetter = messages[pageNumber][currentLetterIndex];
    if (letter === currentLetter.toLocaleLowerCase()) {
      const newLetter = messages[pageNumber][currentLetterIndex + 1];
      const isShift = (newLetter === newLetter?.toUpperCase() | newLetter === '?') && ![',', '.', ' ', ";", "'"].includes(newLetter) ? true : false;
      const side = keys[0].includes(newLetter?.toLowerCase()) ? 'Right' : 'Left';
      const shiftKey = side === 'Right' ? 'r-shift' : 'l-shift';
      if (!!newLetter) {
        if (newLetter === ' ') {
          setCurrentKeys(['space', ''])
        } else {
          setCurrentKeys(isShift ? [newLetter, shiftKey] : [newLetter, '']);
        }
        setFingerNames(isShift ? [findFinger(newLetter), `${side}Pinky`] : [findFinger(newLetter), '']);
      } else {
        setFingerNames([]);
        setCurrentKeys([]);
      }
      if (currentLetterIndex + 1 === messages[pageNumber].length) setButtonColor('button-active')
      setCurrentLetterIndex(currentLetterIndex + 1 < messages[pageNumber].length ? currentLetterIndex + 1 : currentLetterIndex);
    };
    if (letter === 'backspace' && currentLetterIndex > 0) {
      if (currentLetterIndex === typedInput.length) {
        const newLetter = messages[pageNumber][currentLetterIndex - 1]
        const isShift = (newLetter === newLetter?.toUpperCase() | newLetter === '?') && ![',', '.', ' ', ";", "'"].includes(newLetter) ? true : false;
        const side = keys[0].includes(newLetter?.toLowerCase()) ? 'Right' : 'Left';
        const shiftKey = side === 'Right' ? 'R-Shift' : 'L-Shift';
        if (newLetter === ' ') {
          setCurrentKeys(['space', ''])
        } else {
          setCurrentKeys(isShift ? [newLetter, shiftKey] : [newLetter, '']);
        }
        setFingerNames(isShift ? [findFinger(newLetter), `${side}Pinky`] : [findFinger(newLetter), '']);
        setCurrentLetterIndex(currentLetterIndex - 1);
      }
    }
  }

  const converSymbolToLetter = (input) => {
    switch (input) {
      case 'space':
        return ' '
      case 'comma':
        return ','
      case 'period':
        return '.'
      case 'semicolon':
        return ';'
      case 'backslash':
        return "'"
      case 'slash':
        return "?"
      default:
        return input
    }
  }

  const findFinger = (input) => {
    const letter = input.toLowerCase()
    if (['q', 'a', 'z'].includes(letter)) return 'LeftPinky'
    if (['s', 'w', 'x'].includes(letter)) return 'LeftRingFinger'
    if (['e', 'd', 'c'].includes(letter)) return 'LeftMiddleFinger'
    if (['r', 'f', 'v', 'b', 'g', 't'].includes(letter)) return 'LeftIndexFinger'
    if (['y', 'u', 'h', 'j', 'n', 'm'].includes(letter)) return 'RightIndexFinger'
    if (['k', 'i', ','].includes(letter)) return 'RightMiddleFinger'
    if (['l', 'o', '.'].includes(letter)) return 'RightRingFinger'
    if (['p', ';', '?'].includes(letter)) return 'RightPinky'
    if (letter === ' ') return 'RightThumb';
    if (letter === undefined) return '';
  }
  return (
    <div className='container' >
      <div className='head'>
        <h2>Excercise-{pageNumber + 1}</h2>
        <h1>{messages[pageNumber]}</h1>
        <input
          style={{ width: `${messages[pageNumber].length * 15}px`, height: '30px', fontSize: '2rem', marginLeft: '40px' }}
          value={typedInput} onChange={handleInput} onKeyDown={handleKeyDown} />
        <button className={`next far fa-caret-square-right ${buttonColor}`} onClick={nextPage} ></button>
      </div>
      <KeyBoard currentKeys={currentKeys} />
      <Hands fingerNames={fingerNames} />
    </div>

  )
}

export default Display
