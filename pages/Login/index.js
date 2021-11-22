import React, { useContext, useState } from 'react';

import {
    Container,
    Logo,
    CaixaLogin,
    Botao,
    BotaoTexto,
    InputTexto,
    Input,
    ForgotPasswordText,
    ContainerSubmit,
    BotaoSubmit,
    BotaoSubmitTexto

} from './styles';

import logoImg from '../../assets/logo.png'

import { UsuarioContext } from '../../contexts/user';
import { signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {

    const { singIn, singUp } = useContext(UsuarioContext)

    const [email, setEmail] = useState("antonio@antionio.com")
    const [password, setPassword] = useState("123123")
    const [currentButton, setCurrentButton] = useState('membro');


    return (
        <Container>
            <Logo source={logoImg} />
            <CaixaLogin>
                <ContainerBotoes>
                    <Botao
                        lastClick={currentButton == 'membro' ? true : false}
                        onPress={() => { setCurrentButton('membro') }}>
                        <BotaoTexto lastClick={currentButton == 'membro' ? true : false}>
                            Membro
                        </BotaoTexto>
                    </Botao>

                    <Botao
                        lastClick={currentButton == 'convidado' ? true : false}
                        onPress={() => { setCurrentButton('convidado') }}>
                        <BotaoTexto lastClick={currentButton == 'convidado' ? true : false}>
                            Convidado
                        </BotaoTexto>
                    </Botao>
                </ContainerBotoes>

                <InputTexto>E-mail:</InputTexto>
                <Input
                    value={email}
                    placeholder="Digite seu e-mail"
                    onChangeText={text => setEmail(text)}
                />

                <InputTexto>Senha:</InputTexto>
                <Input
                    value={password}
                    placeholder="Digite sua senha"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />

                <ForgotPasswordText>
                    Esqueci minha Senha
                </ForgotPasswordText>

                <ContainerSubmit>
                    <BotaoSubmit onPress={() => { singUp(email, password) }} invert={true}>
                        <BotaoSubmitTexto invert={true}>
                            Cadastre-se
                        </BotaoSubmitTexto>
                    </BotaoSubmit>

                    <BotaoSubmit onPress={() => { signIn(email, password) }}>
                        <BotaoSubmitTexto>
                            Entrar
                        </BotaoSubmitTexto>
                    </BotaoSubmit>
                </ContainerSubmit>


            </CaixaLogin>
        </Container>
    )
}

export default Login;