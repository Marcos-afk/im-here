import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { participants } from './mock';
import { styles } from './styles';

export const Home = () => {
  const handleParticipantAdd = () => {
    console.log('Participante adicionado');
  };

  const handleParticipantRemove = () => {
    console.log('Participante removido');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6B6B6B" />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Participant name={item} onRemove={handleParticipantRemove} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
};
