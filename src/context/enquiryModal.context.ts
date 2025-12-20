import { createContext } from "react";

export interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

export const EnquiryModalContext =
  createContext<ModalContextType | null>(null);
