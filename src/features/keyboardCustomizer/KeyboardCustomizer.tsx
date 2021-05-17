import React from 'react';
import ColorPicker from './ColorPicker';
import { colors, Color, ColorArea } from '../shared/colors';
import useColorContext from '../../hooks/useColorContext';

const getColorsByColorArea = (colorArea: ColorArea) =>
  colors.filter(color => color.area === colorArea).map(color => color.hexCode);

const KeyboardCustomizer: React.FC = () => {
  const { chosenColors, setChosenColors } = useColorContext();

  const handleColorChange = (color: Color, colorArea: ColorArea) =>
    setChosenColors(prevColors => ({ ...prevColors, [colorArea]: color }));

  return (
    <div className='flex flex-row flex-wrap justify-between mt-6'>
      <div>
        <h3>Main Color</h3>
        <ColorPicker
          pickedColor={chosenColors[ColorArea.Main].hexCode}
          pickerColors={getColorsByColorArea(ColorArea.Main)}
          onColorChange={color => handleColorChange(color, ColorArea.Main)}
        />
      </div>
      <div>
        <h3>Main Color Hover</h3>
        <ColorPicker
          pickedColor={chosenColors[ColorArea.MainHover].hexCode}
          pickerColors={getColorsByColorArea(ColorArea.MainHover)}
          onColorChange={color => handleColorChange(color, ColorArea.MainHover)}
        />
      </div>
      <div>
        <h3>Highlight Color</h3>
        <ColorPicker
          pickedColor={chosenColors[ColorArea.Highlight].hexCode}
          pickerColors={getColorsByColorArea(ColorArea.Highlight)}
          onColorChange={color => handleColorChange(color, ColorArea.Highlight)}
        />
      </div>
      <div>
        <h3>Highlight Hover</h3>
        <ColorPicker
          pickedColor={chosenColors[ColorArea.HighlightHover].hexCode}
          pickerColors={getColorsByColorArea(ColorArea.HighlightHover)}
          onColorChange={color => handleColorChange(color, ColorArea.HighlightHover)}
        />
      </div>
    </div>
  );
};

export default KeyboardCustomizer;
