import { PropsWithChildren, useEffect, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { IPizzaProps } from "@/types";

interface IDialogProps {
  submitBtnText: string;
  passedState: IPizzaProps | null;
  setPassedState: (item: null) => void;
}

function DialogComponent({
  passedState: customizablePizza,
  setPassedState: setCustomizablePizza,
  children,
}: PropsWithChildren<IDialogProps>) {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (customizablePizza) {
      setShowDialog(true);
    } else {
      setShowDialog(false);
    }
  }, [customizablePizza]);

  function handleOpenChange(isOpen: boolean) {
    setShowDialog(isOpen);
    if (!isOpen) {
      setCustomizablePizza(null);
    }
  }

  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
