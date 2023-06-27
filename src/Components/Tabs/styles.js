import styled from 'styled-components';


const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

const TabItem =  styled.li`
    cursor: pointer;
    font-weight: bold;
    padding-right: 20px;
    border-right: 2px solid black;
    &.active {
     color: #B5985B;
    }

      &:last-child {
        border: none;
      }
`

export {TabList ,TabItem};


