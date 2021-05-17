import React from 'react';

interface KeyboardButtonProps {
  text: string;
  isClicked: boolean;
  colorClass: string;
  hoverColorClass: string;
  widthClass: string | undefined;
  onClick: () => void;
}

const defaultWidthClass = 'px-5';

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  text,
  isClicked,
  colorClass,
  hoverColorClass,
  widthClass,
  onClick
}) => {
  const width = widthClass ?? defaultWidthClass;
  const color = isClicked ? hoverColorClass : colorClass;

  return (
    <button className={`text-xl py-3 ${width} my-1 mx-1 ${color} hover:${hoverColorClass} rounded`} onClick={onClick}>
      {text}
    </button>
  );
};

export default KeyboardButton;
