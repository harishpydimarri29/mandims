import { Button } from "@/components/ui/button";
import Link from "next/link";

export const WideButton = (props: {
    name: string;
    link: string;
  }) => {
    return (
      <div className="w-[150px]">
        <Link href={props.link}>
          <Button className="w-full">{props.name}</Button>
        </Link>
      </div>
    );
  };

