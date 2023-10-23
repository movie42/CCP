import { Row, flexRender } from '@tanstack/react-table';

interface TBodyProps<TData> {
  rows: Row<TData>[];
  emptyMessage?: React.ReactNode;
}

const TBody = <TData,>({
  rows,
  emptyMessage = '데이터가 없습니다. 🧐',
}: TBodyProps<TData>) => {
  const isEmpty = rows.length === 0;

  if (isEmpty)
    return (
      <tbody>
        <tr>
          <td colSpan={Number.MAX_SAFE_INTEGER} align="center">
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => {
            return (
              <td key={cell.id} {...cell.getContext().column.columnDef.meta}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
