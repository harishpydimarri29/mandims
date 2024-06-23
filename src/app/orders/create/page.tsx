import {ComboboxSearchCustomer} from "@/components/molecules/combobox-search-customer";
import {OrderBond} from "@/components/molecules/order-bond";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {CirclePlus, Plus, Printer} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {ItemsList} from "@/components/molecules/items-list";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "2",
    totalAmount: "250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "3",
    totalAmount: "150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "1",
    totalAmount: "350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "2",
    totalAmount: "450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "2",
    totalAmount: "550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "3",
    totalAmount: "200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "1",
    totalAmount: "300.00",
    paymentMethod: "Credit Card",
  },
];
export default function OrderCreatePage() {
  const date = new Date(); // in dd-mm-yyyy format
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();
  const billNo = Math.floor(Math.random() * 10000);

  return (
    <main>
      <div className="flex flex-col items-center gap-3 my-2">
        <b className="text-xl">ORDER</b>
        <Separator/>
        <div>
          Customer Name :{" "}
          <b>
            <ComboboxSearchCustomer/>
          </b>
        </div>
      </div>
      <Separator/>
      <div className="flex justify-end mr-2 my-2 print:hidden gap-1">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="sm">
              <Plus size={20}/> Item
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="overflow-scroll">
            <SheetHeader className="mb-2">
              <SheetTitle>Choose Items</SheetTitle>
            </SheetHeader>
            <ItemsList isInSideBar={true}/>
          </SheetContent>
        </Sheet>
      </div>
      <Separator/>
      <Table>
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Rate / Unit</TableHead>
            <TableHead>Count</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="text-right">
              Bags
            </TableCell>
            <TableCell>14</TableCell>
            <TableCell className="text-right">2,500.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="text-right">
              Charges
            </TableCell>
            <TableCell>X 5</TableCell>
            <TableCell className="text-right">70.00</TableCell>
          </TableRow>
          <TableRow className="bg-slate-100">
            <TableCell colSpan={2} className="text-right">
              Total
            </TableCell>
            <TableCell colSpan={2} className="text-right text-xl">
              ₹&nbsp;2570.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="m-2 flex justify-between">
        <Button size="sm" variant="secondary">
          <Printer/> &nbsp; Print
        </Button>
        <Button size="sm">Create Bill</Button>
      </div>
      <OrderBond
        customerName="Mr. Harish"
        billNo={billNo}
        orderDate={`{dd}-{mm}-{yyyy}`}
        items={[]}
      />
    </main>
  );
}
