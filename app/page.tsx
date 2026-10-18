import Image from "next/image";
import { Fugaz_One } from 'next/font/google';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const fugaz = Fugaz_One({
  weight: '400',
  subsets:['latin'], 
  variable: '--fugaz'
});


export default function Home() {
  return (
    <>
        
      <header className="w-full bg-violet-600 py-4 px-8">
        <div className="flex justify-end items-center gap-5 text-3xl">
          <a href="https://www.linkedin.com/in/austinpang9" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-white hover:text-violet-200 transition-colors" />
          </a>
          <a href="https://www.github.com/4us9" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-white hover:text-violet-200 transition-colors" />
          </a>
        </div>
      </header>
  
  <section className="gradient-hero">
    <div className="blur">
      <div className="gradient-mask">
        <div className="spinning-gradient"></div>
      </div>
    </div>

      {/* content layer — sibling, sits on top */}
      <div className="content-wrap">

          <main className="">
          <Image
            className="w-120 h-120 rounded-xl mx-auto flex justify-center"
            src="/landing_page.jpeg"
            alt="Austin Pang image"
            width={400}
            height={550}
            priority
          />
          <div className={`flex flex-col items-center gap-6 text-center sm:items-start sm:text-left`}>
          <h1 className={`${fugaz.className} max-w-xs text-3xl font-semibold leading-10 text-white dark:text-zinc-50`}>
            Hi there! I'm Austin. 
          </h1>
          <p className="max-w-md text-lg leading-8 text-white dark:text-zinc-400">
            I am a fourth-year Computer Science student at the University of Saskatchewan. 
            
          </p>
          </div>
          </main>
      </div>
    </section>
    </>
  );
}
