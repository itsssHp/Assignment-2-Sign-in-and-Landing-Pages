import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import credentials from '../credentials.json';

const SignInForm = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    const usernameRegex = /.{5,}/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (!usernameRegex.test(username)) {
      Alert.alert('Invalid Username', 'Username must be at least 5 characters.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert('Invalid Password', 'Password must have at least 8 characters, one uppercase letter, one number, and one special character.');
      return;
    }

    const user = credentials.users.find(u => u.username === username && u.password === password);

    if (!user) {
      Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
    } else {
      navigation.navigate('Welcome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={validateInput} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default SignInForm;
