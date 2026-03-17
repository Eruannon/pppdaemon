export const getFontSizeClass = (level: number) => {
  switch (level) {
    case 0: return 'text-sm'
    case 1: return 'text-base'
    case 2: return 'text-lg'
    case 3: return 'text-xl'
    case 4: return 'text-2xl'
    default: return 'text-base'
  }
}

export const getHeaderFontSizeClass = (level: number) => {
  switch (level) {
    case 0: return 'text-2xl'
    case 1: return 'text-3xl'
    case 2: return 'text-4xl'
    case 3: return 'text-5xl'
    case 4: return 'text-6xl'
    default: return 'text-3xl'
  }
}

