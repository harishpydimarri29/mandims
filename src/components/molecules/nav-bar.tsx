import { Montserrat } from "next/font/google";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { BackButton } from "./back-button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const GlobalNavBar = (props: {}) => {
  return (
    <nav className="flex justify-between items-center py-4 px-2 bg-slate-100 print:hidden">
      <BackButton />
      <div className="inline-flex items-center gap-2">
        <Image src="/assets/hanuman.png" alt="logo" width={40} height={40} />
        <b className={cn("text-xl", montserrat.className)}>Sri Maruthi Traders</b>
      </div>
      <Button variant="outline" size="icon">
        <Menu />
      </Button>
    </nav>
  );
};
