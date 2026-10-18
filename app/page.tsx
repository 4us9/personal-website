import Image from "next/image";
import { Fugaz_One } from 'next/font/google';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

const fugaz = Fugaz_One({
  weight: '400',
  subsets:['latin'], 
  variable: '--fugaz'
});


export default function Home() {
  return (
    <>
        
      <header className="sticky top-0 z-50 w-full bg-violet-600 py-4 px-8">
        <div className="flex justify-end items-center gap-5 text-3xl">
          <a href="https://www.linkedin.com/in/austinpang9" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-white hover:text-sky-400 transition-colors" />
          </a>
          <a href="https://www.github.com/4us9" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-white hover:text-sky-400 transition-colors"/>
          </a>
          
          <a href="mailto:austinpang19@gmail.com">
            <AiFillMail className="text-white hover:text-sky-400 transition-colors" />
          </a>
        </div>
      </header>
  
  <section className="gradient-hero">
    <div className="blur">
      <div className="gradient-mask">
        <div className="spinning-gradient"></div>
      </div>
    </div>

        {/* two-column content */}
  <div className="content-wrap grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-8 md:px-16 max-w-6xl mx-auto">

    {/* LEFT column — text */}
    <div className="flex flex-col items-start text-left gap-5">
      <span className="text-7xl text-lg tracking-wide text-white">HELLO! 👋 I'M</span>

      <h1 className={`${fugaz.className} hero-name text-8xl`}>
        Austin Pang
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-md leading-relaxed">
        A fourth-year Computer Science student at the University of Saskatchewan,
        graduating <span className="text-sky-300 font-semibold">April 2027</span>.
        I build with <span className="text-sky-300 font-semibold">AI agents</span>,{" "}
        <span className="text-sky-300 font-semibold">full-stack development</span>,
        accessibility testing, and content creation.
      </p>

      <p className="text-base text-white/70 max-w-md leading-relaxed">
        Open to work. Seeking a remote winter internship and new grad roles for 2027.
      </p>

      {/* icons */}
      <div className="flex items-center gap-5 text-3xl mt-2">
        <a href="https://www.linkedin.com/in/austinpang9" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-white hover:text-sky-400 transition-colors" />
        </a>
        <a href="https://www.github.com/4us9" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="text-white hover:text-sky-400 transition-colors" />
        </a>
        
        <a href="mailto:austinpang19@gmail.com">
          <AiFillMail className="text-white hover:text-sky-400 transition-colors" />
        </a>
      </div>
    </div>

    {/* RIGHT column — photo */}
    <div className="flex justify-center md:justify-end">
      <Image
        className="rounded-2xl"
        src="/landing_page.jpeg"
        alt="Austin Pang"
        width={400}
        height={500}
        priority
      />
    </div>
  </div>

  <hr className="w-full max-w-6xl mx-auto my-12 border-t border-white/20" />

  <h1 className={`${fugaz.className} hero-name text-white text-5xl`}>
      Featured Projects 
  
  </h1>

  </section>




    </>
  );
}
