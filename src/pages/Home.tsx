import React, { useState } from 'react';
import Keyboard from '../features/keyboard/Keyboard';
import KeyboardCustomizer from '../features/keyboardCustomizer/KeyboardCustomizer';
import ReadOnlyTextInput from '../features/input/ReadOnlyTextInput';

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

  return (
    <main className='container mx-auto'>
      <div className='flex flex-col flex-nowrap pt-2'>
        <div className={flexRowClassName}>
          <h1 className='text-4xl'>A Fabulous Keyboard!</h1>
        </div>
        <div className={flexRowClassName}>
          <ReadOnlyTextInput value={inputValue} />
        </div>
        <div className='pb-20'>
          <Keyboard onKeySelected={handleKeySelected} />
        </div>
        <div>
          <h2 className='text-3xl'>Customise it 🙂</h2>
          <KeyboardCustomizer onColorChange={c => console.log(c)} />
        </div>
      </div>
    </main>
  );
};

export default Home;
