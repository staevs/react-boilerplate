import { extendTheme } from '@chakra-ui/react';

import { getScrollbarStyles } from './utils/getScrollbarStyles';

export const theme = extendTheme({
  styles: {
    global: {
      '*': {
        ...getScrollbarStyles()
      }
    }
  }
});
