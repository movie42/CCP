import React, { useEffect } from 'react';
import { TableContainer } from './style';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface TableContextProps<T> {
  data: T[];
  columns?: any[];
  addColumns?: (columns: ColumnDef<T>[]) => void;
  onDragEnd?: () => void;
  onDragStart?: () => void;
  onDragOver?: () => void;
  onDrop?: () => void;
}

interface ITableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  data: T[];
  children: React.ReactNode;
  locale?: {
    emptyMessage?: string;
    loading?: string;
  };
}

export const TableContext = React.createContext({});

const Table = <T,>(props: ITableProps<T>) => {
  const {
    data,
    children,
    locale = {
      emptyMessage: '데이터가 없습니다.',
      loading: '로딩중입니다.',
    },
    ...TableProps
  } = props;
  const [columns, setColumns] = React.useState<ColumnDef<T>[]>([]);
  console.log('columns: ', columns);
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const addColumns = (column: any) => {
    setColumns(prev => [...prev, column]);
  };

  const contextValue: TableContextProps<T> = { data, addColumns };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
      <TableContainer {...TableProps}>
        <TableContainer {...TableProps}>
          <thead>
            {tableInstance.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableContainer>
      </TableContainer>
    </TableContext.Provider>
  );
};

/********************************************************************** */
interface TableColProps {
  header: string;
  accessor?: string;
  children?: React.ReactNode;
}

const TableCol = (props: TableColProps) => {
  const { addColumns } = React.useContext(TableContext);
  const { header, accessor, children, TableColProps } = props;

  useEffect(() => {
    addColumns({ header, accessorKey: accessor });
  }, []);

  return children ? <>{children}</> : null;
};

const TableCell = (props: any) => {
  const { children } = props;
  return <>{children}</>;
};

Table.Col = TableCol;
Table.Cell = TableCell;
export default Table;

// 데이터를 표 형식으로 볼 수 있다. (Input으로는 Record<string, any>[] 가 들어오고 output 으로는 JSX.Element)
// 데이터의 표의 간격을 지정할 수 있다.
// Drag and drop 기능을 사용할 수 있다.
// 단일, All checkbox 를 사용할 수 있다.
/**
 * expected use case
 * 1. 일반 적인 케이스 (Log성 table)
 * <Table data={data}>
 *   <Table.Checkbox onChecked={() => {}} />
 *   <Table.DnD onDragEnd={() => {}} />
 *   <Table.Group>
 *    <Table.Col accessor="couponName">쿠폰명</Table.Col>
 *    <Table.Col accessor="discountValue">할인율</Table.Col>
 *   </Table.Group>
 * </Table>
 *
 * <Table data={data}>
 *   <Table.Header>
 *      <Table.HeaderCell accessor="couponName">쿠폰명</Table.HeaderCell>
 *      <Table.HeaderCell accessor="">할인율</Table.HeaderCell>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Cell accessor="couponName">쿠폰명</Table.Cell>
 *     <Table.Cell accessor="">할인율</Table.Cell>
 *   </Table.Body>
 * </Table>
 *
 *
 * 2. 이중 header 케이스
 * <Table headerList data={data}/>
 */
