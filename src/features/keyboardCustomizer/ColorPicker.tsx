import React from 'react';
import { GithubPicker, ColorResult } from 'react-color';
import { colors, Color } from '../shared/colors';

interface ColorPickerProps {
  pickedColor: string;
  pickerColors: string[];
  onColorChange: (color: Color) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ pickedColor, pickerColors, onColorChange }) => {
  const handleColorChange = (colorResult: ColorResult, _: React.ChangeEvent<HTMLInputElement>) => {
    const color = colors.find(color => color.hexCode.toLowerCase() === colorResult.hex.toLowerCase());

    if (color) {
      onColorChange(color);
    }
  };

  return (
    <div className='my-2.5'>
      <GithubPicker
        triangle='top-left'
        colors={pickerColors}
        color={pickedColor}
        onChangeComplete={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
