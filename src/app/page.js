import Image from "next/image";
//import imageProfileDesktop from "/assets/images/image-profile-desktop.webp";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <div className="flex col-2" id="intro">
      
          <Image
            src="/assets/images/pattern-rings.svg"
            alt="rings"
            width={400}
            height={50}
            priority
            className="absolute -z-50 top-32 left-48"
          />
          
        <div className="z-50" id="left-side">
          <p className="text-7xl">Nice to meet you!</p>
          <p className="text-7xl">
            I&apos;m{" "}
            <span className="underline underline-offset-8 decoration-[#4EE1A0]">
              Adam Keyes.
            </span>
          </p>
          <p className="text-sm mt-8 mb-8">
            Based in the UK, I&apos;m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <p className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0]">
            CONTACT ME
          </p>
        </div>
        <div className="md:-z-50" id="right-side">
        <Image
            src="/assets/images/pattern-circle.svg"
            alt="circle"
            width={50}
            height={50}
            priority
            className="float-right -z-50 right-96 top-72"
          />
          <div className="w-full" style={{backgroundImage: "url(/assets/images/image-profile-desktop.webp)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} ></div>
          
        </div>
      </div>
      <hr className="mt-8 mb-8"></hr>
      <div className="w-full" id="skills">
        <div className="md:basis-full flex justify-center md:justify-between md:justity-end flex-wrap mb-8">
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
        <div className="flex justify-center md:justify-between md:justity-end flex-wrap">
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
          <p className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5">
            CONTACT ME
          </p>
        </div>
        <div id="projects-list" className="">
          <Projects />
        </div>
      </div>
    </div>
  );
}
