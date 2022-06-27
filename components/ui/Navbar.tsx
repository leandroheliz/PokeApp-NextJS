import { Button, Container, Image, Link, Spacer, Text } from '@nextui-org/react';

import NextLink from "next/link";

export const Navbar = () => {
  return (
    <div className="navBar">
      <Container display='flex' alignItems='center'>
       <Image src={'/images/gymPoke.png'} alt="Favicon Pikachu" width={50} height={50}/>
         <Spacer />
      <NextLink href={"/"} passHref>
        <Link>
        <Button auto color="warning">
          <Text h2 color='black'>
            P
          </Text>
          <Text color="black" h3>
            okemon
          </Text>
          <Spacer />
          <Text h2 color='black'>
            A
          </Text>
          <Text color="black" h3>
            pp
          </Text>
        </Button>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favoritos"} passHref>
        <Link>
        <Container>
        <Button color="error" auto shadow
        css={{height: '50px'}}
        > Mis Favoritos
      <Image src='/images/favoritos.png' width={50} height={50} alt='Favicon Favoritos'/>
        </Button>
      </Container>
        </Link>
      </NextLink>
      </Container>
    </div>
  );
};
