const cssColors = (selection = []) => {
  const result = {}

  for (const color of selection) {
    for (let i = 1; i <= 10; i++) {
      const shade = `${color}-${i}`
      result[shade] = `var(--color-${shade})`
    }
  }

  return result
}

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...cssColors(['primary', 'secondary', 'tertiary', 'neutral']),
        transparent: 'transparent',
      },
      spacing: {
        header: 'var(--header-height)',
        footer: 'var(--footer-height)',
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: 'var(--color-border)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
