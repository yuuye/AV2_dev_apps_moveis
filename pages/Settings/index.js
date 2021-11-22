import { UserInterfaceIdiom } from 'expo-constants';
import React, { useContext, useState } from 'react';

import { UsuarioContext } from '../../contexts/user';
import { Container, Button, ButtonText } from './styles'

const Settings = () => {

    const { signOut } = useContext(useContext);

    return (
        <Container>
            <ButtonText>{User.email}</ButtonText>
            <Button onPress={() => { signOut() }}>
                <ButtonText>Sair</ButtonText>
            </Button>
        </Container>
    )
}

export default Settings;