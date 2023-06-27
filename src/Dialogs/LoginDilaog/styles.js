import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  height: auto;
  background-color: #FFFFFF;
  justify-content: center;
`
const Input = styled.input`
    border: none;
    padding: 10px;
    background-color: #F4F4F4;
    margin: 8px;
`

const LoginContainer = styled.div`
    text-align: center;
`
const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
  margin-top: 20px;
`

const Header = styled.h1`
  color: #828282;
  text-align: center;
`

const CheckBoxContainer= styled.div`
    text-align: center;
    color: #C7C7C7;
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: 14px;
`

const LoginButton = styled.button`
    border: 1px solid #B8995C;
    border-radius: 8px;
    padding: 10px;
    width: 80px;
    color: white;
    margin-left: 10px;
    background-color: #B8995C;
`
const NewUser = styled.label`
    color: #B8995C;
    font-weight: bold;
    border-right: 1px solid #B8995C;
    padding-right: 4px;
    font-size: 12px;
    cursor: pointer;
`

const ForgetPassword = styled.label`
    color: #B8995C;
    font-weight: bold;
    margin-left: 8px;
    font-size: 12px;
    padding-right: 4px;
    cursor: pointer;
`
const CheckBox = styled.input`
    margin-right: 10px;
`

export {Container , InputContainer , Header, Input , CheckBoxContainer, LoginContainer, CheckBox, NewUser, ForgetPassword, LoginButton};
