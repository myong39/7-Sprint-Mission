import { ORDER_TYPE_ENUM, orderTypeKeysKR } from "@/constants/orderConstants";
import { ReactElement } from "react";

// Dropdown

export interface TriggerType {
  trigger: ReactElement | string;
}

export interface DropdownProps extends TriggerType {
  items?: string[];
  children?: React.ReactNode;
  onSelect?: (item: string) => void;
  textDrop?: boolean;
  triggerClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  onToggle?: (isOpen: boolean) => void;
}

// SortDropdown

export interface SortDropdownProps {
  onOrderChange: (newOption: string) => void;
  items: typeof orderTypeKeysKR;
  defaultOrderType: string;
}
