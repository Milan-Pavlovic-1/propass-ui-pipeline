import React from 'react';
import {FooterContainer , FooterSecondContainer, Buy, Price , BuyPrice} from './styles'

const Footer = ({open}) => {
    return (
        <FooterContainer>
            <FooterSecondContainer>
                <BuyPrice>
                    <Price>2500 $</Price>
                    <Buy onClick={()=>open()}>Buy Now</Buy>
                </BuyPrice>
                <BuyPrice>
                    <Price>2500 $</Price>
                    <Buy onClick={()=>open()}>Buy Now</Buy>
                </BuyPrice>
                <BuyPrice>
                    <Price>2500 $</Price>
                    <Buy onClick={()=>open()}>Buy Now</Buy>
                </BuyPrice>
            </FooterSecondContainer>
        </FooterContainer>
    )
}

export default Footer;
