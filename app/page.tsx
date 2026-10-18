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
  
  <section className="gradient-hero">
    <div className="blur">
      <div className="gradient-mask">
        <div className="spinning-gradient"></div>
      </div>
    </div>

      {/* content layer — sibling, sits on top */}
      <div className="content-wrap">
        {/* ...your icons, image, h1, p... */}
          <div className="text-5xl flex justify-center gap-0.20 py-3">
          <a href="https://www.linkedin.com/in/austinpang9" ><AiFillLinkedin 
          size={50}
          className="rounded-full text-white"
          /> </a>

          <a href="https://www.github.com/4us9" ><AiFillGithub 
          size={50}
          className="rounded-full text-white"
          /> </a>
          </div>

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
            Hi there, nice to meet you! I'm Austin. 
          </h1>
          <p className="max-w-md text-lg leading-8 text-white dark:text-zinc-400">
            I am a fourth-year Computer Science student at the University of Saskatchewan. 
            
          </p>
          </div>
          </main>
      </div>
    </section>
  );
}
