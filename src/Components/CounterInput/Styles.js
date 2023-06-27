import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 8px;
  font-size: 18px;
`

const Label = styled.label`
  margin-right: 16px;
  margin-left: 8px;
`

const Button = styled.button`
  padding: 8px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Value = styled.span`
  
  margin: 0 8px;
`;

const Row =  styled.div`
  display: flex;
  flex-direction: column;
`

export {Value , Button , Container, Row , Label, CounterContainer ,MainContainer}
