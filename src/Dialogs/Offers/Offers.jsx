import React, {useState} from 'react';
import {Header, Icon, HeaderContainer} from './styles';
import Row from './components/Row'
import Footer from './components/Footer'
import Modal from 'react-modal';
import LoginDilaog from '../LoginDilaog/LoginDilaog'

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


const Offers = ({ modalIsOpen, onClose }) => {
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
            <HeaderContainer>
                <Header>My Cart</Header>
                <Icon className="fa fa-shopping-cart" />
            </HeaderContainer>
            <Row icon={'fa-ticket'} label={'Number of FlightPasses'} superSaver={'10'} smart={'10'} free={'10'}></Row>
            <Row icon={'fa-suitcase'} label={'Cabin Bag'} superSaver={'1x7'} smart={'1x7'} free={'1x7'}></Row>
            <Row icon={'fa-credit-card'} label={'Check in bag'} superSaver={'0KG'} smart={'1x23KG'} free={'2x23KG'}></Row>
            <Row icon={'fa-wheelchair'} label={'Seat Selection'} superSaver={'Standard'} smart={'Standard'} free={'Selected'}></Row>
            <Row icon={'fa-usd'} label={'Refund fee'} superSaver={'None Refundable'} smart={'Medium'} free={'Low'}></Row>
            <Footer open={openModal}/>
            <LoginDilaog modalIsOpen={IsOpen} onClose={closeModal} />
        </Modal>
    );
};

export default Offers;
