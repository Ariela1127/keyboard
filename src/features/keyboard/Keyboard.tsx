import React, { useState } from 'react';
import KeyboardRow from './KeyboardRow';
import KeyboardButton from './KeyboardButton';
import { keys, KeyboardRowIndex } from './keys';
import useKeyEvent, { EventName } from '../../hooks/useKeyEvent';

interface KeyboardProps {
  onKeySelected: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeySelected }) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
  const [clickedKey, setClickedKey] = useState<string>('');

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

  return (
    <>
      <KeyboardRow>
        {keys
          .filter(key => key.row === KeyboardRowIndex.One)
          .map(key => (
            <KeyboardButton
              key={key.id}
              text={isCapsLockOn ? key.upperText : key.lowerText}
              widthClass={key?.widthClass}
              colorClass={key?.colorClass}
              hoverColorClass={key?.hoverColorClass}
              isClicked={clickedKey === key.id}
              onClick={() =>
                onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)
              }
            />
          ))}
      </KeyboardRow>
      <KeyboardRow>
        {keys
          .filter(key => key.row === KeyboardRowIndex.Two)
          .map(key => (
            <KeyboardButton
              key={key.id}
              text={isCapsLockOn ? key.upperText : key.lowerText}
              widthClass={key?.widthClass}
              colorClass={key?.colorClass}
              hoverColorClass={key?.hoverColorClass}
              isClicked={clickedKey === key.id}
              onClick={() =>
                onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)
              }
            />
          ))}
      </KeyboardRow>
      <KeyboardRow>
        <>
          {keys
            .filter(key => key.row === KeyboardRowIndex.SpecialCase)
            .map(key => (
              <KeyboardButton
                key={key.id}
                text={isCapsLockOn ? key.upperText : key.lowerText}
                widthClass={key?.widthClass}
                colorClass={key?.colorClass}
                hoverColorClass={key?.hoverColorClass}
                isClicked={isCapsLockOn}
                onClick={() => {
                  setIsCapsLockOn(!isCapsLockOn);
                  onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id);
                }}
              />
            ))}
          {keys
            .filter(key => key.row === KeyboardRowIndex.Three)
            .map(key => (
              <KeyboardButton
                key={key.id}
                text={isCapsLockOn ? key.upperText : key.lowerText}
                widthClass={key?.widthClass}
                colorClass={key?.colorClass}
                hoverColorClass={key?.hoverColorClass}
                isClicked={clickedKey === key.id}
                onClick={() =>
                  onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)
                }
              />
            ))}
        </>
      </KeyboardRow>
      <KeyboardRow>
        {keys
          .filter(key => key.row === KeyboardRowIndex.Four)
          .map(key => (
            <KeyboardButton
              key={key.id}
              text={isCapsLockOn ? key.upperText : key.lowerText}
              widthClass={key?.widthClass}
              colorClass={key?.colorClass}
              hoverColorClass={key?.hoverColorClass}
              isClicked={clickedKey === key.id}
              onClick={() =>
                onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)
              }
            />
          ))}
      </KeyboardRow>
      <KeyboardRow>
        {keys
          .filter(key => key.row === KeyboardRowIndex.Five)
          .map(key => (
            <KeyboardButton
              key={key.id}
              text={isCapsLockOn ? key.upperText : key.lowerText}
              widthClass={key?.widthClass}
              colorClass={key?.colorClass}
              hoverColorClass={key?.hoverColorClass}
              isClicked={clickedKey === key.id}
              onClick={() =>
                onKeySelected(isCapsLockOn ? key.id.toUpperCase() : key.id)
              }
            />
          ))}
      </KeyboardRow>
    </>
  );
};

export default Keyboard;
