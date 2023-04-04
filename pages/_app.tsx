// Root File
import Header from '@/components/Header';
import '@/styles/globals.css'
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
