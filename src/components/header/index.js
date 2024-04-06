import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="relative z-10 mt-5">
      <div className="px-4 mx-auto lg:px-9 xl:px-10 mosh-container-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-red-500 text-4xl font-bold">Art <span className="text-blue-800">Shop</span></span>
          </Link>
          <div className="items-center md:flex">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
