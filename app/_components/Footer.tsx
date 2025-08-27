import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="border-t text-gray-400 py-8 mt-12 z-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 z-20">
        <div className="z-20">
          <h2 className="text-purple-500 text-2xl font-semibold">Semih Sazak</h2>
        </div>

        <div className="flex items-center gap-3 lg:gap-6 z-20">
          <Link
            href={"mailto:semihsazak1@outlook.com"}
            className="border p-2 bg-purple-400 rounded-full "
          >
            <GrMailOption className="text-2xl text-black" />
          </Link>
          <Link
            href={"https://github.com/Semihj"}
            className="border p-2 bg-purple-400 rounded-full "
          >
            <FaGithub className="text-2xl text-black" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/semih-sazak"}
            className="border p-2 bg-purple-400 rounded-full "
          >
            <BsLinkedin className="text-2xl text-black" />
          </Link>
        </div>

        <div className="flex z-20 ">
          <p>
            <span className="font-bold text-white">"</span>Always code as if the
            guy who ends up maintaining your code will be a violent psychopath
            who knows where you live.
            <span className="font-bold text-white">"</span>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-600 ">
        © {new Date().getFullYear()} Semih.
      </div>
    </footer>
  );
}
