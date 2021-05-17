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

const defaultMainColor: Color = {
  hexCode: '#10b981',
  tailwindCode: 'bg-green-500',
  area: ColorArea.Main
};

const defaultMainHoverColor: Color = {
  hexCode: '#047857',
  tailwindCode: 'bg-green-700',
  area: ColorArea.MainHover
};

const defaultHighlightColor: Color = {
  hexCode: '#6366f1',
  tailwindCode: 'bg-indigo-500',
  area: ColorArea.Highlight
};

const defaultHighlightHoverColor: Color = {
  hexCode: '#4338ca',
  tailwindCode: 'bg-indigo-700',
  area: ColorArea.HighlightHover
};

const colors: Color[] = [
  defaultMainColor,
  {
    hexCode: '#EF4444',
    tailwindCode: 'bg-red-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#EC4899',
    tailwindCode: 'bg-pink-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#f59e0b',
    tailwindCode: 'bg-yellow-500',
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
    hexCode: '#8b5cf6',
    tailwindCode: 'bg-purple-500',
    area: ColorArea.Main
  },
  {
    hexCode: '#6b7280',
    tailwindCode: 'bg-gray-500',
    area: ColorArea.Main
  },
  defaultMainHoverColor,
  {
    hexCode: '#b91c1c',
    tailwindCode: 'bg-red-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#be185d',
    tailwindCode: 'bg-pink-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#b45309',
    tailwindCode: 'bg-yellow-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#1d4ed8',
    tailwindCode: 'bg-blue-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#4338ca',
    tailwindCode: 'bg-indigo-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#6d28d9',
    tailwindCode: 'bg-purple-700',
    area: ColorArea.MainHover
  },
  {
    hexCode: '#374151',
    tailwindCode: 'bg-gray-700',
    area: ColorArea.MainHover
  },
  defaultHighlightColor,
  {
    hexCode: '#EF4444',
    tailwindCode: 'bg-red-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#EC4899',
    tailwindCode: 'bg-pink-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#f59e0b',
    tailwindCode: 'bg-yellow-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#3B82F6',
    tailwindCode: 'bg-blue-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#10b981',
    tailwindCode: 'bg-green-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#8b5cf6',
    tailwindCode: 'bg-purple-500',
    area: ColorArea.Highlight
  },
  {
    hexCode: '#6b7280',
    tailwindCode: 'bg-gray-500',
    area: ColorArea.Highlight
  },
  defaultHighlightHoverColor,
  {
    hexCode: '#b91c1c',
    tailwindCode: 'bg-red-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#be185d',
    tailwindCode: 'bg-pink-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#b45309',
    tailwindCode: 'bg-yellow-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#1d4ed8',
    tailwindCode: 'bg-blue-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#047857',
    tailwindCode: 'bg-green-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#6d28d9',
    tailwindCode: 'bg-purple-700',
    area: ColorArea.HighlightHover
  },
  {
    hexCode: '#374151',
    tailwindCode: 'bg-gray-700',
    area: ColorArea.HighlightHover
  }
];

export {
  colors,
  defaultMainColor,
  defaultMainHoverColor,
  defaultHighlightColor,
  defaultHighlightHoverColor,
  ColorArea
};
export type { Color };
