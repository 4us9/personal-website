import Image from "next/image";
import { Fugaz_One } from 'next/font/google';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

import ProjectCard from "@/components/ProjectCard";
import FadeInSection from "@/components/FadeInSection";

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
      <span className="text-4xl tracking-wide text-white/70">HELLO! 👋 I'M</span>

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
  </section>

<section className="bg-[#020510] pt-20 pb-24">
  <FadeInSection>
    <div className="max-w-6xl mx-auto px-8 md:px-16">
      <h2 className={`${fugaz.className} text-white text-5xl mb-10`}>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <ProjectCard
          image="/crashcode.png"
          title="CrashCode: AI-Agent Accessibility Testing Tool"
          description="1st place at Co.Hack (team of 4): a web app where 7 LLM agents, each simulating a user with a disability, navigate real websites in parallel browsers and report accessibility issues with code fixes."
          tags={["React", "TypeScript", "Tailwind", "LLM Agents", "WebSockets"]}
        />
        <ProjectCard
          image="/dna-ml.png"
          title="DNA Promoter Sequence Classifier"
          description="Full-stack web app that classifies DNA sequences as promoters or non-promoters using a Random Forest model with 6-mer features, hitting 95% test accuracy."
          repo="https://github.com/4us9/dna-seq-classifier"
          tags={["React", "Tailwind", "FastAPI", "scikit-learn", "Python"]}
        />
      </div>
    </div>
  </FadeInSection>
</section>

{/* <section className="bg-[#020510] pt-20 pb-24">
  <FadeInSection>
    <div className="max-w-6xl mx-auto px-8 md:px-16">
      <h2 className={`${fugaz.className} text-white text-5xl mb-10`}>
        Outside of Coding
      </h2>
      <p>
        I am highly competitive at running...
      </p>
    </div>
  </FadeInSection>
</section> */}

</>
  );
}
