import styled from 'styled-components';
import Table from './components/Table/Table';

export type CouponPaperType = {
  id: number;
  discountType: string;
  discountValue: number;
  couponName: string;
  sortSeq: number;
  isUse: boolean;
  useCnt: number;
  useDate: boolean;
  useDateStr: string;
  useDateEnd: string;
  createdAt: string;
  updatedAt: string;
  couponType: string;
  isLimit: boolean;
  limitCnt: number;
};

export enum CouponPaperKeys {
  id = 'ID',
  discountType = '할인타입',
  discountValue = '할인가격',
  couponName = '쿠폰명',
  sortSeq = '순서',
  isUse = '사용여부',
  useCnt = '사용수',
  useDate = '사용기간',
  useDateStr = '사용기간(시작)',
  useDateEnd = '사용기간(종료)',
  createdAt = '생성일',
  updatedAt = '수정일',
  couponType = '쿠폰타입',
  isLimit = '제한여부',
  limitCnt = '제한수량',
}

function App() {
  return (
    <Container>
      <Table data={data}>
        <Table.Caption>
          <Title>일반적인 테이블 ✅</Title>
        </Table.Caption>

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

      <S_Table data={data}>
        <Table.Caption>
          <Title>Styled Table ✅</Title>
        </Table.Caption>

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
          cell={v => (v ? '✅' : '❌')}
          align="center"
        />
      </S_Table>

      <Table data={data} scrollable="Y">
        <Table.Caption>
          <Title>Scrollable Table (Y)</Title>
        </Table.Caption>
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
          cell={v => (v ? '✅' : '❌')}
          align="center"
        />
      </Table>

      <Table data={data} scrollable="X">
        <Table.Caption>
          <Title>Scrollable Table (X)</Title>
        </Table.Caption>
        {Object.keys(data[0]).map(key => (
          <Table.Col
            key={key}
            header={CouponPaperKeys[key as keyof typeof CouponPaperKeys]}
            accessor={key as keyof CouponPaperType}
          />
        ))}
      </Table>

      <Table data={data} scrollable="XY">
        <Table.Caption>
          <Title>Scrollable Table (XY)</Title>
        </Table.Caption>
        {Object.keys(data[0]).map(key => (
          <Table.Col
            key={key}
            header={key}
            accessor={key as keyof CouponPaperType}
          />
        ))}
      </Table>

      {/* Pagination */}
      <Table data={data}>
        <Table.Caption>
          <Title>Pagination Table ❌</Title>
        </Table.Caption>
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
          cell={v => (v ? '✅' : '❌')}
          align="center"
        />
      </Table>

      {/* No data */}
      <Table data={[]} emptyMessage="🧐🧐🧐 없는데요 ">
        <Table.Caption>
          <Title>No data Table 🚧</Title>
        </Table.Caption>
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
          cell={v => (v ? '✅' : '❌')}
          align="center"
        />
      </Table>
    </Container>
  );
}

export default App;

