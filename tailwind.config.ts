import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bold-blue': '#17344F',
        'bold-grey': '#596F78',
        'light-pink': '#F5B4BB',
        'light-blue': '#7BB8F1',
        'light-grey': '#8795AF',
      },
    },
  },
  plugins: [],
}
export default config
