'use client';

import type React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '@/lib/theme';
import Providers from '@/store/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Container h="100vh">{children}</Container>
            </ChakraProvider>
          </CacheProvider>
        </Providers>
      </body>
    </html>
  );
}
