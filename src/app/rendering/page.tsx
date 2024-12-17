import Link from 'next/link'
import '../globals.scss'

export default function Rendering(){
  return<div className=''>
    <h1>you in rendering page now</h1>

    <main>
      <h1>виды рендеринга сайта:</h1>
      <ul>
        <li>CSR - <Link href='./rendering/csr'>client side rendering</Link></li>
        <li>SSR - <Link href='./rendering/ssr'>server side rendering</Link></li>
        <li>RSC - react server components</li>
        <li>SSG - static site generation</li>
        <li>ISR  - incremental static regeneration</li>
      </ul>
    </main>

    <Link href='./'>come back</Link>
  </div>
}