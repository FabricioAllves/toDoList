import { View, Text, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/Feather";
import Icon2 from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";

interface Tafs {
    description: string,
    onRemove: () => void,
    contadorTafsConcluidas: () => void,
    data: boolean
}

export function ListTaf({ description, onRemove, contadorTafsConcluidas, data }: Tafs) {

    console.log(data)


    return (
        <View>
            <View style={styles.card}>

                <TouchableOpacity style={styles.cardButton}
                    onPress={contadorTafsConcluidas}
                >


                     {data === true ?
                        (<Icon name="check-circle" size={24} color="#4EA8DE" />)
                        :
                        (
                            (<Icon name="circle" size={24} color="#4EA8DE" />)
                        )} 
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