import styled from 'styled-components';

const RowContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #CDCDCD ;
`

const RowContainerOption = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Icon =styled.i`
  color: #4B4B4B;
`

const Label = styled.label`
    margin-left: 12px;
    font-size: 14px;
    color: #4B4B4B;
`

const IconLabelContainer = styled.div`
    display: flex;
    line-height: 21px;
    align-items: center;
    flex-direction: row;
`

const ReviewOrderHeader = styled.div`
    background-color: rgb(168, 136, 73);
      color: white;
      padding: 10px;
      width: 37%;
      display: flex;
      margin-left: -20px;
      justify-content: space-evenly;
      align-items: center;
      font-size: 20px;
`;

const Header = styled.label`
    font-weight: bold;
    color: white;
`

const MainContainer = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
`

const ButtonContianer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button =styled.button`
  margin-top: 8px;
  border: none;
  padding: 8px 30px;
  color: white;
  
  background-color: rgb(168, 136, 73);;
  cursor: pointer;

`

const FirstSubContainer = styled.div`
    width: 70%;
`
const SecondSubContainer = styled.div`
    width: 38%;
    border: 1px solid white;
    padding-bottom: 20px;
    text-align: center;
    margin-left: 8px;
`




const Container = styled.div``;

export { Container, ReviewOrderHeader, Icon , Label, RowContainer,ButtonContianer,Button, IconLabelContainer ,RowContainerOption, MainContainer, FirstSubContainer, SecondSubContainer}
