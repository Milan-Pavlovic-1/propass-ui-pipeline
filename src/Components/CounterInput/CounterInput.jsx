import React, { useState } from 'react';
import {Container , Value , Button , Row, Label, CounterContainer, MainContainer} from './Styles'

const CounterInput = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <MainContainer>
        <Container>
            <Label>No. of Passes</Label>
            <Row>
                <Button onClick={increment}>+</Button>
                <Button onClick={decrement}>-</Button>
            </Row>
        </Container>
            <CounterContainer>
                <Value>{count}</Value>
            </CounterContainer>
        </MainContainer>
    );
};

export default CounterInput;
