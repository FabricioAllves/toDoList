import { useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/Feather";

import { styles } from "./styles";

interface Tafs {
    description: string,
    onRemove: () => void,
    count: (arg1: string) => void,
}

export function ListTaf({ description, onRemove, count }: Tafs) {
    const [icontrueOrFalse, setIcontrueOrFalse] = useState(false);

    function enviarState() {
        setIcontrueOrFalse(!icontrueOrFalse);
        count(description);
    }
    return (
        <View>
            <View style={styles.card}>

                <TouchableOpacity style={styles.cardButton}
                    onPress={enviarState}
                >


                    {icontrueOrFalse === true ?
                        (<Icon name="check-circle" size={24} color="#4EA8DE" />)
                        :
                        (<Icon name="circle" size={24} color="#4EA8DE" />)}
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {description}
                </Text>

                <TouchableOpacity
                    style={styles.cardButton2}
                    onPress={onRemove}
                >
                    <Icon name="trash-2" size={24} color="#808080" />
                </TouchableOpacity>
            </View>
        </View>
    )
}