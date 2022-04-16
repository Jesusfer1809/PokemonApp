import React from "react"
import { getCsrfToken, getProviders, signIn, getSession } from "next-auth/react"

import Image from "next/image"

import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"

export default function SignIn({ providers, csrfToken }) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[minmax(800px,_1fr)_1fr]">
      <div className=" relative flex h-screen items-center justify-center bg-project_main p-4 text-white">
        <Link href="/">
          <div className=" absolute top-4 left-4 min-w-fit cursor-pointer font-medium">
            TRADECAVE | NFT
          </div>
        </Link>

        <div className="w-full md:w-4/5">
          <Link href="/">
            <div className="flex items-center text-[#119DFA]">
              <ChevronLeftIcon className="h-6 w-6" />
              <span>Back</span>
            </div>
          </Link>

          <h1 className="mt-4 block text-3xl font-medium">Sign In</h1>

          <form
            method="post"
            action="/api/auth/signin/email"
            className="mt-8 flex flex-col"
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-3 rounded-md bg-[#E8F0FE] p-3 text-project_main  focus:outline-none"
              placeholder="Email Address"
            />
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <button
              type="submit"
              className=" mt-8 w-full rounded-md bg-gradient-to-r from-[#119DFA] to-[#11CBFA] py-3 font-medium text-white"
            >
              Sign in with Email
            </button>
          </form>

          <div className="mt-16">
            <button
              onClick={() => signIn(providers.google.id, { callbackUrl: "/" })}
              className="w-full rounded-md bg-gradient-to-r from-[#119DFA] to-[#11CBFA] py-3 font-medium text-white"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: ` url(https://i.imgur.com/PC2sunS.jpg)` }}
        className=" hidden bg-cover bg-center brightness-75 lg:inline "
      ></div>
    </div>
  )
}

{
  /* <>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
      {
        <button
          onClick={() => signIn(providers.google.id, { callbackUrl: "/" })}
        >
          Sign in with Google
        </button>
      }
    </> */
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)

  return {
    props: { providers, csrfToken },
  }
}
