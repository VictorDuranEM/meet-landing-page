import Link from "next/link";

interface Button1Props {
  text1: string;
  text2: string;
  className?: string;
}

export default function Button1({text1, text2, className}: Button1Props) {
  return <Link className={`font-black inline-block rounded-[29px] py-4 px-10 bg-[#4D96A9] hover:bg-[#71C0D4] ${className}`} href="#">{text1} <span className={`text-[#8FE3F9]`}>{text2}</span></Link>;
}
  