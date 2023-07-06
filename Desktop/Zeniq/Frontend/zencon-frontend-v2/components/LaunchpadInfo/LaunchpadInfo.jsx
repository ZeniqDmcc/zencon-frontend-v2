import React from 'react'
import Link from 'next/link'
import Heading from '../Atoms/Headings/Heading'
import Paragraph from '../Atoms/Paragraph/Paragraph'
import Container from '../Container/Container'

function LaunchpadInfo() {

    const ButtonLaunchpad = "font-Hanson uppercase font-normal text-[16px] leading-[16.16px] text-center w-[320px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"

  return (
      <Container>
              {/* Launchpad Info */}
      <div className="flex flex-col items-center justify-between gap-16 mt-20 640px:gap-10 640px:mt-8 md:flex-row md:gap-0">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center gap-5 text-center 640px:gap-3 md:items-start md:text-left md:justify-start md:gap-8">
            <Heading level='2'>launchpad</Heading>
            <div className="sm:w-[70%] w-[90%]">
                <Paragraph text="Here you can interact with your own projects or the ones you are taking part in." />
            </div>
            <Link className={ButtonLaunchpad} href="/upload-project" passHref>
                submit your projects
            </Link>
        </div>
        {/* Right Side */}
        <div className="flex h-[80px] 640px:h-[50px]">
            <div className="flex flex-col gap-2 pr-16 text-center border-[#2C3C5B] border-r">
                <Heading level='2'>--</Heading>
                <Paragraph text="Your followers" />
            </div>
            <div className="flex flex-col gap-2 pl-16 text-center">
                <Heading level='2'>--</Heading>
                <Paragraph text="Your projects" />
            </div>
        </div>
      </div>
      {/* Join Our Channel */}
      </Container>
  )
}

export default LaunchpadInfo