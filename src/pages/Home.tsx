import React, { useState } from 'react';
import ReadOnlyTextInput from '../features/input/ReadOnlyTextInput';
import Keyboard from '../features/keyboard/Keyboard';
import KeyboardCustomizer from '../features/keyboardCustomizer/KeyboardCustomizer';

const flexRowClassName = 'flex flex-row justify-center pb-8';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeySelected = (key: string) => {
    let newValue = inputValue;

    switch (key.toLowerCase()) {
      case ' ':
        newValue = `${newValue} `;
        break;
      case 'backspace':
        if (inputValue.length > 0) {
          newValue = inputValue.slice(0, -1);
        } else {
          newValue = '';
        }
        break;
      case 'enter':
        newValue = '';
        break;
      case 'capslock':
      case 'shift':
      case 'control':
        break;
      default:
        newValue = `${newValue}${key}`;
        break;
    }

    if (newValue !== inputValue) {
      setInputValue(newValue);
    }
  };

  const handleClearButtonClick = () => setInputValue('');

  return (
    <main className='container mx-auto'>
      <div className='flex flex-col flex-nowrap pt-2'>
        <div className={flexRowClassName}>
          <h1 className='text-4xl'>A React Keyboard</h1>
        </div>
        <div className={flexRowClassName}>
          <p>Try typing something on your keyboard to see something cool!</p>
        </div>
        <div className={flexRowClassName}>
          <ReadOnlyTextInput value={inputValue} />
          <button className='text-lg ml-8 px-4 py-0.5 bg-white text-black rounded' onClick={handleClearButtonClick}>
            Clear
          </button>
        </div>
        <div className='pb-20'>
          <Keyboard onKeySelected={handleKeySelected} />
        </div>
        <div>
          <h2 className='text-3xl'>Customise it 🙂</h2>
          <KeyboardCustomizer />
        </div>
      </div>
    </main>
  );
};

export default Home;
