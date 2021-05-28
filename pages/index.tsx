import Head from 'next/head'
import Image from 'next/image'
import { MenuAgro } from '../componentes/MenuAgro';
import { Produtos } from '../componentes/Produtos';


export default function Home() {
  return (
    <div>
      <Head>
          <title>AgroprecuáriaMineira</title>

      </Head>

      <MenuAgro/>
      <Produtos/>
    </div>
      
  )
}
