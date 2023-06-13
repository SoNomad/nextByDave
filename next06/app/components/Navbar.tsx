import Link from 'next/link';
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl grid place-content-center font-bold mb-2 sm:mb-0">
          <Link href="/" className="text-white/90 no-underline hover:text-white">
            Nomad
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            href="https://github.com/SoNomad"
            target="_blank"
            className="text-white/90 no-underline hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://instagram.com/so.nomad/"
            target="_blank"
            className="text-white/90 no-underline hover:text-white"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://t.me/react_nomad"
            target="_blank"
            className="text-white/90 no-underline hover:text-white"
          >
            <FaTelegram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
