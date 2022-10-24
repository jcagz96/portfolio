import 'styled-components'

import theme from './theme'

interface Theme {
  name: string;
  colors: {
    header: string;
    body: string;
    primary: string;
    text: string;
    secondaryText: string;
    danger: string;
    icon: string;
    toggle: string;
  },
  font: {
    heading: string;
    body: string;
  },
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}