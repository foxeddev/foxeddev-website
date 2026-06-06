"use client";

import Image from "next/image";
import arcticFox from "@/public/arctic_fox.jpg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      id="wrapper"
      className="selection:bg-secondary min-h-dvh overflow-x-hidden overflow-y-scroll text-text"
    >
      <Image
        src={arcticFox}
        alt="An arctic fox in a snowy environment"
        placeholder="blur"
        className="top-0 left-0 -z-1 fixed size-full object-cover select-none"
      />
      <header className="flex flex-col justify-end items-center min-h-dvh">
        <div className="flex flex-col gap-4 bg-bg-transparent mt-32 p-4 md:p-16 w-full max-w-4xl">
          <svg
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative mx-auto -mt-32 mb-8"
          >
            <circle cx="128" cy="128" r="128" fill="#1E1E1E" />
            <path
              d="M128 224L48 170.667V64L128 117.333L208 64V170.667L128 224Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
            <path
              d="M117.333 160L90.6667 144V176L117.333 160Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
            <path
              d="M165.333 144L138.667 160L165.333 176V144Z"
              stroke="white"
              strokeWidth="12"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-mono text-text-secondary text-3xl md:text-4xl text-center">
            Error
          </p>
          <h1 className="font-black text-8xl md:text-9xl text-center">404</h1>
          <p className="font-mono text-text-secondary text-lg md:text-xl text-center">
            Not found
          </p>
          <Link
            href="/"
            className="bg-bg hover:shadow-[8px_8px_0_0_var(--color-primary)] mx-auto mt-8 px-8 py-4 w-fit font-medium text-primary text-xl text-center transition hover:-translate-2"
          >
            Home page
          </Link>
        </div>
      </header>
    </div>
  );
}
