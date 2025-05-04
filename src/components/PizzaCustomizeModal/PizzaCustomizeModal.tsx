import DialogSubsection from "../DialogSubsection/DialogSubsection";

import { Separator } from "../ui/separator";
import { Dialog, DialogContent } from "../ui/dialog";

import { IPizzaProps } from "@/types";

import { PropsWithChildren } from "react";

import { useShowDialog } from "@/hooks/useShowDialog";

export interface IPizzaCustomizeModalProps {
  customizablePizza: IPizzaProps | null;
  setCustomizablePizza: React.Dispatch<
    React.SetStateAction<IPizzaProps | null>
  >;
}

function PizzaCustomizeModal({
  customizablePizza,
  setCustomizablePizza,
  children,
}: PropsWithChildren<IPizzaCustomizeModalProps>) {
  const {showDialog, handleOpenChange: handleOpenDialogChange} = useShowDialog({
    customizablePizza,
    setCustomizablePizza,
  });

  return (
    <Dialog open={Boolean(showDialog)} onOpenChange={handleOpenDialogChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogSubsection
          title={customizablePizza?.name}
          description={customizablePizza?.description}
        />
        <Separator orientation="horizontal" />
        <DialogSubsection
          title="Customize pizza"
          description="Choose all the ingredients for your pizza..."
        >
          {children}
        </DialogSubsection>
      </DialogContent>
    </Dialog>
  );
}

export default PizzaCustomizeModal;
