import styled from 'styled-components';

const Container = styled.div`
  background-color: #C5C5C5;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
    width: auto;
    height: auto;
    padding-right: 40px;
    align-self: center;
    border: 1px solid #F9F9F9;
      -webkit-box-shadow: -7px 21px 23px 1px rgba(0,0,0,0.57);
      -moz-box-shadow: -7px 21px 23px 1px rgba(0,0,0,0.57);
      box-shadow: -7px 21px 23px 1px rgba(0,0,0,0.57);
    border-radius: 8px;
    background-color: #FFFFFF;
`


const MainRow = styled.div` 
  display: flex;
  flex-direction: row;
`;

const ButtonSearch = styled.div`
      background-color: #B5985B;
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      height: 140px;
      width: 140px;
      align-self: end;
  border-radius: 20px;
  margin-bottom: 15px;
`
const SearchIcon = styled.i`
    color: white;
  position: absolute;
  font-size: 30px;
`

const SubCoulmn = styled.div`
  display: flex;
  flex-direction: column;
`
const InputRow = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
`



export {Container , MainContainer, MainRow , SubCoulmn , InputRow, ButtonSearch, SearchIcon}
