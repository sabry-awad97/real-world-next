'use client';

import { Button, VStack, useColorMode, Text } from '@chakra-ui/react';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack padding="10">
      <Text fontSize="4xl" fontWeight="bold" as="h1">
        Chakra UI
      </Text>

      <Text fontSize="2xl" fontWeight="semibold" as="h2">
        Rendering in {colorMode} mode
      </Text>

      <Button aria-label="UI Theme" onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'dark' : 'light'}
        mode
      </Button>
    </VStack>
  );
};

export default Home;
