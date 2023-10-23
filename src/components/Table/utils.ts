import { CellContext } from '@tanstack/react-table';
import React from 'react';

const BASE_META = {
  align: 'center',
};

export const getColumns = <T>(children: React.ReactNode) => {
  return React.Children.toArray(children)
    .map(child => {
      if (
        !React.isValidElement(child) ||
        (typeof child.type === 'function' &&
          child.type?.displayName !== 'TableCol')
      )
        return null;

      const { accessor, header, cell, ...others } = child.props;
      return {
        id: accessor,
        header,
        accessorKey: accessor,
        cell: cell ?? ((value: CellContext<T, unknown>) => value.renderValue()),
        meta: { ...BASE_META, ...others },
      };
    })
    .filter(Boolean);
};

export const cn = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(' ');

export const cond = (condition: boolean, className: string) =>
  condition ? className : '';
