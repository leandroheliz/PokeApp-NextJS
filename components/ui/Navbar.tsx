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
        <Button shadow auto color="warning">
          <Text h2>
            P
          </Text>
          <Text color="grey" h3>
            okemon
          </Text>
          <Spacer />
          <Text h4>
            A
          </Text>
          <Text color="grey" h5>
            pp
          </Text>
        </Button>
          <Spacer />
          <Image
      src='/images/pokemonBall.png'
      alt='Favicon Pokeball'
      width={50} height={50}      
      />
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favoritos"} passHref>
        <Link>
        <Button color="error" auto shadow>
            Mis Favoritos
        </Button>
        </Link>
      </NextLink>
      </Container>
    </div>
  );
};
