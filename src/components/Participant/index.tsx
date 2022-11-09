import { Text, TouchableOpacity, View } from 'react-native';
import { ParticipantComponentProps } from './ParticipantComponentProps';
import { styles } from './style';

export const Participant = ({ name, onRemove }: ParticipantComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
