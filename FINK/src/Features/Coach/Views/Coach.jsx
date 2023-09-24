import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Coach = () => {
  const [questionInput, setQuestionInput] = useState('');
  const [result, setResult] = useState('');

  async function onSubmit() {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setQuestionInput('');
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error("hola", error);
      Alert.alert(error.message);
    }
  }

  return (
    <View>
      <Text>{result}</Text>
      <TextInput
        onChangeText={text => setQuestionInput(text)}
        value={questionInput}
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
      />
      <TouchableOpacity onPress={onSubmit}>
        <View
          style={{
            backgroundColor: 'blue', // Cambia el color según tus preferencias
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white' }}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Coach;
