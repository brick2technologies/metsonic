import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";
import { EnquiryModalContext } from "./enquiryModal.context";

export const EnquiryModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EnquiryModal open={open} onClose={closeModal} />
    </EnquiryModalContext.Provider>
  );
};
