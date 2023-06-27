import React , {useState} from 'react';
import {Container, InputRow, MainContainer, MainRow, SubCoulmn , SearchIcon , ButtonSearch} from './Style';
import InputSearchFlight from '../../Components/InputSearchFlight/InputSearchFlight';
import CounterInput from '../../Components/CounterInput/CounterInput';
import Offers from '../../Dialogs/Offers/Offers';

const FlightPass = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const searchCountry = ['Jordan', 'Qatar', 'UAE', 'Saudi Arabia'];
    const type= ['business', 'economy'];
    return (
                <MainRow>
                    <SubCoulmn>
                        <InputRow>
                            <InputSearchFlight iconName={"plane-departure"} searchArray={searchCountry} placeholder={"From"}/>
                            <InputSearchFlight iconName={"plane-arrival"} searchArray={searchCountry} placeholder={"To"}/>
                        </InputRow>
                        <InputRow>
                            <InputSearchFlight iconName={"lock"} searchArray={type} placeholder={"Type"}/>
                            <CounterInput/>
                        </InputRow>
                    </SubCoulmn>
                    <ButtonSearch  onClick={openModal}>
                            <SearchIcon className="fa-solid fa-magnifying-glass" />
                    </ButtonSearch>
                    <Offers modalIsOpen={IsOpen} onClose={closeModal} />
                </MainRow>
    )
}

export default FlightPass;
