import React from 'react';
import ColorPicker from './ColorPicker';
import { colors, Color, ColorArea } from './colors';

const mainColors = colors
  .filter(color => color.area === ColorArea.Main)
  .map(color => color.hexCode);

interface KeyboardCustomizerProps {
  onColorChange: (color: Color) => void;
}

const KeyboardCustomizer: React.FC<KeyboardCustomizerProps> = ({
  onColorChange
}) => (
  <>
    <div>
      <h3>Main Color</h3>
      <ColorPicker
        pickedColor='#B80000'
        pickerColors={mainColors}
        onColorChange={onColorChange}
      />
    </div>
    <div>
      <h3>Main Color Hover</h3>
    </div>
    <div>
      <h3>Highlight Color</h3>
    </div>
    <div>
      <h3>Highlight Hover</h3>
    </div>
  </>
);

export default KeyboardCustomizer;
