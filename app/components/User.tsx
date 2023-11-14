'use client';

import { Link } from '@chakra-ui/next-js';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { TUser } from '../data/users';

interface Props {
  user: TUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <Center marginTop={['0', '0', '8']} boxShadow="lg" minHeight="fit-content">
      <Box>
        <Box position="relative">
          <Image
            alt=""
            src={user.cover_image}
            width="100%"
            height="250px"
            objectFit="cover"
          />

          <Flex
            alignItems="flex-end"
            position="absolute"
            top="0"
            left="0"
            backgroundColor={useColorModeValue(
              'blackAlpha.400',
              'blackAlpha.600'
            )}
            width="100%"
            height="100%"
            padding="8"
            color="white"
          >
            <Avatar size="lg" src={user.avatar} />
            <Box marginLeft="6">
              <Text as="h1" fontSize="xx-large" fontWeight="bold">
                {user.first_name} {user.last_name}
              </Text>

              <Text as="p" fontSize="large" lineHeight="1.5">
                {user.job_title}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          maxW="container.xl"
          margin="auto"
          padding="8"
          backgroundColor={useColorModeValue(
            'white',

            'gray.700'
          )}
        >
          <Text as="p">{user.description}</Text>

          <Link href="/users">
            <Button marginTop="8" colorScheme="whatsapp" as="button">
              Back to all users
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};

export default User;
