import React, { useState, useContext } from 'react';
import { Color, defaultColor } from '../features/shared/colors';

interface ColorContextValue {
  chosenColor: Color;
  setChosenColor: React.Dispatch<React.SetStateAction<Color>>;
}

const defaultColorContextValue: ColorContextValue = {
  chosenColor: defaultColor,
  setChosenColor: () => {}
};

const ColorContext = React.createContext<ColorContextValue>(defaultColorContextValue);

const ColorProvider: React.FC = ({ children }) => {
  const [color, setColor] = useState<Color>(defaultColor);

  const contextValue: ColorContextValue = {
    chosenColor: color,
    setChosenColor: setColor
  };

  return <ColorContext.Provider value={contextValue}>{children}</ColorContext.Provider>;
};

const useColorContext = (): ColorContextValue => useContext(ColorContext);

export { ColorProvider };
export default useColorContext;
