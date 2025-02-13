import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import credentials from '../credentials.json'; // Assuming credentials.json is stored in the root

interface UserCredentials {
  username: string;
  password: string;
}

interface SignInFormProps {
  navigation: any; // Will be used to navigate to WelcomeScreen
}

const SignInForm: React.FC<SignInFormProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const validateInput = () => {
    // Basic validation for username and password
    const usernameRegex = /.{5,}/; // Username must be at least 5 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    // Check if username and password meet the regex criteria
    if (!usernameRegex.test(username)) {
      Alert.alert('Invalid Username', 'Username must be at least 5 characters.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert('Invalid Password', 'Password must be at least 8 characters long, with at least one uppercase letter, one number, and one special character.');
      return;
    }

    // Check if credentials match
    const user = (credentials.users as UserCredentials[]).find(u => u.username === username && u.password === password);

    if (!user) {
      Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
    } else {
      // Navigate to WelcomeScreen if credentials are correct
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
