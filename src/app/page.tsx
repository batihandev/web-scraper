import Image from "next/image";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="">
      <div>
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
        <h1 className=" mt-2 mb-5 text-center text-3xl font-bold text-black">
          Welcome to the Web Scraper
        </h1>

        <h2 className="text-center text-lg italic text-black/50">
          To get started, please enter a URL in the search bar above and click
        </h2>
      </div>
    </main>
  );
}
