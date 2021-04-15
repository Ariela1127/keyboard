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

  const flexRowClassName = 'flex flex-row justify-center pb-8';

  return (
    <main className='container mx-auto'>
      <div className='flex flex-col flex-nowrap pt-2'>
        <div className={flexRowClassName}>
          <h1 className='text-4xl text-gray-50'>A Fabulous Keyboard!</h1>
        </div>
        <div className={flexRowClassName}>
          <ReadOnlyTextInput value={inputValue} />
        </div>
        <div className='pb-20'>
          <Keyboard onKeySelected={handleKeySelected} />
        </div>
        <div className={flexRowClassName}>
          <h3 className='text-4xl text-gray-50'>Customise it 🙂</h3>
        </div>
      </div>
    </main>
  );
};

export default App;
