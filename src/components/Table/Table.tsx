import React, { useEffect } from "react";
import { TableContainer } from "./style";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface TableContextProps<T> {
  data: T[];
  columns?: any[];
  addColumns?: (columns: any[]) => void;
  onDragEnd?: () => void;
  onDragStart?: () => void;
  onDragOver?: () => void;
  onDrop?: () => void;
}

interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  data: T[];
  children: React.ReactNode;
}

const TableContext = React.createContext<TableContextProps<any> | null>({
  data: [],
  columns: [],
});

const Table = <T,>(props: TableProps<T>) => {
  const { data, children, ...TableProps } = props;
  const [columns, setColumns] = React.useState<any[]>([]);
  const table = useReactTable({
    data,
    getCoreRowModel: getCoreRowModel(),
    columns,
  });

  const addColumns = (column: any) => {
    setColumns([...columns, column]);
  };

  const contextValue: TableContextProps<T> = { data, addColumns };

  return (
    <TableContext.Provider value={contextValue}>
      {children}
      <TableContainer {...TableProps}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id}>{column.id}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
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
    </TableContext.Provider>
  );
};

interface TableColProps {
  Header: string;
  accessor?: string;
  children?: React.ReactNode;
}

const TableCol = (props: TableColProps) => {
  const { data, addColumns } = React.useContext(TableContext);
  const { Header, accessor, children, TableColProps } = props;

  useEffect(() => {
    addColumns({ Header, accessorKey: accessor });
  }, [Header, accessor]);

  return null;
};

Table.Col = TableCol;
export default Table;

// 데이터를 표 형식으로 볼 수 있다. (Input으로는 Record<string, any>[] 가 들어오고 output 으로는 JSX.Element)
// 데이터의 표의 간격을 지정할 수 있다.
// Drag and drop 기능을 사용할 수 있다.
// 단일, All checkbox 를 사용할 수 있다.
/**
 * expected use case
 * 1. 일반 적인 케이스 (Log성 table)
 * <Table data={data}>
 *   <Table.DnD onDragEnd={() => {}} />
 *   <Table.Group title="쿠폰관련">
 *   <Table.Col accessor="couponName">쿠폰명</Table.Col>
 *   <Table.Col accessor="discountValue">할인율</Table.Col>
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

// 이걸 오히려 Advanced Search 컴포넌트에서 더 잘 사용 할 수 있을 것 같다
/**
 * <AdvancedSearch>
 *   <AdvancedSearch.Row>
 *   <AdvancedSearch.CheckBox qKey="couponType" legend="쿠폰 종류">
 *     <AdvancedSearch.CheckBoxItem value="PAPER">종이쿠폰</AdvancedSearch.CheckBoxItem>
 *     <AdvancedSearch.CheckBoxItem value="DIGITAL">디지털쿠폰</AdvancedSearch.CheckBoxItem>
 *   </AdvancedSearch.CheckBox>
 *   <AdvancedSearch.Search legend="검색어">
 *     <AdvancedSearch.Select value="PAPER">쿠폰명</AdvancedSearch.Select>
 *     <AdvancedSearch.Input qKey="가변형임;;" value={formData.searchInput} placeholder="검색어 입력해라"/>
 *   </AdvancedSearch.Search>
 * </AdvancedSearch>
 */
