import Image from "next/image"
import profileImg from "@/public/profile.jpeg"
import { FaUserAlt, FaGraduationCap, FaSuitcase, FaCircle } from "react-icons/fa";
import Item from "@/components/Item"
import { languages, programingLanguages, frontEnd, backEnd, design, principles, employments, educations, courses } from "@/data/items"

export default function Home() {


  return (
    <main className="w-[9.5in] m-auto">
      <div className="grid grid-cols-3 gap-8 mt-4">
        <div className="col-span-2">
          <div className="flex items-center mb-8">
            <Image className="rounded" src={profileImg} alt="Profile Picture" width={80} height={80}></Image>
            <div className="ml-4">
              <h1 className="text-3xl font-medium leading-7">Enmanuel Martínez Antigua</h1>
              <p className="leading-5 text-md">Full Stack Web Developer</p>
              <p className="leading-5 text-sm">Age: 33</p>
            </div>
          </div>
          <div className="mb-8 flex">
            <FaUserAlt className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg leading-5 font-medium">Profile</h2>
              <p>I am a self-taught web developer, with more than 6 years of experience developing websites, web applications, administrative systems, and hybrid mobile applications. I describe myself as a person who likes to be updated with the new web standards and best practices.</p>
            </div>
          </div>
          <div className="mb-8 flex">
            <FaSuitcase className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg leading-5 font-medium">Employment History</h2>
              {
                employments.map((item) => (
                  <div key={item.name}>
                    <p className="font-bold text-sm pt-2">{item.name}</p>
                    <div className="text-xs">{item.year}</div>
                    <div className="text-sm mb-1">{item.description}</div>
                    {item.list &&
                      item.list.map((l, index) => (
                        <div className="flex" key={index}>
                          <FaCircle className="text-[8px] leading-3 mt-1 min-w-[5px] w-[5px]" /><div className="text-xs ml-1">{l}</div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mb-8 flex">
            <FaGraduationCap className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg leading-5 font-medium">Education</h2>
              {
                educations.map((item) => (
                  <div key={item.name}>
                    <p className="font-bold text-sm pt-2">{item.name}</p>
                    <div className="text-xs">{item.year}</div>
                    <div className="text-sm">{item.description}</div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mb-8 flex">
            <FaSuitcase className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg leading-5 font-medium">Courses</h2>
              {
                courses.map((item) => (
                  <div key={item.name}>
                    <p className="font-bold text-sm pt-2">{item.name} at {item.location}. <span className="text-xs font-medium">{item.accreditation}</span></p>
                    {item.author && <div className="text-xs">Imparted by {item.author}</div>}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Details</h2>
            </div>
            <div className="flex flex-col text-sm">
              <p>Santo Domingo</p>
              <p>Dominican Republic</p>
              <p>809-399-9429</p>
              <p>enmanuelpsy@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-end mb-2">
                  <h2 className="text-md font-medium h-[16px]">Links</h2>
                </div>
                <div className="flex flex-col">
                  <a className="text-xs" href="https://www.instagram.com/enmanuel7383/">
                    Instagram
                  </a>
                  <a className="text-xs" href="https://ema.saonas.com/">
                    Portfolio
                  </a>
                  <a className="text-xs" href="https://github.com/PsyEnmanuel">
                    Github
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-end mb-2">
                  <h2 className="text-md font-medium h-[16px]">Hobbies</h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Reading, Dancing, Video Games, Exercises, Sports, Music</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Programing Languages</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                programingLanguages.map(item => (
                  <Item item={item} key={item.name} color="bg-red-400" />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Front-End</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                frontEnd.map(item => (
                  <Item item={item} key={item.name} color="bg-rose-400" />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Back-End</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                backEnd.map(item => (
                  <Item item={item} key={item.name} color="bg-rose-400" />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Design</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                design.map(item => (
                  <Item item={item} key={item.name} color="bg-rose-400" />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Software Development Principles</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                principles.map(item => (
                  <Item item={item} key={item.name} color="bg-rose-400" />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Languages</h2>
            </div>
            <div className="flex flex-col text-sm">
              {
                languages.map(item => (
                  <Item item={item} key={item.name} color="bg-red-400" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
