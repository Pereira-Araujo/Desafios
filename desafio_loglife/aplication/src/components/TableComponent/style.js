import styled from "styled-components";
import { Table } from "antd";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableStyle = styled(Table)`
    min-height:8rem;
    width: 34rem;
    padding:1rem;

    box-shadow: 2px 3px 21px 15px rgba(212,212,212,1);
    .ant-table-wrapper{
        display:flex;
    }


  .ant-table-thead {
    th {      
      /* padding-left: 2rem; */
      padding-bottom: 0.5rem;
    }
    
  }
  .ant-table-cell {
    /* padding-left: 2rem; */
    padding-bottom: 0.5rem;
  }
  .ant-pagination {
    float:right;
    display: flex;
    li {
      list-style: none;
      margin:0.5rem;
     
    }
  }
`;
