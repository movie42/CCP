import styled from 'styled-components';

const TableContainer = styled.div`
  &.scrollable {
    overflow: auto;

    &.X {
      width: 100%;
    }

    &.Y {
      max-height: 500px;
      thead {
        position: sticky;
        /* HACK: border 1px로 인해 top을 -1로 부여 */
        top: -1px;
      }
    }

    &.XY {
      height: 500px;
      width: 100%;
      thead {
        position: sticky;
        top: -1px;
      }
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  table-layout: unset;

  &.empty {
    min-height: 500px;
  }

  thead tr {
    background-color: #f5f5f5;
  }

  th {
    text-align: center;
  }

  tr {
    height: 32px;
  }

  th,
  td {
    border: 1px solid #e2e2e2;
    padding: 8px;
    height: 10px;
    word-break: keep-all;
    white-space: nowrap;
  }

  &.empty {
    min-height: 500px;
  }
`;

const Caption = styled.caption`
  caption-side: top;
  text-align: left;
`;

const THead = styled.thead`
  tr {
    height: 40px;
    background-color: #efefef;
  }
`;

const S = {
  TableContainer,
  Table,
  Caption,
  THead,
};

export default S;
