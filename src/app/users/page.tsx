"use client";
import { WideButton } from "@/components/molecules/wide-button";
import { Button } from "@/components/ui/button";
import { BicepsFlexed, Handshake, PlusIcon, UserRound } from "lucide-react";
import Link from "next/link";

const CreateLink = (props: { type: string }) => {
  return (
    <Link href={`/users/${props.type}/create`}>
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
    </Link>
  );
};

export default function UsersPage() {
  return (
    <main className="flex flex-col my-auto items-center justify-center mt-5 gap-6">
      <div className="text-2xl">USERS</div>
      <div className="flex gap-2 items-center">
        <UserRound size={36} />
        <WideButton name="CUSTOMERS" link="/users/customer" />
        <CreateLink type="customer" />
      </div>
      <div className="flex gap-2">
        <Handshake size={36} />
        <WideButton name="MERCHANTS" link="/users/merchant" />
        <CreateLink type="merchant" />
      </div>
      <div className="flex gap-2">
        <BicepsFlexed size={36} />
        <WideButton name="WORKERS" link="/users/worker" />
        <CreateLink type="worker" />
      </div>
    </main>
  );
}
