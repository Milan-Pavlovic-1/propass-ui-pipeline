import React, {useState} from 'react';
import {Container , ReviewOrderHeader , MainContainer,ButtonContianer,Button, FirstSubContainer, SecondSubContainer} from './styles';
import Modal from 'react-modal';
import Row from './Row';
import RowOption from './RowOption';
import BookingRef from '../BookingRef/BookingRef'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '60%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#E9E9E9',
        borderRadius: '8px'
    },
};
const ReviewOrder = ({ modalIsOpen, onClose }) => {

    const [IsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            contentLabel="Offers"
            style={customStyles}
        >
            <Container>
                <ReviewOrderHeader>
                    <label>Review Order</label>
                    <i className="fa fa-ticket"></i>
                </ReviewOrderHeader>
                <MainContainer>
                    <FirstSubContainer>
                        <Row icon={'fa-plane'} label={'FlightPasses Packages Muscat -- Riyadh'}></Row>
                        <Row icon={'fa-ticket'} label={'No of Passes 10'}></Row>
                        <Row icon={'fa-ticket'} label={'Category super saver'}></Row>
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
                    <Button onClick={openModal}>Proceed</Button>
                </ButtonContianer>
            </Container>
            <BookingRef modalIsOpen={IsOpen} onClose={closeModal} />
        </Modal>
    )
}

export default ReviewOrder
