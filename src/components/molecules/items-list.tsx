"use client";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Trash2, Edit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { montserrat } from "../fonts";

const itemsList = [
  {
    name: "Gajaraj 1/2kg",
    unit: "Bag",
    inventory: [
      {
        price: 190.0,
        quantity: 10,
      },
      {
        price: 195.0,
        quantity: 8,
      },
    ],
  },
  {
    name: "Cheese",
    unit: "Kg",
    inventory: [
      {
        price: 380.0,
        quantity: 5,
      },
      {
        price: 375.0,
        quantity: 7,
      },
      {
        price: 385.0,
        quantity: 3,
      },
    ],
  },
  {
    name: "Butter",
    unit: "Kg",
    inventory: [
      {
        price: 310.0,
        quantity: 6,
      },
      {
        price: 315.0,
        quantity: 8,
      },
      {
        price: 305.0,
        quantity: 4,
      },
    ],
  },
  {
    name: "Lettuce",
    unit: "Kg",
    inventory: [
      {
        price: 120.0,
        quantity: 9,
      },
      {
        price: 125.0,
        quantity: 7,
      },
    ],
  },
  {
    name: "Potatoes",
    unit: "Kg",
    inventory: [
      {
        price: 225.0,
        quantity: 8,
      },
      {
        price: 220.0,
        quantity: 10,
      },
      {
        price: 230.0,
        quantity: 6,
      },
    ],
  },
  {
    name: "Rice",
    unit: "Bag",
    inventory: [
      {
        price: 180.0,
        quantity: 10,
      },
      {
        price: 175.0,
        quantity: 12,
      },
      {
        price: 185.0,
        quantity: 8,
      },
    ],
  },
  {
    name: "Tomatoes",
    unit: "Kg",
    inventory: [
      {
        price: 410.0,
        quantity: 7,
      },
      {
        price: 405.0,
        quantity: 9,
      },
      {
        price: 415.0,
        quantity: 5,
      },
    ],
  },
  {
    name: "Dried Fruits",
    unit: "Bag",
    inventory: [
      {
        price: 280.0,
        quantity: 6,
      },
      {
        price: 275.0,
        quantity: 8,
      },
      {
        price: 285.0,
        quantity: 4,
      },
    ],
  },
  {
    name: "Yogurt",
    unit: "Kg",
    inventory: [
      {
        price: 170.0,
        quantity: 8,
      },
      {
        price: 165.0,
        quantity: 10,
      },
      {
        price: 175.0,
        quantity: 6,
      },
    ],
  },
  {
    name: "Chicken",
    unit: "Kg",
    inventory: [
      {
        price: 465.0,
        quantity: 4,
      },
      {
        price: 460.0,
        quantity: 6,
      },
      {
        price: 470.0,
        quantity: 3,
      },
    ],
  },
];

export const ItemsList = (props: {
  isInSideBar?: boolean;
  items?: {
    name: string;
    unit: string;
    inventory: { price: number; quantity: number }[];
  }[];
}) => {
  const [items, setItems] = useState(itemsList);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  useEffect(() => {
    if (debouncedSearchText) {
      console.log(debouncedSearchText);
      setItems(
        itemsList.filter((item) =>
          item.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
        )
      );
    } else {
      setItems(itemsList);
    }
  }, [debouncedSearchText]);
  return (
    <div>
      <div className="flex justify-center flex-col">
        <Input
          className={cn(
            "mb-1",
            props.isInSideBar ? "w-full" : "w-2/3 mt-[-40px]"
          )}
          type="text"
          placeholder="Search Items"
          onKeyUp={(e) => setSearchText(e.currentTarget.value)}
        />
        {debouncedSearchText ? (
          <p>
            Searching for <b>{debouncedSearchText}</b>
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "mt-2 grid gap-2",
          props.isInSideBar
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {items?.length == 0 ? <p>No Items Found</p> : null}
        {items?.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow-md overflow-hidden h-full w-full border flex flex-col justify-between"
          >
            <div>
              <div
                className={cn(
                  "flex justify-center w-full bg-yellow-100 text-xl p-2",
                  montserrat.className
                )}
              >
                {item.name}
              </div>
              <div className="flex justify-center mt-2">
                <Image
                  src={"/items/gajaraj.jpg"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-auto w-auto"
                />
              </div>
              <br />
              <Separator />
              <div className="my-2">
                {item.inventory?.map((inventory) => (
                  <div key={inventory.price} className="flex justify-center">
                    {inventory.price}/{item.unit} - {inventory.quantity}{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <Separator />
              <div className="flex my-2 justify-evenly">
                {props.isInSideBar && (
                  <Button size="sm" variant="outline">
                    Add
                  </Button>
                )}
                {!props.isInSideBar && (
                  <>
                    <Button size="sm" variant="outline">
                      <Edit size={18} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600"
                    >
                      <Trash2 className="text-red-600" size={16} />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
