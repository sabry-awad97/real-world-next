'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeIcon = colorMode === 'light' ? SunIcon : MoonIcon;

  return (
    <Box
      width="100%"
      padding="1"
      backgroundColor={useColorModeValue('whatsapp.500', 'gray.700')}
    >
      <Box maxWidth="container.xl" margin="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Box maxWidth="container.xl">
            <Link href="/">
              <Button size="xs" borderRadius="sm">
                Home
              </Button>
            </Link>
            <Link href="/users">
              <Button size="xs" marginLeft="2" borderRadius="sm">
                Users
              </Button>
            </Link>
          </Box>

          <Button
            aria-label="UI Theme"
            leftIcon={<ColorModeIcon />}
            onClick={toggleColorMode}
            size="xs"
            borderRadius="sm"
          >
            Toggle theme
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default TopBar;
