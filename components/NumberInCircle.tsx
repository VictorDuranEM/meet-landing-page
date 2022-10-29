export default function NumberInCircle({ text, className }: { text: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="h-[84px] border-r border-[#87879D]/25" aria-hidden="true"></div>
      <p className="w-14 h-14 border border-[#87879D]/25 rounded-full flex justify-center items-center bg-white text-[#87879D] font-black text-base leading-[1.625rem]">{text}</p>
    </div>
  );
}
