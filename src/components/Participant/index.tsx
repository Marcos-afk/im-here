import { Text, TouchableOpacity, View } from 'react-native';
import { ParticipantComponentProps } from './ParticipantComponentProps';
import { styles } from './style';

export const Participant = ({ name }: ParticipantComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
