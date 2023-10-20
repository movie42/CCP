/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { THead, TableContainer } from './style';
import {
  CellContext,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import TableContext, { useTableContext } from './hooks';
import TBody from './components/TBody';

interface ITableProps<TData> extends React.HTMLAttributes<HTMLTableElement> {
  data: TData[];
  children: React.ReactNode;
  emptyMessage?: string;
}

const Table = <TData,>(props: ITableProps<TData>) => {
  const { data, children, emptyMessage, ...TableProps } = props;

  const columns = React.Children.toArray(children)
    .map(child => {
      if (
        !React.isValidElement(child) ||
        (typeof child.type === 'function' &&
          child.type?.displayName !== 'TableCol')
      )
        return null;

      const { accessor, header, cell, ...others } =
        child.props as TableColProps<TData>;
      return {
        header,
        accessorKey: accessor,
        cell: cell ?? (value => value.renderValue()),
        meta: others,
      } as ColumnDef<TData>;
    })
    .filter(Boolean) as ColumnDef<TData>[];

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContext.Provider value={{ data }}>
      <TableContainer {...TableProps}>
        {children}
        <THead>
          {tableInstance.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </THead>
        <TBody
          rows={tableInstance.getRowModel().rows}
          emptyMessage={emptyMessage}
        />
      </TableContainer>
    </TableContext.Provider>
  );
};

/********************************************************************** */
interface TableColProps<T> {
  className?: string;
  header: string | React.ReactNode;
  accessor: keyof T;
  cell?: (value: CellContext<T, any>) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const TableCol = <T,>({ children }: TableColProps<T>) => {
  const context = useTableContext();
  return children ? <>{children}</> : null;
};

TableCol.displayName = 'TableCol';

interface TableCellProps<T> {
  children?: React.ReactNode;
}

const TableCell = <T,>(props: TableCellProps<T>) => {
  const { children } = props;
  return <>{children}</>;
};

interface TableCaption {
  children: React.ReactNode;
}

const TableCaption = ({ children }: TableCaption) => {
  return <caption>{children}</caption>;
};

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
 * 2. 이중 header 케이스
 * <Table headerList data={data}/>
 */

Table.Col = TableCol;
Table.Cell = TableCell;
Table.Caption = TableCaption;
export default Table;
