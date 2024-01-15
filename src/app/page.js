import Image from "next/image";
//import imageProfileDesktop from "/assets/images/image-profile-desktop.webp";
import Projects from "./Components/Projects";


export default function Home() {
  return (
    <div>
      <div className="flex justify-between flex-wrap" id="intro">
        <Image
          src="/assets/images/pattern-rings.svg"
          alt="rings"
          width={400}
          height={50}
          priority
          className="absolute -z-60  md:top-20 left-[-200px] md:left-1 "
        />
        <Image
          srcset="/assets/images/image-profile-desktop.webp 1200w, /assets/images/image-profile-tablet.webp 768w, /assets/images/image-profile-mobile.webp 400w"
          src="/assets/images/image-profile-desktop.webp"
          sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
          width={350}
          height={50}
          alt="rings"
          priority
          className="relative md:absolute -z-50 md:right-56 md:top-0"
        />

        <div className="z-50 text-center md:text-left" id="left-side">
          <p className="md:text-8xl text-4xl">Nice to meet you!</p>
          <p className="md:text-8xl text-4xl">
            I&apos;m{" "}
            <span className="underline underline-offset-8 decoration-[#4EE1A0]">
              Adam Keyes.
            </span>
          </p>
          <p className="md:w-2/4 text-sm mt-8 mb-8">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <a href="#contact" className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0]">
            CONTACT ME
          </a>
        </div>
        <div className="md:-z-50" id="right-side">
          
        </div>
      </div>
      <hr className="mt-10 md:mt-56 mb-8"></hr>
      <div className="w-full text-center md:text-left" id="skills">
        <div className="flex justify-center md:justify-between md:justity-end flex-wrap mb-8 md:gap-0 gap-12">
          <div className="basis-1/3">
            <p className="text-4xl">HTML</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
          <div className="basis-1/3">
            <p className="text-4xl">CSS</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
          <div className="basis-1/3">
            <p className="text-4xl">JavaScript</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-between md:justity-end flex-wrap md:gap-0 gap-12">
          <div className="basis-1/3">
            <p className="text-4xl">Accessibility</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
          <div className="basis-1/3">
            <p className="text-4xl">React</p>
            <p className="text-lg">3 Years Experince</p>
          </div>
          <div className="basis-1/3">
            <p className="text-4xl">Sass</p>
            <p className="text-lg">3 Years Experince</p>
          </div>
        </div>
      </div>
      <div className="mt-20" id="projects">
        <div id="projects-heading" className="flex justify-between justify-end">
          <div className="text-6xl font-bold">Projects</div>
          <a href="#contact" className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5">
            CONTACT ME
          </a>
        </div>
        <div
          id="projects-list"
          className="flex md:justify-center justify-between justify-end"
        >
          <Projects />
        </div>
      </div>
    </div>
  );
}
