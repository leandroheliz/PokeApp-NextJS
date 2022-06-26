import { Spacer, Text } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
// style={{ backgroundColor: theme?.colors.red500.value }}

export const Navbar = () => {

  return (
    <div className="navBar">
      <Link href={'/'}>
        <a className="">
      <Text color="black" h2>
        P
      </Text>
      <Text color="grey" h3>
        okemon
      </Text>
      <Spacer />
      <Text color="black" h4>
        A
      </Text>
      <Text color="grey" h5>
        pp
      </Text>
      <Spacer />
      <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"} alt='' width={50} height={50}/>
        </a>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Text color="black" h3>
        Mis Favoritos
      </Text>
    </div>
  );
};
