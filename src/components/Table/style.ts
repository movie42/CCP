import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  min-height: 500px;
  background-color: #f8f8f8;
  border-collapse: collapse;

  thead tr {
    background-color: #f5f5f5;
  }

  th {
    text-align: center;
  }
`;

export const THead = styled.thead`
  tr {
    height: 40px;
    border-bottom: 2px solid #fff;
  }
`;
