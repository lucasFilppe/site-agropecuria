import Head from 'next/head'
import Image from 'next/image'
import { MenuAgro } from '../componentes/MenuAgro';
import Produtos from '../componentes/Produtos';



export default function Home() {
  return (
    <div>
      <Head>
          <title>Agroprecu├íriaMineira</title>

      </Head>

      <MenuAgro/>
      <Produtos/>
    </div>
      
  )
}
