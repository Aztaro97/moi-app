/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="max-w-2xl w-full mx-auto flex flex-col justify-center items-center gap-8 z-10">
        <Image
          src={"/images/logo.png"}
          width={300}
          height={300}
          className="mx-auto mb-5"
          alt="Logo"
          priority
        />
        <h1
          className={cn(
            "md:text-6xl text-xl font-bold text-white relative z-20 m-0"
          )}
        >
          Welcome to <span className="text-[#986d19]">MOI City</span>
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20 text-4xl">
          Explore the virtual world of UAE&apos;s Ministry of Interior services
          through an immersive gaming experience.
        </p>
        <Link href="/game">
          <Button className="bg-[#986d19] text-white hover:bg-white hover:text-[#986d19]">
            Start Your Adventure
          </Button>
        </Link>
      </div>
    </div>
  );
}
