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
import { useTableContext } from './hooks';

interface ITableProps<TData> extends React.HTMLAttributes<HTMLTableElement> {
  data: TData[];
  children: React.ReactNode;
  locale?: {
    emptyMessage?: string;
    loading?: string;
  };
}

export const TableContext = React.createContext({});

const Table = <TData,>(props: ITableProps<TData>) => {
  const {
    data,
    children,
    locale = {
      emptyMessage: '데이터가 없습니다.',
      loading: '로딩중입니다.',
    },
    ...TableProps
  } = props;

  const columns = React.Children.toArray(children)
    .map(child => {
      if (!React.isValidElement(child) || child.type !== Table.Col) return null;

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
      {children}
      <TableContainer {...TableProps}>
        <THead>
          {tableInstance.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  {...header.getContext().column.columnDef.meta}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </THead>
        <tbody>
          {tableInstance.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td
                    key={cell.id}
                    {...cell.getContext().column.columnDef.meta}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
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
  const { data } = useTableContext();

  return children ? <>{children}</> : null;
};

interface TableCellProps<T> {
  children?: React.ReactNode;
}

const TableCell = <T,>(props: TableCellProps<T>) => {
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
