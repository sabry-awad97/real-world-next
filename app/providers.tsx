'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
