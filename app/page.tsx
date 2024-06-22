import Image from "next/image";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-purple-500 flex flex-col space-y-5 justify-center items-center order-1 lg:-order-1 pt-2 pb-8">
          <Image
            src="/images/logo.webp"
            alt="logo"
            priority
            width={1024}
            height={1024}
            className="w-[250px] h-auto"
          />

          <Button className="px-20 bg-purple-700 p-10 text-xl">
            <Link href="/stories">Explore Story Library</Link>
          </Button>
        </div>

        <StoryWriter />
      </section>
    </main>
  );
}
