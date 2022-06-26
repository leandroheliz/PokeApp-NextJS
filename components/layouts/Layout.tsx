import * as React from "react";

import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const origin = (typeof window === 'undefined')? '' : window.location.origin;
export const Layout: React.FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App NextJS"}</title>
        <meta name="author" content="Leandro Heliz" />
        <meta name="description" content={`Informaciòn sobre ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informaciòn sobre ${title}`} />
        <meta property="og:description" content={`${title}`}/>
        <meta property="og:image" content={`${origin}/images/pokeball.png`}/>
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};
