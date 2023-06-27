import React, { useState } from 'react';
import Modal from 'react-modal';
import {Container, InputContainer, Header, Input, CheckBoxContainer,LoginContainer, CheckBox, NewUser, ForgetPassword, LoginButton} from './styles';
import ReviewOrder from '../ReviewOrder/ReviewOrder'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const LoginDilaog = ({ modalIsOpen, onClose }) => {
    const [IsOpenReview, setIsOpenReview] = useState(false);

    const openModal = () => {
        setIsOpenReview(true);
    };

    const closeModal = () => {
        setIsOpenReview(false);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        openModal();
        setEmail('');
        setPassword('');
        onClose();
    };

    return (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                contentLabel="Login Modal"
                style={customStyles}
            >
                <Container>

                <Header>Login to Your Account</Header>
                <InputContainer onSubmit={handleSubmit}>
                    <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    <Input
                        placeholder="password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <CheckBoxContainer>
                        <label>
                            <CheckBox
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            Remember me on this Computer
                        </label>
                    </CheckBoxContainer>
                    <LoginContainer>
                        <NewUser>New User</NewUser>
                        <ForgetPassword>Forget Password</ForgetPassword>
                        <LoginButton type="submit">Login</LoginButton>
                    </LoginContainer>
                </InputContainer>
                </Container>
                <ReviewOrder modalIsOpen={IsOpenReview} onClose={closeModal} />
            </Modal>
    );
};



export default LoginDilaog;
