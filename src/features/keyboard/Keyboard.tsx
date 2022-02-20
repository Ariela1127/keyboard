import React, { useState } from 'react';
import useColorContext from '../../hooks/useColorContext';
import useKeyEvent, { EventName } from '../../hooks/useKeyEvent';
import KeyboardButton from './KeyboardButton';
import KeyboardRow from './KeyboardRow';
import { Key, KeyboardRowIndex, keys } from './keys';

interface KeyboardProps {
  onKeySelected: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeySelected }) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
  const [clickedKey, setClickedKey] = useState<string>('');
  const { chosenColors } = useColorContext();

  useKeyEvent(
    EventName.KeyDown,
    keys.map(k => k.id),
    key => {
      if (key === 'CapsLock') {
        setIsCapsLockOn(!isCapsLockOn);
      }

      setClickedKey(key.toLowerCase());
      onKeySelected(key);
    }
  );

  useKeyEvent(
    EventName.KeyUp,
    keys.map(k => k.id),
    () => setClickedKey('')
  );

  const mapKeyToButton = (key: Key) => (
    <KeyboardButton
      key={key.id}
      text={isCapsLockOn ? key.upperText : key.lowerText}
      widthClass={key?.widthClass}
      colorClass={chosenColors[key.colorArea].tailwindCode}
      hoverColorClass={chosenColors[key.hoverColorArea].tailwindCode}
      isClicked={clickedKey === key.id}
      onClick={() => onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)}
    />
  );

  return (
    <>
      <KeyboardRow>{keys.filter(key => key.row === KeyboardRowIndex.One).map(key => mapKeyToButton(key))}</KeyboardRow>
      <KeyboardRow>{keys.filter(key => key.row === KeyboardRowIndex.Two).map(key => mapKeyToButton(key))}</KeyboardRow>
      <KeyboardRow>
        <>
          {keys.filter(key => key.row === KeyboardRowIndex.SpecialCase).map(key => mapKeyToButton(key))}
          {keys.filter(key => key.row === KeyboardRowIndex.Three).map(key => mapKeyToButton(key))}
        </>
      </KeyboardRow>
      <KeyboardRow>{keys.filter(key => key.row === KeyboardRowIndex.Four).map(key => mapKeyToButton(key))}</KeyboardRow>
      <KeyboardRow>{keys.filter(key => key.row === KeyboardRowIndex.Five).map(key => mapKeyToButton(key))}</KeyboardRow>
    </>
  );
};

export default Keyboard;
