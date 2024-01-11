import Image from "next/image";
import imageProfileDesktop from "../assets/images/image-profile-desktop.webp";

export default function Home() {
  return (
    <div>
      <div className="flex col-2" id="intro">
        <div className="z-50" id="left-side">
          <p className="text-7xl">Nice to meet you!</p>
          <p className="text-7xl">
            I’m{" "}
            <span className="underline underline-offset-8 decoration-[#4EE1A0]">
              Adam Keyes.
            </span>
          </p>
          <p className="text-sm mt-8 mb-8">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <p className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0]">
            CONTACT ME
          </p>
        </div>
        <div className="md:-z-50" id="right-side">
          <Image
            src={imageProfileDesktop}
            alt="adam"
            width={300}
            height={300}
            priority
            className=""
          />
        </div>
      </div>
      <hr className="mt-8 mb-8"></hr>
      <div className="" id="skills">
        <div
          className="md:h-32 grid grid-cols-3 gap-12 content-stretch"
          id="skills-row-1"
        >
          <div className="">
            <p className="text-4xl">HTML</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
          <div className="">
            <p className="text-4xl">CSS</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
          <div className="">
            <p className="text-4xl">JavaScript</p>
            <p className="text-lg">4 Years Experince</p>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-12 content-stretch"
        id="skills-row-2"
      >
        <div className="">
          <p className="text-4xl">Accessibility</p>
          <p className="text-lg">4 Years Experince</p>
        </div>
        <div className="">
          <p className="text-4xl">React</p>
          <p className="text-lg">3 Years Experince</p>
        </div>
        <div className="">
          <p className="text-4xl">Sass</p>
          <p className="text-lg">3 Years Experince</p>
        </div>
      </div>
      <div className="mt-20" id="projects">
        <div id="projects-heading" className="flex justify-between justify-end">
          <div className="text-6xl font-bold">Projects</div>
          <p className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0]">
            CONTACT ME
          </p>
        </div>
        <div id="projects-content">

        </div>
      </div>
    </div>
  );
}
