import { Card, CardTitle, CardDescription, CardHeader } from "../ui/card";

import { CartItemProps } from "@/hooks/useCart";

function CartItem({
  name,
  id,
  price,
  size,
  doughType,
  cheeseType,
  addOns,
}: CartItemProps) {
  const addOnSection = (
    <>
      <p className="font-bold text-black">AddOns:</p>
      {addOns.map((addOn) => <p>{addOn}</p>)}
    </>
  );
  return (
    <Card className="flex flex-row">
      <CardHeader className="flex flex-row w-100 items-center">
        <img
          className="size-30"
          src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
        ></img>
        <div className="flex flex-col gap-2">
          <CardTitle className="">{name}</CardTitle>
          <CardDescription className="">
            ${price}
            <br />
            {size}
            <br />
            {doughType}
            <br />
            {cheeseType}
            <br />
            {addOns.length > 0 && addOnSection}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CartItem;
