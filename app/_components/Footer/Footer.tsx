import Link from "next/link";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFEAEB] font-heading shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.3)] h-28 flex">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="#" className="text-black font-bold">PROJECTS</Link>
          <Link href="#" className="text-black font-bold">ABOUT US</Link>
          <Link href="#" className="text-black font-bold">CONTACT</Link>
        </div>
        <div className="text-black font-bold">
          CREATED WITH <span className="text-red-500">❤️</span> BY ADRIANA AND YANN
        </div>
      </div>
    </footer>
  );
}
