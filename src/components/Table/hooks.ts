import { createContext, useContext } from 'react';

interface TableContextProps<T> {
  data: T[];
}

const TableContext = createContext({} as TableContextProps<unknown>);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error(
      'Table.* component must be rendered as child of Table component'
    );
  }
  return context;
};

export default TableContext;
