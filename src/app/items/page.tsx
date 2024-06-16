import { DataTableDemo } from "@/components/molecules/example-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ItemsPage() {
  return (
    <div className="p-2 text-sm">
      <div className="flex justify-end mb-1">
        <Link href={"/items/create"}>
          <Button size="sm">Add Item</Button>
        </Link>
      </div>
      <DataTableDemo />
    </div>
  );
}