export const data: CouponPaperType[] = [
  {
    id: 168,
    discountType: 'AMOUNT',
    discountValue: 19999,
    couponName: '🍕🔥',
    sortSeq: 1,
    isUse: true,
    useCnt: 2,
    useDate: false,
    useDateStr: '2023-08-18',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-18 15:51:11',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 167,
    discountType: 'AMOUNT',
    discountValue: 30000,
    couponName: '개발서버 수정 테스트322',
    sortSeq: 2,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-18',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-18 14:31:54',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 51,
    discountType: 'AMOUNT',
    discountValue: 5000,
    couponName: '오천원권',
    sortSeq: 3,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 49,
    discountType: 'AMOUNT',
    discountValue: 2000,
    couponName: '이천원권',
    sortSeq: 4,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 53,
    discountType: 'AMOUNT',
    discountValue: 20000,
    couponName: '이만원권',
    sortSeq: 5,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 50,
    discountType: 'AMOUNT',
    discountValue: 3000,
    couponName: '삼천원권',
    sortSeq: 6,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 55,
    discountType: 'AMOUNT',
    discountValue: 40000,
    couponName: '사만원권',
    sortSeq: 7,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 52,
    discountType: 'AMOUNT',
    discountValue: 10000,
    couponName: '만원권',
    sortSeq: 8,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 54,
    discountType: 'AMOUNT',
    discountValue: 30000,
    couponName: '삼만원권',
    sortSeq: 9,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 57,
    discountType: 'AMOUNT',
    discountValue: 60000,
    couponName: '육만원권',
    sortSeq: 10,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 59,
    discountType: 'AMOUNT',
    discountValue: 30,
    couponName: '어질어질 쿠폰',
    sortSeq: 11,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-21',
    createdAt: '2023-07-20 16:21:24',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 58,
    discountType: 'AMOUNT',
    discountValue: 70000,
    couponName: '칠만원권',
    sortSeq: 12,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-04',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-04 09:59:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 63,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '짜글이 하나',
    sortSeq: 13,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:29:08',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 64,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '와! 꽃마름 타이어보다 싸다 22일까',
    sortSeq: 14,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-22',
    createdAt: '2023-07-20 16:30:54',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 65,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '파당파당 쿠폰 5개짜리 22일까지',
    sortSeq: 15,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-22',
    createdAt: '2023-07-20 16:32:23',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 66,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '파당파당 쿠폰 5개짜리 22일까지',
    sortSeq: 16,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-22',
    createdAt: '2023-07-20 16:32:31',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 67,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '파당파당 쿠폰 10개짜리 27일까지',
    sortSeq: 17,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-22',
    createdAt: '2023-07-20 16:32:49',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 68,
    discountType: 'AMOUNT',
    discountValue: 11000,
    couponName: '쿠폰쿠폰',
    sortSeq: 18,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-07-31',
    createdAt: '2023-07-20 16:33:34',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 69,
    discountType: 'AMOUNT',
    discountValue: 700000,
    couponName: '독산짐 3개월권 8월 말까지',
    sortSeq: 19,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-20',
    useDateEnd: '2023-08-31',
    createdAt: '2023-07-20 16:34:37',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 70,
    discountType: 'AMOUNT',
    discountValue: 30,
    couponName: '원천징수만큼 할인해주는 쿠폰',
    sortSeq: 20,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:34:58',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 72,
    discountType: 'AMOUNT',
    discountValue: 500,
    couponName: '분자 쿠폰',
    sortSeq: 21,
    isUse: false,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:35:45',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 73,
    discountType: 'AMOUNT',
    discountValue: 1000,
    couponName: '산소 쿠폰',
    sortSeq: 22,
    isUse: false,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:45:23',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 74,
    discountType: 'AMOUNT',
    discountValue: 10,
    couponName: '쿼크 쿠폰',
    sortSeq: 23,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:45:35',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 75,
    discountType: 'AMOUNT',
    discountValue: 3480000,
    couponName: '맥북 프로 14인치 1개 선착순',
    sortSeq: 24,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:47:50',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 76,
    discountType: 'AMOUNT',
    discountValue: 3980000,
    couponName: '맥북 프로 16인치 3개 선착순',
    sortSeq: 25,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:48:09',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 77,
    discountType: 'AMOUNT',
    discountValue: 5096,
    couponName: '4달라',
    sortSeq: 26,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:48:36',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 78,
    discountType: 'AMOUNT',
    discountValue: 12741,
    couponName: '10달라',
    sortSeq: 27,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:48:51',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 79,
    discountType: 'AMOUNT',
    discountValue: 127409,
    couponName: '100달라',
    sortSeq: 28,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:49:02',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 80,
    discountType: 'AMOUNT',
    discountValue: 10000000,
    couponName: '\b천만원권',
    sortSeq: 29,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:49:12',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 81,
    discountType: 'AMOUNT',
    discountValue: 30000000,
    couponName: '삼천만원권',
    sortSeq: 30,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:49:22',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 82,
    discountType: 'AMOUNT',
    discountValue: 100000000,
    couponName: '연금복권',
    sortSeq: 31,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-20',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-20 16:49:39',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 83,
    discountType: 'AMOUNT',
    discountValue: 50000,
    couponName: '오만원권',
    sortSeq: 32,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-25',
    useDateEnd: '2023-07-27',
    createdAt: '2023-07-25 13:50:40',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 88,
    discountType: 'AMOUNT',
    discountValue: 13000,
    couponName: '택시에선 즐기지말아요 피자헛',
    sortSeq: 33,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-25',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-25 15:28:14',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 89,
    discountType: 'AMOUNT',
    discountValue: 10,
    couponName: '어질어질 쿠쿠폰',
    sortSeq: 34,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-25',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-25 15:33:11',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 94,
    discountType: 'AMOUNT',
    discountValue: 120,
    couponName: '파당파당 쿠폰',
    sortSeq: 35,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-26',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-26 10:52:11',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 95,
    discountType: 'AMOUNT',
    discountValue: 1110,
    couponName: '날짜 확인 쿠폰',
    sortSeq: 36,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-08-28',
    useDateEnd: '2023-08-31',
    createdAt: '2023-07-26 16:00:35',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 96,
    discountType: 'AMOUNT',
    discountValue: 123123,
    couponName: '123',
    sortSeq: 37,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-26',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-26 16:55:32',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 97,
    discountType: 'AMOUNT',
    discountValue: 1000,
    couponName: '빠르게 버튼을따닥하면두번쿠폰생성되는지',
    sortSeq: 38,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-27',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-27 13:47:49',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 98,
    discountType: 'AMOUNT',
    discountValue: 10000,
    couponName: '수정 27일 끝나는 쿠폰 인데 무제한',
    sortSeq: 39,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-27',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-27 13:53:28',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 99,
    discountType: 'AMOUNT',
    discountValue: 5000,
    couponName: 'test123123',
    sortSeq: 40,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-27',
    useDateEnd: '2023-07-27',
    createdAt: '2023-07-27 16:13:46',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 100,
    discountType: 'AMOUNT',
    discountValue: 1000,
    couponName: '당일쿠폰',
    sortSeq: 41,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-27',
    useDateEnd: '2023-07-27',
    createdAt: '2023-07-27 16:22:13',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 101,
    discountType: 'AMOUNT',
    discountValue: 11110,
    couponName: '당일쿠폰2',
    sortSeq: 42,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-07-27',
    useDateEnd: '2023-07-27',
    createdAt: '2023-07-27 16:26:09',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 115,
    discountType: 'AMOUNT',
    discountValue: 2000,
    couponName: '이천원권',
    sortSeq: 43,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-07-31',
    useDateEnd: '9999-12-31',
    createdAt: '2023-07-31 10:03:36',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 123,
    discountType: 'AMOUNT',
    discountValue: 10000,
    couponName: '20글자 쿠폰',
    sortSeq: 44,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-01',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-01 10:57:30',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 124,
    discountType: 'AMOUNT',
    discountValue: 10,
    couponName: '100건',
    sortSeq: 45,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-01',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-01 11:37:00',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 126,
    discountType: 'AMOUNT',
    discountValue: 10000,
    couponName: '100건 짜리',
    sortSeq: 46,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-01',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-01 13:24:22',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 128,
    discountType: 'AMOUNT',
    discountValue: 10,
    couponName: '수정테스트',
    sortSeq: 47,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-01',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-01 13:26:08',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 131,
    discountType: 'AMOUNT',
    discountValue: 1000,
    couponName: '100건 + 사용기간 8월2일',
    sortSeq: 48,
    isUse: true,
    useCnt: 0,
    useDate: true,
    useDateStr: '2023-08-01',
    useDateEnd: '2023-08-02',
    createdAt: '2023-08-01 16:37:37',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 143,
    discountType: 'AMOUNT',
    discountValue: 100,
    couponName: '원자 쿠폰2',
    sortSeq: 49,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-02',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-02 09:57:02',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
  {
    id: 144,
    discountType: 'AMOUNT',
    discountValue: 3000002,
    couponName: '사장님이 미쳤어요',
    sortSeq: 50,
    isUse: true,
    useCnt: 0,
    useDate: false,
    useDateStr: '2023-08-02',
    useDateEnd: '9999-12-31',
    createdAt: '2023-08-02 09:57:15',
    updatedAt: '2023-08-18 15:51:20',
    couponType: 'PAPER',
    isLimit: true,
    limitCnt: 1,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: min(944px, 100%);
  margin-inline: auto;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
`;

const S_Table = styled(Table)`
  color: hotpink;
`;
