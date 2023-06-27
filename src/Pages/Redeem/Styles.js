import styled from 'styled-components';


const TableHeader = styled.th`
  background-color: #A7884A;
  color: white;
  text-align: center;
  padding: 4px;
`

const Table = styled.table`
  width: 100%;
`

const TableItem = styled.td`
  padding: 4px;
  margin: 18px;
  background-color: #CDCDCD;
`
const Button = styled.button`
  margin-top: 8px;
  border: none;
  padding: 8px 15px;
  color: white;

  background-color: rgb(168, 136, 73);;
  cursor: pointer;
`
const IconEdit = styled.i`
    color: #A7884A;
    cursor: pointer;
    margin-left: 6px;
    border: 0.5px solid #A7884A;
    border-radius: 8px;
    padding: 8px;

`
const H3 = styled.h3`
  text-align: left;
  margin: 3px;
`

const Container = styled.div`
    padding: 8px;
`
const ReedemOrderHeader = styled.div`
    background-color: rgb(168, 136, 73);
      color: white;
      padding: 10px;
      width: 37%;
      display: flex;
      margin-left: -30px;
      justify-content: space-evenly;
      align-items: center;
      font-size: 20px;
      margin-bottom: 20px;
`;

export {TableHeader, Table, TableItem, IconEdit, Button, ReedemOrderHeader, H3, Container}
