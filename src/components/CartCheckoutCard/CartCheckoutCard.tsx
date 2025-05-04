import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { CartItemProps } from "@/hooks/useCart";

interface ICartCheckoutProps {
  cartItems: CartItemProps[];
  total: number;
}

function CartCheckoutCard({cartItems, total}: ICartCheckoutProps) {
  return (
    <Card className="min-h-60 h-fit w-full md:w-[40%]">
      <CardHeader>
        <CardTitle>{cartItems.length} items</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between">
            <p>Sum</p>
            <p>${total}</p>
          </div>
          <Separator />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-medium">Total</p>
            <p>${total}</p>
          </div>
          <Separator />
        </div>
        <Button>BUY</Button>
      </CardContent>
    </Card>
  );
}

export default CartCheckoutCard;
