import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Trivia App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Welcome to Trivia with Sam
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a>
          Powered by 3 brains
        </a>
      </footer>
    </div>
  )
}

export default Home
