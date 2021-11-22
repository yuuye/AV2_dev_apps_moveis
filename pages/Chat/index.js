import React, { useContext, useState, useEffect } from 'react';

import firebaseApp from '../../services/firebase';

import { Container, Button, ButtonText, Message } from './styles'

import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    query,
    where
} from 'firebase/firestore';

const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, "mensagens"), where("lido", "!=", true)),
            (QuerySnapshot) => {
                const tmp = [];

                QuerySnapshot.forEach(async (document) => {
                    tmp.push({
                        id: document.id,
                        ...document.data()
                    })
                })

                setMessages(tmp);
            })

        return () => {
            unsub()
        }
    }, [])

    const db = getFirestore(firebaseApp);

    async function handleMessage() {
        try {
            await addDoc(collection(db, 'mensagens'), {
                lido: false,
                mensagem: 'olá'
            })
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <Container>
            <Button onPress={() => { handleMessage() }}>
                <ButtonText>Enviar mensagem</ButtonText>
            </Button>

            {messages.map((item) => (
                <Message key={item.id}>{item.id}</Message>
            ))}

        </Container>
    )
}

export default Chat;