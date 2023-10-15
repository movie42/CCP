import { useContext } from "react";
import { TableContext } from "./Table";



export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Table compound components cannot be rendered outside the Table component");
  }
  return context;
}