/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import S from './style';
import {
  CellContext,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import TableContext from './hooks';
import TBody from './components/TBody';
import { cn, cond, getColumns } from './utils';

type ScrollAxis = 'X' | 'Y' | 'XY';

interface ITableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  data: TData[];
  children: React.ReactNode;
  hasPagination?: boolean;
  scrollable?: ScrollAxis;
  emptyMessage?: React.ReactNode;
}

/**
 * Table component
 * @param {TData[]} data - Data to be displayed in the table
 * @param {React.ReactNode} children - Table children
 * @param {boolean} hasPagination - Whether the table has pagination
 * @param {ScrollAxis} scrollable - Whether the table is scrollable
 * @param {React.ReactNode} emptyMessage - Message to be displayed when the table is empty
 * @returns {React.ReactNode} - Table component
 */
const Table = <TData,>(props: ITableProps<TData>) => {
  const {
    data,
    children,
    emptyMessage,
    scrollable,
    hasPagination = false,
    ...TableProps
  } = props;
  const isEmpty = data.length === 0;
  const columns = getColumns<TData>(children) as ColumnDef<TData>[];

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <TableContext.Provider value={{ data }}>
      <S.TableContainer
        {...TableProps}
        className={cn(cond(!!scrollable, 'scrollable'), scrollable)}
      >
        <S.Table className={cond(isEmpty, 'empty')}>
          {children}
          <S.THead>
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
          </S.THead>
          <TBody
            rows={tableInstance.getRowModel().rows}
            emptyMessage={emptyMessage}
          />
        </S.Table>
      </S.TableContainer>
    </TableContext.Provider>
  );
};

interface TableColProps<T> {
  className?: string;
  header: string | React.ReactNode;
  accessor: keyof T;
  cell?: (value: CellContext<T, any>) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const TableCol = <T,>({ children }: TableColProps<T>) => {
  return children ? <>{children}</> : null;
};

TableCol.displayName = 'TableCol';

interface TableCellProps {
  children?: React.ReactNode;
}

const TableCell = (props: TableCellProps) => {
  const { children } = props;
  return <>{children}</>;
};

interface TableCaption extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}

const TableCaption = ({ children, ...CaptionProps }: TableCaption) => {
  return <S.Caption {...CaptionProps}>{children}</S.Caption>;
};

Table.Col = TableCol;
Table.Cell = TableCell;
Table.Caption = TableCaption;
export default Table;
