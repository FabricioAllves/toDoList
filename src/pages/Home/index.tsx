import React, { useState } from "react";
import {
    View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard
} from 'react-native'

import logo from '../../assets/Logo.png'
import { styles } from "./styles";
import Icon from '@expo/vector-icons/Feather'

import { ListTaf } from "../../components/ListTaf";

export function Home() {
    const [listFull, setListFull] = useState<string[]>([])
    const [listAll, setListAll] = useState<string[]>([])
    const [taf, setTaf] = useState('')
    const [count, setCount] = useState(0)
    const [countConcluidas, setCountConcluidas] = useState(0)

    function contadorTafsConcluidas(item: string) {
        if (listAll.includes(item)) {
            setListAll(full => full.filter(taf => taf !== item))
            setCountConcluidas(listAll.length - 1)
        } else {
            setListAll(allTafs => [...allTafs, item])
            setCountConcluidas(listAll.length + 1)
        }
    }

    function handleAdd() {
        if (taf === '') {
            return Alert.alert("Campo vazio!", "Adicione uma tarefa")
        }
        if (listFull.includes(taf)) {
            return Alert.alert("Esta tarefa já existe", "Adicione uma nova tarefa")
        }

        setListFull(allTafs => [...allTafs, taf])
        setCount(listFull.length + 1)
        setTaf('')
        Keyboard.dismiss()
    }

    function onRemoveItem(description: string) {
        Alert.alert("Remover", `Remover esta tarefa?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setListFull(full => full.filter(taf => taf !== description))
                    setListAll(full => full.filter(taf => taf !== description))
                    setCount(listFull.length - 1)
                    setCountConcluidas(listAll.length)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }


    return (
        <>
            <View style={styles.container}>
                <Image source={logo} />
            </View>

            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        value={taf}
                        onChangeText={(text) => setTaf(text)}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={handleAdd}
                    >
                        <Icon name="plus-circle" size={20} color='#fff' />
                    </TouchableOpacity>
                </View>

                <View style={styles.wraper}>
                    <View style={styles.circleCount}>
                        <Text style={styles.wraperText}>Criadas</Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{count}</Text>
                        </View>
                    </View>

                    <View style={styles.circleCount}>
                        <Text style={[styles.wraperText, { color: '#8284FA' }]}>Concluídas</Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{countConcluidas}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={listFull}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ListTaf
                            description={item}
                            onRemove={() => onRemoveItem(item)}
                            count={contadorTafsConcluidas}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={{ alignItems: 'center' }}>
                            <Text
                                style={{ fontWeight: 'bold', color: '#808080' }}>
                                Você ainda não tem tarefas cadastradas</Text>
                            <Text
                                style={{ color: '#808080' }}
                            >Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
}