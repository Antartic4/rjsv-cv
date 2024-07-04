import Image from 'next/image';
import profileImg from '@/public/profile.png';
import {
  FaUserAlt,
  FaGraduationCap,
  FaSuitcase,
  FaCircle,
} from 'react-icons/fa';
import Item from '@/components/Item';
import {
  languages,
  programingLanguages,
  frontEnd,
  backEnd,
  design,
  principles,
  employments,
  educations,
  courses,
} from '@/data/items';

export default function Home() {
  return (
    <main className="w-[9.5in] m-auto">
      <div className="grid grid-cols-3 gap-8 mt-4">
        <div className="col-span-2">
          <div className="flex items-center mb-8">
            <Image
              className="rounded"
              src={profileImg}
              alt="Profile Picture"
              width={125}
              height={125}
            ></Image>
            <div className="ml-4">
              <h1 className="text-3xl font-medium leading-7">
                Roberto Jose Serrano Veras
              </h1>
              <p className="leading-5 text-md">Full Stack Web Developer</p>
              <p className="text-sm leading-5">Age: 28</p>
            </div>
          </div>
          <div className="flex mb-8">
            <FaUserAlt className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg font-medium leading-5">Profile</h2>
              <p>
                I am a results-driven Programming Analyst with 7 years of
                experience in developing and deploying scalable web applications
                using React, Next.js, MongoDB, and other modern web
                technologies. I have worked extensively with C# throughout my
                career and started focusing on web development 4 years ago. I am
                currently enhancing my skills through a Master&apos;s degree in
                Computer Science, focusing on Software Engineering.
              </p>
            </div>
          </div>
          <div className="flex mb-8">
            <FaSuitcase className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg font-medium leading-5">Experience</h2>
              {employments.map((item) => (
                <div key={item.name}>
                  <p className="pt-2 text-sm font-bold">{item.name}</p>
                  <div className="text-sm">{item.description}</div>
                  <div className="mb-1 text-xs">{item.year}</div>
                  {item.list &&
                    item.list.map((l, index) => (
                      <div className="flex" key={index}>
                        <FaCircle className="text-[8px] leading-3 mt-1 min-w-[5px] w-[5px]" />
                        <div className="ml-1 text-xs">{l}</div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex mb-8">
            <FaGraduationCap className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg font-medium leading-5">Education</h2>
              {educations.map((item) => (
                <div key={item.name}>
                  <p className="pt-2 text-sm font-bold">{item.name}</p>
                  <div className="text-xs">{item.year}</div>
                  <div className="text-sm">{item.description}</div>
                  <div className="text-sm">{item.gpa}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mb-8">
            <FaSuitcase className="min-w-[34px]" />
            <div className="flex flex-col mb-2">
              <h2 className="text-lg font-medium leading-5">Courses</h2>
              {courses.map((item) => (
                <div key={item.name}>
                  <p className="pt-2 text-sm font-bold">
                    {item.name} at {item.location}.{' '}
                    <span className="text-xs font-medium">
                      {item.accreditation}
                    </span>
                  </p>
                  {item.author && (
                    <div className="text-xs">Imparted by {item.author}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2 pt-7">
              <h2 className="text-md font-medium h-[16px]">Details</h2>
            </div>
            <div className="flex text-sm text-center justify-evenly">
              <div>
                <h3>Location: USA</h3>
                <p>Weston, FL</p>
                <p>+1-786-936-5239</p>
              </div>
              <div>
                <h3>Location: DR</h3>
                <p>Santo Domingo</p>
                <p>+1-829-420-3537</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-end mb-2">
                  <h2 className="text-md font-medium h-[16px]">Links</h2>
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-xs"
                    href="https://www.linkedin.com/in/roberto-serrano-a03069176/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-xs"
                    href="https://www.instagram.com/itsrobbeh/"
                  >
                    Instagram
                  </a>
                  <a className="text-xs" href="https://rjsv.vercel.app/">
                    Portfolio
                  </a>
                  <a className="text-xs" href="https://github.com/Antartic4">
                    Github
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-end mb-2">
                  <h2 className="text-md font-medium h-[16px]">Hobbies</h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">
                    Surfing, Video Games, Golf, and Baking bread
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">
                Programing Languages
              </h2>
            </div>
            <div className="flex flex-col text-sm">
              {programingLanguages.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Front-End</h2>
            </div>
            <div className="flex flex-col text-sm">
              {frontEnd.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Back-End</h2>
            </div>
            <div className="flex flex-col text-sm">
              {backEnd.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Design</h2>
            </div>
            <div className="flex flex-col text-sm">
              {design.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">
                Software Development Principles
              </h2>
            </div>
            <div className="flex flex-col text-sm">
              {principles.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-end mb-2">
              <h2 className="text-md font-medium h-[16px]">Languages</h2>
            </div>
            <div className="flex flex-col text-sm">
              {languages.map((item) => (
                <Item item={item} key={item.name} color="bg-purple-800" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
