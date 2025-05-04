import { IPizzaCustomizeModalProps } from "@/components/PizzaCustomizeModal/PizzaCustomizeModal";
import { useState, useEffect } from "react";

export const useShowDialog = ({
  customizablePizza,
  setCustomizablePizza,
}: IPizzaCustomizeModalProps) => {
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
  return {showDialog, handleOpenChange};
};
