import Image from "next/image";
import { Fugaz_One } from 'next/font/google';
import { AiFillLinkedin } from 'react-icons/ai';

const fugaz = Fugaz_One({
  weight: '400',
  subsets:['latin'], 
  variable: '--fugaz'
});


export default function Home() {
  return (
 

    <div className={`${fugaz.className} flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black`}>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">
        <a href="https://www.linkedin.com/in/austinpang9" ><AiFillLinkedin 
        size={50}
        className="rounded-lg bg-blue-600 text-white p-1"
        />
        
        </a>
        
      </div>

      <main className=" flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start tracking-wider">
        <Image
          className="w-100 h-140 rounded-full mx-auto flex justify-center"
          src="/landing_page.jpeg"
          alt="Austin Pang image"
          width={400}
          height={550}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 text-black dark:text-zinc-50">
            Hi there, nice to meet you! I'm Austin. 
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a fourth-year Computer Science student at the University of Saskatchewan. 
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
