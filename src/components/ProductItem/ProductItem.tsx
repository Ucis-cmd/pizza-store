import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button.tsx";

interface ProductItemProps {
  title: string;
  description: string;
  id: number;
  onCustomize: (id: number) => void;
}

function ProductItem({
  title,
  description,
  id,
  onCustomize,
}: ProductItemProps) {
  function customizeHandler() {
    onCustomize(id);
  }

  return (
    <Card className="w-xs sm:w-sm p-0 m-0 gap-0 h-fit overflow-hidden">
      <CardContent className="p-0">
        <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" />
      </CardContent>
      <CardFooter className="flex justify-between h-30">
        <div className="flex flex-col justify-center items-center gap-1 pt-2">
          <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <Button onClick={customizeHandler} className="w-30 h-20 text-base">
          Customize
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
