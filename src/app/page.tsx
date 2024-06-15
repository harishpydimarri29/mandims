import { WideButton } from "@/components/molecules/wide-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col my-auto items-center justify-center mt-5 gap-5">
      <div className="text-2xl">Actions</div>
      <WideButton name="ORDER" link="/order" />
      <WideButton name="BUY" link="/buy" />
      <WideButton name="COLLECT" link="/collect" />
      <Separator />
      <div className="text-2xl">Reports</div>
      <WideButton name="STOCK" link="/stock" />
      <WideButton name="USERS" link="/users" />
      <WideButton name="ITEMS" link="/items" />
    </main>
  );
}
