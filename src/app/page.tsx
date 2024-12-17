import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <header>
        <h1>welcome to my own documentation</h1>
      </header>
      <main>
        <Link href="./rendering">
          rendering
        </Link>
      </main>
    </div>
  )
}
