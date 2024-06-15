import { ArrowLeft, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { BackButton } from "./back-button";

export const GlobalNavBar = (props: {}) => {
  return (
    <nav className="flex justify-between py-4 px-2 bg-slate-100">
        <BackButton />
      <Button variant="outline" size="icon">
        <Menu />
      </Button>
    </nav>
  );
};
