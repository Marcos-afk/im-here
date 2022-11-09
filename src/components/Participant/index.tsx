import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome do participante</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
