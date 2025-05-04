import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "../ui/form";
import { PropsWithChildren } from "react";

interface SelectInputProps {
  placeholder: string;
  onValueChange: () => void;
}

function SelectInput({
  placeholder,
  children,
  onValueChange,
}: PropsWithChildren<SelectInputProps>) {
  return (
    <Select onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectInput;
