import styled from 'styled-components';


const RowContainer = styled.div`
  padding: 10px;
   display: flex;
   flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #CDCDCD ;
`

const Label = styled.label`
    margin-left: 12px;
    font-size: 14px;
    font-weight: bold;
`

const Icon =styled.i`
  color: #B5985B;
`

const Item = styled.div`
    font-size: 14px;
    width: 90px;
`

const FooterContainer = styled.div`
    text-align: center;
    padding-left: 30%;
`

const FooterSecondContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const IconLabelContainer = styled.div`
    display: flex;
      width: 100px;
      line-height: 21px;
      align-items: center;
    flex-direction: row;
`
const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #78694C;
`;

const Buy = styled.button`
  margin-top: 8px;
  border-radius: 8px;
  padding: 8px 18px;
  color: white;
  background-color: #78694C;
  cursor: pointer;

`
const BuyPrice = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
`

export {RowContainer , IconLabelContainer, Label, Icon, Item, FooterContainer,Price, Buy, FooterSecondContainer, BuyPrice}
