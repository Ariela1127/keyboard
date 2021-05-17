import { ColorArea } from '../shared/colors';

enum KeyboardRowIndex {
  SpecialCase = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

interface Key {
  id: string;
  upperText: string;
  lowerText: string;
  row: KeyboardRowIndex;
  colorArea: ColorArea;
  hoverColorArea: ColorArea;
  widthClass?: string | undefined;
}

const keys: Key[] = [
  {
    id: '1',
    upperText: '1',
    lowerText: '1',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '2',
    upperText: '2',
    lowerText: '2',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '3',
    upperText: '3',
    lowerText: '3',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '4',
    upperText: '4',
    lowerText: '4',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '5',
    upperText: '5',
    lowerText: '5',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '6',
    upperText: '6',
    lowerText: '6',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '7',
    upperText: '7',
    lowerText: '7',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '8',
    upperText: '8',
    lowerText: '8',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '9',
    upperText: '9',
    lowerText: '9',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '0',
    upperText: '0',
    lowerText: '0',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'backspace',
    upperText: '←',
    lowerText: '←',
    row: KeyboardRowIndex.One,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover,
    widthClass: 'px-10'
  },
  {
    id: 'q',
    upperText: 'Q',
    lowerText: 'q',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'w',
    upperText: 'W',
    lowerText: 'w',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Highlight,
    hoverColorArea: ColorArea.HighlightHover
  },
  {
    id: 'e',
    upperText: 'E',
    lowerText: 'e',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'r',
    upperText: 'R',
    lowerText: 'r',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 't',
    upperText: 'T',
    lowerText: 't',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'y',
    upperText: 'Y',
    lowerText: 'y',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'u',
    upperText: 'U',
    lowerText: 'u',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'i',
    upperText: 'I',
    lowerText: 'i',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'o',
    upperText: 'O',
    lowerText: 'o',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'p',
    upperText: 'P',
    lowerText: 'p',
    row: KeyboardRowIndex.Two,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'capslock',
    upperText: '↑',
    lowerText: '↑',
    row: KeyboardRowIndex.SpecialCase,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover,
    widthClass: 'px-10'
  },
  {
    id: 'a',
    upperText: 'A',
    lowerText: 'a',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Highlight,
    hoverColorArea: ColorArea.HighlightHover
  },
  {
    id: 's',
    upperText: 'S',
    lowerText: 's',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Highlight,
    hoverColorArea: ColorArea.HighlightHover
  },
  {
    id: 'd',
    upperText: 'D',
    lowerText: 'd',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Highlight,
    hoverColorArea: ColorArea.HighlightHover
  },
  {
    id: 'f',
    upperText: 'F',
    lowerText: 'f',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'g',
    upperText: 'G',
    lowerText: 'g',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'h',
    upperText: 'H',
    lowerText: 'h',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'j',
    upperText: 'J',
    lowerText: 'j',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'k',
    upperText: 'K',
    lowerText: 'k',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'l',
    upperText: 'L',
    lowerText: 'l',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'enter',
    upperText: '↵',
    lowerText: '↵',
    row: KeyboardRowIndex.Three,
    colorArea: ColorArea.Highlight,
    hoverColorArea: ColorArea.Highlight,
    widthClass: 'px-10'
  },
  {
    id: 'z',
    upperText: 'Z',
    lowerText: 'z',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'x',
    upperText: 'X',
    lowerText: 'x',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'c',
    upperText: 'C',
    lowerText: 'c',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'v',
    upperText: 'V',
    lowerText: 'v',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'b',
    upperText: 'B',
    lowerText: 'b',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'n',
    upperText: 'N',
    lowerText: 'n',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: 'm',
    upperText: 'M',
    lowerText: 'm',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: ',',
    upperText: ',',
    lowerText: ',',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '.',
    upperText: '.',
    lowerText: '.',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: '?',
    upperText: '?',
    lowerText: '?',
    row: KeyboardRowIndex.Four,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover
  },
  {
    id: ' ',
    upperText: '˽',
    lowerText: '˽',
    row: KeyboardRowIndex.Five,
    colorArea: ColorArea.Main,
    hoverColorArea: ColorArea.MainHover,
    widthClass: 'px-40'
  }
];

export { keys, KeyboardRowIndex };
export type { Key };
