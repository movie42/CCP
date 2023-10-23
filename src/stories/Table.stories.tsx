import type { Meta, StoryObj } from '@storybook/react';

import Table from '../components/Table/Table';
import { CouponPaperKeys, CouponPaperType, data } from '../App';

const meta = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    scrollable: {
      options: ['X', 'Y', 'XY'],
      control: { type: 'radio' },
    },
    data: {
      control: { type: 'invisible' },
    },
    emptyMessage: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

const Template: Story = {
  render: ({ data, ...args }) => (
    <Table data={data} {...args}>
      <Table.Col header="쿠폰명" accessor="couponName" />
      <Table.Col
        header={<input type="text" placeholder="할인가격" />}
        accessor="discountValue"
        cell={v => `${v.renderValue().toLocaleString()} 원`}
        className="discountValue"
        align="right"
      />
      <Table.Col
        header="사용여부"
        accessor="isUse"
        cell={v => (v.renderValue() ? '✅' : '❌')}
        align="center"
      />
    </Table>
  ),
};

export const Basic: Story = {
  ...Template,
  args: {
    data: data.slice(0, 2),
  },
};

export const BasicLongData: Story = {
  ...Template,
  args: {
    data: data,
  },
};

export const NoData: Story = {
  ...Template,
  args: {
    data: [],
  },
};

export const Scrollable: Story = {
  render: ({ data, ...args }) => (
    <Table data={data} {...args}>
      {Object.keys(data[0] as CouponPaperType).map(key => (
        <Table.Col
          header={CouponPaperKeys[key as keyof CouponPaperType]}
          accessor={key as keyof CouponPaperType}
        />
      ))}
    </Table>
  ),
  args: {
    data: data,
    scrollable: 'X',
  },
};
