import React, {useState} from 'react';
import schoolApi from '../../api/school';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  getMovies = async () => {
    console.log('Trying to sign in ..');
    handleSSIK();
  };
  handleSSIK = async () => {
    console.log(
      'Sign in is being tried -do some actual call, trying to call fetch',
    );
    try {
      const response = await fetch('https://ssik.in/api/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'kpandey.lords',
          password: 'kundan123',
          rememberMe: true,
        }),
      });
      const json = await response.json();
      console.log(json);
      console.log(json.id_token);
      const id_token = json.id_token;
      navigation.navigate('MoviesHome', {
        id_token: id_token,
        test: 'This is test param',
      });
    } catch (error) {
      console.log('Error calling the school api');
      console.error(error);
    }
  };
  handleSSIKAxios = async () => {
    console.log(
      'Sign in is being tried -do some actual call, trying to call fetch',
    );
    try {
      alert(email);
      alert(password);
      alert(getData());
      const response = await schoolApi.post('/authenticate', {
        username: 'kpandey.lords',
        password: 'kundan123',
      });

      console.log(response);
      const json = response.data;
      console.log(json.id_token);
      const id_token = json.id_token;
      storeData(id_token);
      alert('data stored');
      console.log('Data stored in async storage ####', id_token);
      navigation.navigate('MoviesHome', {
        id_token: id_token,
        test: 'This is test param',
      });
    } catch (error) {
      console.log('Error calling the school api');
      console.error(error);
    }
  };
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@id_token', value);
    } catch (error) {
      // saving error
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@id_token');
      if (value !== null) {
        alert(value);
      }
    } catch (error) {
      // error reading value
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/login1.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={this.handleSSIKAxios}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: 'aqua',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'aqua',
  },
});
export default SignIn;
