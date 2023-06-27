import React from 'react';
import {Container , ReviewOrderHeader , MainContainer,ButtonContianer,Button, FirstSubContainer, SecondSubContainer} from './styles';
import QRCode from "react-qr-code";
import Modal from 'react-modal';
import Row from './Row';
import RowOption from './RowOption';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#E9E9E9',
        borderRadius: '8px'
    },
};
const BookingRef = ({ modalIsOpen, onClose }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            contentLabel="Offers"
            style={customStyles}
        >
            <Container>
                <ReviewOrderHeader>
                    <label>Booking Reference</label>
                    <i className="fa fa-ticket"></i>
                </ReviewOrderHeader>
                <MainContainer>
                    <FirstSubContainer>
                        <Row icon={'fa-plane'} label={'FlightPasses Packages Muscat -- Riyadh'}></Row>
                        <Row icon={'fa-ticket'} label={'No of Passes 10'}></Row>
                        <Row icon={'fa-ticket'} label={'Category super saver'}></Row>
                        <Row icon={'fa-calendar'} label={'Date of Issue : 14 APR 2023 '}></Row>
                        <Row icon={'fa-usd'} label={'Price: $ 2000'}></Row>
                    </FirstSubContainer>
                    <SecondSubContainer>
                        <h4>SUPERSAVER Option</h4>
                        <RowOption icon={'fa-suitcase'} label={'Cabin Bag 1 x 7 KG'}></RowOption>
                        <RowOption icon={'fa-suitcase'} label={'Check in Bag 0 KG'}></RowOption>
                        <RowOption icon={'fa-wheelchair'} label={'Set Selection Standard'}></RowOption>
                        <RowOption icon={'fa-usd'} label={'Refund Fee: None-Refundable'}></RowOption>
                    </SecondSubContainer>
                </MainContainer>

                <ButtonContianer>
                    <QRCode value="hey"
                            size={100}
                            style={{ height: "auto", maxWidth: "30%", width: "30%" }}
                    ></QRCode>
                    <Button>Print Document</Button>
                </ButtonContianer>
            </Container>
        </Modal>
    )
}

export default BookingRef
