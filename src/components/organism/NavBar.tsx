import logo from '@assets/logo.webp';
import { HStack, Image } from '@chakra-ui/react';

const NavBar = () => {
   return (
      <HStack justifyContent={'space-between'} padding={'10px'}>
         <Image src={logo} boxSize="60px" />
      </HStack>
   );
};

export default NavBar;
