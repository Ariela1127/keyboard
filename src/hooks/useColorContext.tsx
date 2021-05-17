import React, { useContext, useState } from 'react';
import { Color, defaultColor } from '../features/shared/colors';

interface ColorProviderProps {
  children: React.ReactNode;
}

interface ColorContextValue {
  color: Color;
  onColorChange: (color: Color) => void;
}

const defaultColorContextValue: ColorContextValue = {
  color: defaultColor,
  onColorChange: () => {}
};

const ColorContext = React.createContext<ColorContextValue>(defaultColorContextValue);

const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<Color>(defaultColor);

  const handleColorChange = (newColor: Color) => {
    console.log(newColor);
    setColor(newColor);
  };

  const contextValue: ColorContextValue = {
    color: color,
    onColorChange: handleColorChange
  };

  return <ColorContext.Provider value={contextValue}>{children}</ColorContext.Provider>;
};

const useColorContext = (): ColorContextValue => useContext(ColorContext);

export { ColorProvider };
export default useColorContext;
