import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface CheckboxSelectorProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function CheckboxSelector({
  id,
  label,
  checked,
  onCheckedChange,
}: CheckboxSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="size-5"
      />
      <Label htmlFor={id} className="text-base cursor-pointer">
        {label}
      </Label>
    </div>
  );
}

export default CheckboxSelector;
