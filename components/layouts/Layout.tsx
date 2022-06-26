import * as React from 'react';

import Head from 'next/head';
import {Navbar} from '../ui'

type Props = {
  children?: React.ReactNode
  title?: string 
};

export const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title || 'Pokmon App NextJS'}</title>
      <meta name='author' content='Leandro Heliz'/>
      <meta name='description' content={`Datos sobre el Pokemon Nro ${title}`}/>
      <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
    </Head>
    <main>
      <Navbar/>
      {children}
    </main>
    </>
  )
}