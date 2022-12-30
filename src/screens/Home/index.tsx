import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');

  function handleAddParticipant() {
    const participantAlreadyInList = participants.includes(newParticipant);

    if (!newParticipant) return;

    if (participantAlreadyInList) {
      return Alert.alert('Participante existe', 'Participante ja esta na lista');
    }

    setParticipants(prevState => [...prevState, newParticipant]);
    setNewParticipant('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(`Removendo participante ${name}`, 'Deseja continuar?', [
      {
        text: 'Sim',
        onPress: () => {
          const filteredParticipants = participants.filter(participant => participant !== name);
          setParticipants(filteredParticipants);
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Quinta, 29 de dezembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou ainda. Num é pussive
          </Text>
        )}
      />

    </View>
  );
}