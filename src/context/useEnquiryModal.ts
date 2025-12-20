import { useContext } from "react";
import { EnquiryModalContext } from "./enquiryModal.context";

export const useEnquiryModal = () => {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error(
      "useEnquiryModal must be used inside EnquiryModalProvider"
    );
  }
  return context;
};
