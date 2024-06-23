"use client";
import { CUSTOMER_ORDERS_QUERY } from "@/client/graphql/queries/customer-orders";
import { Button } from "@/components/ui/button";
import useAsync from "@/client/hooks/use-async";
import { MandiUser } from "@/types/entities";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import jsonata from "jsonata";
import { useJsonata } from "@/client/hooks/use-jsonata";

export default function UserPage({
  params,
}: {
  params: {
    userType: MandiUser;
  };
}) {
  const { data, loading, error } = useQuery(CUSTOMER_ORDERS_QUERY);
  const transformedData = useJsonata(data, `$.usersCollection.edges.node`);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(transformedData);
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
      {
        transformedData?.map((user: any) => (
          <div key={user.name}>
            {user.name}
          </div>
        ))
      }
    </main>
  );
}
