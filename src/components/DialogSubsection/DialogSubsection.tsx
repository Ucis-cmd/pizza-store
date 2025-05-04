import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PropsWithChildren } from "react";

interface DialogSubsectionProps {
  title: string | undefined;
  description: string | undefined;
}

function DialogSubsection({
  title,
  description,
  children,
}: PropsWithChildren<DialogSubsectionProps>) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </>
  );
}

export default DialogSubsection;
