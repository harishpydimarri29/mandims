import { WideButton } from "@/components/molecules/wide-button";
import { Separator } from "@/components/ui/separator";
import { IndianRupee, ReceiptText } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col my-auto items-center justify-center mt-5 gap-5">
      <span className="text-gray-500">Customer</span>
      <WideButton
        name="BILL ORDER"
        link="/orders/create"
        icon={<ReceiptText />}
      />
      <WideButton
        name="COLLECT PAYMENT"
        link="/collect"
        icon={<IndianRupee />}
      />

      <Separator />
      <span className="text-gray-500">Mandi</span>
      <WideButton name="BUY ITEMS" link="/buy" />
      <WideButton name="PAYMENT" link="/pay" />
      <WideButton name="STOCK" link="/stock" />
      <Separator />
      <div className="text-gray-500">Reports</div>
      <WideButton name="ORDERS" link="/orders" />
      <WideButton name="USERS" link="/users" />
      <WideButton name="ITEMS" link="/items" />
      <Separator />
      <span className="text-gray-500">Others</span>
      <WideButton name="SETTINGS" link="/settings" />
    </main>
  );
}
