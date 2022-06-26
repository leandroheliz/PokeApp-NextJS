import { Button, Link, Spacer, Text } from "@nextui-org/react";

import Image from "next/image";
import NextLink from "next/link";

// style={{ backgroundColor: theme?.colors.red500.value }}

export const Navbar = () => {
  return (
    <div className="navBar">
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
          <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"} alt="" width={50} height={50}/>
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
    </div>
  );
};
