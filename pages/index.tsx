import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import Button1 from './../components/Button1';
import Button2 from '../components/Button2';
import NumberInCircle from './../components/NumberInCircle';
import logo from "../public/logo.svg";
import imageHeroTablet from "../public/tablet/image-hero.png";
import imageWomenVideoChatting from "../public/desktop/image-women-videochatting.jpg";
import imageWomanInVideoCall from "../public/desktop/image-woman-in-videocall.jpg";
import imageMenInMeeting from "../public/desktop/image-men-in-meeting.jpg";
import imageManTexting from "../public/desktop/image-man-texting.jpg";
import imageHeroLeft from "../public/desktop/image-hero-left.png";
import imageHeroRight from "../public/desktop/image-hero-right.png";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  let isDesktop = screenWidth >= 1280;
  let isTablet = screenWidth >= 768;
  let footerBackground = isDesktop ? '/desktop/image-footer.jpg' : isTablet ? '/tablet/image-footer.jpg' : '/mobile/image-footer.jpg';
  
  const updateMedia = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='overflow-hidden max-w-[1440px] mx-auto'>
      <Head>
        <title>Meet Landing Page</title>
      </Head>

      <Image src={logo} alt="logo" className="mx-auto mt-12" />

      {!isDesktop && <Image src={imageHeroTablet} alt="imageHeroTablet" priority className="mx-auto mt-14 w-[108%] max-w-none -translate-x-[4%]" />}

      <div className='mt-12 px-6 xl:flex xl:justify-between xl:items-center'>
        {isDesktop && <Image src={imageHeroLeft} alt="imageHeroLeft" priority className="-translate-x-14" />}
        <div className='mx-auto'>
          <div className='text-center'>
            <h1 className='font-black text-[2.5rem] leading-[2.75rem] md:text-5xl max-w-[339px] mx-auto md:mt-[4.5rem] xl:text-[4rem] xl:max-w-[445px]'>Group Chat for Everyone</h1>
            <p className='mt-6 font-medium text-base leading-[1.625rem] text-[#87879D] max-w-[457px] mx-auto xl:text-lg xl:leading-[1.625rem] xl:mt-[2.125rem]'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
          </div>
          <div className='flex flex-col gap-4 mt-8 items-center text-white font-black text-base leading-[1.625rem] md:flex-row md:justify-center'>
            <Button1 text1='Download' text2='v1.3' />
            <Link className='rounded-[29px] py-4 px-[29px] bg-[#855FB1] hover:bg-[#B18BDD]' href="#">What is it?</Link>
          </div>
        </div>
        {isDesktop && <Image src={imageHeroRight} alt="imageHeroRight" priority className="translate-x-14 self-end" />}
      </div>
      <NumberInCircle text="01" className="mt-16 md:mt-20 xl:mt-[7.3rem]" />
      <div className="px-6 mt-16 md:mt-[67px] text-center">
        <div className="inline-grid grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-none xl:max-w-[1110px]">
          <Image priority className="rounded-lg" src={imageWomenVideoChatting} alt="imageWomenVideoChatting" />
          <Image priority className="rounded-lg" src={imageWomanInVideoCall} alt="imageWomanInVideoCall" />
          <Image priority className="rounded-lg" src={imageMenInMeeting} alt="imageMenInMeeting" />
          <Image priority className="rounded-lg" src={imageManTexting} alt="imageManTexting" />
        </div>
        <div className='mt-16 xl:mt-20'>
          <p className='text-[#4D96A9] uppercase font-black text-base leading-[1.625rem] tracking-[4px]'>Build for modern use</p>
          <h2 className='mt-6 font-black text-[2rem] leading-[2.25rem] max-w-[445px] mx-auto md:text-[2.5rem] md:leading-[2.75rem]'>Smarted meetings, all in one place</h2>
          <p className='mt-8 font-medium text-base leading-[1.625rem] text-[#87879D] max-w-[573px] mx-auto'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
        </div>
      </div>
      <NumberInCircle text="02" className="mt-10 relative -bottom-7 z-10" />
      <div className='bg-no-repeat bg-cover text-center text-white' style={{backgroundImage: `url(${footerBackground})`}}>
        <div className="bg-[#4D96A9]/90 pb-[72px] px-6 pt-24 md:pb-[66px] xl:flex xl:items-center xl:pb-[104px] xl:text-left xl:justify-evenly xl:pt-[116px]">
          <h2 className='font-black text-[2rem] leading-[2.25rem] max-w-[457px] mx-auto md:text-[2.5rem] md:leading-[2.75rem] xl:m-0 xl:max-w-[380px]'>Experience more together</h2>
          <p className='mt-6 font-medium text-lg leading-[1.625rem] max-w-[573px] mx-auto md:mt-8 xl:max-w-[350px] xl:m-0'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
          <Button2 text1='Download' text2='v1.3' className='mt-8 md:mt-10 xl:m-0' />
        </div>

      </div>
    </div>
  )
}
