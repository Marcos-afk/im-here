import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { participants } from './mock';
import { styles } from './styles';

export const Home = () => {
  const handleParticipantAdd = () => {
    if (participants.includes('Marcos André')) {
      return Alert.alert('Participante já existente', 'Já existe um participante na lista com esse nome');
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remoção de participante', `Deseja remover o participante ${name} da lista do evento ?`, [
      {
        text: 'Sim',
        onPress: () =>
          Alert.alert('Participante removido da lista!', `O participante ${name} foi removido da lista com sucesso!`),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
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
        renderItem={({ item }) => <Participant name={item} onRemove={() => handleParticipantRemove(item)} />}
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
