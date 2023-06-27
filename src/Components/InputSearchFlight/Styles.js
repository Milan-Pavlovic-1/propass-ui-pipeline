import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 16px 16px 16px 50px;
  width: 200px;
  border-radius: 4px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  padding: 8px;
  cursor: pointer;
  z-index: 999;
  display: block;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;


const SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export {Container, SearchIcon , ResultItem, Dropdown, Input, DropdownIcon}
