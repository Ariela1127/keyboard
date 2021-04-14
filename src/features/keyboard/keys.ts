enum KeyboardRowIndex {
  SpecialCase = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

const keys = [
  { id: '1', upperText: '1', lowerText: '1', row: KeyboardRowIndex.One },
  { id: '2', upperText: '2', lowerText: '2', row: KeyboardRowIndex.One },
  { id: '3', upperText: '3', lowerText: '3', row: KeyboardRowIndex.One },
  { id: '4', upperText: '4', lowerText: '4', row: KeyboardRowIndex.One },
  { id: '5', upperText: '5', lowerText: '5', row: KeyboardRowIndex.One },
  { id: '6', upperText: '6', lowerText: '6', row: KeyboardRowIndex.One },
  { id: '7', upperText: '7', lowerText: '7', row: KeyboardRowIndex.One },
  { id: '8', upperText: '8', lowerText: '8', row: KeyboardRowIndex.One },
  { id: '9', upperText: '9', lowerText: '9', row: KeyboardRowIndex.One },
  { id: '0', upperText: '0', lowerText: '0', row: KeyboardRowIndex.One },
  {
    id: 'backspace',
    upperText: '←',
    lowerText: '←',
    row: KeyboardRowIndex.One,
    widthClass: 'px-10'
  },
  { id: 'q', upperText: 'Q', lowerText: 'q', row: KeyboardRowIndex.Two },
  {
    id: 'w',
    upperText: 'W',
    lowerText: 'w',
    row: KeyboardRowIndex.Two,
    colorClass: 'bg-indigo-500',
    hoverColorClass: 'bg-indigo-700'
  },
  { id: 'e', upperText: 'E', lowerText: 'e', row: KeyboardRowIndex.Two },
  { id: 'r', upperText: 'R', lowerText: 'r', row: KeyboardRowIndex.Two },
  { id: 't', upperText: 'T', lowerText: 't', row: KeyboardRowIndex.Two },
  { id: 'y', upperText: 'Y', lowerText: 'y', row: KeyboardRowIndex.Two },
  { id: 'u', upperText: 'U', lowerText: 'u', row: KeyboardRowIndex.Two },
  { id: 'i', upperText: 'I', lowerText: 'i', row: KeyboardRowIndex.Two },
  { id: 'o', upperText: 'O', lowerText: 'o', row: KeyboardRowIndex.Two },
  { id: 'p', upperText: 'P', lowerText: 'p', row: KeyboardRowIndex.Two },
  {
    id: 'capslock',
    upperText: '↑',
    lowerText: '↑',
    row: KeyboardRowIndex.SpecialCase,
    widthClass: 'px-10'
  },
  {
    id: 'a',
    upperText: 'A',
    lowerText: 'a',
    row: KeyboardRowIndex.Three,
    colorClass: 'bg-indigo-500',
    hoverColorClass: 'bg-indigo-700'
  },
  {
    id: 's',
    upperText: 'S',
    lowerText: 's',
    row: KeyboardRowIndex.Three,
    colorClass: 'bg-indigo-500',
    hoverColorClass: 'bg-indigo-700'
  },
  {
    id: 'd',
    upperText: 'D',
    lowerText: 'd',
    row: KeyboardRowIndex.Three,
    colorClass: 'bg-indigo-500',
    hoverColorClass: 'bg-indigo-700'
  },
  { id: 'f', upperText: 'F', lowerText: 'f', row: KeyboardRowIndex.Three },
  { id: 'g', upperText: 'G', lowerText: 'g', row: KeyboardRowIndex.Three },
  { id: 'h', upperText: 'H', lowerText: 'h', row: KeyboardRowIndex.Three },
  { id: 'j', upperText: 'J', lowerText: 'j', row: KeyboardRowIndex.Three },
  { id: 'k', upperText: 'K', lowerText: 'k', row: KeyboardRowIndex.Three },
  { id: 'l', upperText: 'L', lowerText: 'l', row: KeyboardRowIndex.Three },
  {
    id: 'enter',
    upperText: '↵',
    lowerText: '↵',
    row: KeyboardRowIndex.Three,
    widthClass: 'px-10',
    colorClass: 'bg-indigo-500',
    hoverColorClass: 'bg-indigo-700'
  },
  { id: 'z', upperText: 'Z', lowerText: 'z', row: KeyboardRowIndex.Four },
  { id: 'x', upperText: 'X', lowerText: 'x', row: KeyboardRowIndex.Four },
  { id: 'c', upperText: 'C', lowerText: 'c', row: KeyboardRowIndex.Four },
  { id: 'v', upperText: 'V', lowerText: 'v', row: KeyboardRowIndex.Four },
  { id: 'b', upperText: 'B', lowerText: 'b', row: KeyboardRowIndex.Four },
  { id: 'n', upperText: 'N', lowerText: 'n', row: KeyboardRowIndex.Four },
  { id: 'm', upperText: 'M', lowerText: 'm', row: KeyboardRowIndex.Four },
  { id: ',', upperText: ',', lowerText: ',', row: KeyboardRowIndex.Four },
  { id: '.', upperText: '.', lowerText: '.', row: KeyboardRowIndex.Four },
  { id: '?', upperText: '?', lowerText: '?', row: KeyboardRowIndex.Four },
  {
    id: ' ',
    upperText: '˽',
    lowerText: '˽',
    row: KeyboardRowIndex.Five,
    widthClass: 'px-40'
  }
];

export { keys, KeyboardRowIndex };
