import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ItemsList } from "@/components/molecules/items-list";

export default function ItemsPage() {
  return (
    <div className="p-2">
      <div className="flex justify-end mb-1">
        <Link href={"/items/create"}>
          <Button size="sm">Add Item</Button>
        </Link>
      </div>
      {/*<DataTableDemo />*/}
      {/*<br />*/}
      <ItemsList />
    </div>
  );
}
