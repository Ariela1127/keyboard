import React, { useContext } from 'react';
import {
  Color,
  ColorArea,
  defaultHighlightColor,
  defaultHighlightHoverColor,
  defaultMainColor,
  defaultMainHoverColor
} from '../features/shared/colors';
import useLocalStorage from './useLocalStorage';

interface ChosenColors {
  [ColorArea.Main]: Color;
  [ColorArea.MainHover]: Color;
  [ColorArea.Highlight]: Color;
  [ColorArea.HighlightHover]: Color;
}

interface ColorContextValue {
  chosenColors: ChosenColors;
  setChosenColors: React.Dispatch<React.SetStateAction<ChosenColors>>;
}

const defaultChosenColors: ChosenColors = {
  [ColorArea.Main]: defaultMainColor,
  [ColorArea.MainHover]: defaultMainHoverColor,
  [ColorArea.Highlight]: defaultHighlightColor,
  [ColorArea.HighlightHover]: defaultHighlightHoverColor
};

const defaultColorContextValue: ColorContextValue = {
  chosenColors: defaultChosenColors,
  setChosenColors: () => {}
};

const ColorContext = React.createContext<ColorContextValue>(defaultColorContextValue);

const ColorProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useLocalStorage<ChosenColors>('chosenColors', defaultChosenColors);

  const contextValue: ColorContextValue = {
    chosenColors: colors,
    setChosenColors: setColors
  };

  return <ColorContext.Provider value={contextValue}>{children}</ColorContext.Provider>;
};

const useColorContext = (): ColorContextValue => useContext(ColorContext);

export { ColorProvider };
export default useColorContext;
