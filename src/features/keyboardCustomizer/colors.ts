enum ColorArea {
  Main = 1,
  MainHover = 2,
  Highlight = 3,
  HighlightHover = 4
}

interface Color {
  hexCode: string;
  tailwindCode: string;
  area: ColorArea;
}

const colors: Color[] = [
  {
    hexCode: '#EF4444',
    tailwindCode: 'bg-red-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#F59E0B',
    tailwindCode: 'bg-amber-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#10B981',
    tailwindCode: 'bg-emerald-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#3B82F6',
    tailwindCode: 'bg-blue-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#6366F1',
    tailwindCode: 'bg-indigo-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#8B5CF6',
    tailwindCode: 'bg-violet-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#EC4899',
    tailwindCode: 'bg-pink-500',
    area: ColorArea.Main
  }
];

export { colors, ColorArea };
export type { Color };
