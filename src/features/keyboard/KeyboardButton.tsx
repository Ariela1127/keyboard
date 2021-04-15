import React from 'react';

interface KeyboardButtonProps {
  text: string;
  isClicked: boolean;
  colorClass: string | undefined;
  hoverColorClass: string | undefined;
  widthClass: string | undefined;
  onClick: () => void;
}

const defaultColorClass = 'bg-green-500';
const defaultHoverColorClass = 'bg-green-700';
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
  const color = isClicked
    ? hoverColorClass ?? defaultHoverColorClass
    : colorClass ?? defaultColorClass;
  const hoverColor = hoverColorClass ?? defaultHoverColorClass;

  return (
    <button
      className={`text-xl py-3 ${width} my-1 mx-1 ${color} hover:${hoverColor} rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default KeyboardButton;
