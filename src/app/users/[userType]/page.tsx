import { Button } from "@/components/ui/button";
import { MandiUser } from "@/types/entities";
import Link from "next/link";

export default function UserPage({
  params,
}: {
  params: {
    userType: MandiUser;
  };
}) {
  return (
    <main className="m-2">
      <div className="flex justify-end">
        <Link href={`/users/${params.userType}/create`}>
          <Button className="capitalize" size="sm">
            Add {params.userType}
          </Button>
        </Link>
      </div>
      <div>UserPage : {params.userType}</div>
    </main>
  );
}
