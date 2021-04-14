import React, { useState } from 'react';
import Keyboard from './features/keyboard/Keyboard';
import ReadOnlyTextInput from './features/input/ReadOnlyTextInput';

const App: React.FC = () => {
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
        <div className='flex flex-row justify-center pb-8'>
          <h1 className='text-4xl text-gray-50'>JavaScript Keyboard</h1>
        </div>
        <div className='flex flex-row justify-center pb-8'>
          <ReadOnlyTextInput value={inputValue} />
        </div>
        <Keyboard onKeySelected={handleKeySelected} />
      </div>
    </main>
  );
};

export default App;
