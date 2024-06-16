import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const WideButton = (props: {
  name: string;
  link: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="w-[200px]">
      <Link href={props.link}>
        <Button className="w-full">{props.name} &nbsp; {props.icon}</Button>
      </Link>
    </div>
  );
};
