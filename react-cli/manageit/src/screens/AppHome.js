import {View, Text, Button} from 'react-native';
import React from 'react';

const AppHome = ({navigation}) => {
  tryAsync = async () => {
    console.log(
      'Sign in is being tried -do some actual call, trying to call fetch',
    );
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
    } catch (error) {
      console.log('Error calling the school api');
      console.error(error);
    }
  };
  handleSSIKStudents = async () => {
    console.log('Sign in done -fetch students');
    try {
      const response = await fetch(
        'https://ssik.in/api/class-students?page=0&size=60&schoolClassId.equals=1&sort=id,asc',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcGFuZGV5LmxvcmRzIiwiYXV0aCI6IlJPTEVfQURNSU4sUk9MRV9VU0VSIiwiZXhwIjoxNjQ2MzAzNTczfQ.3yRp09Fd3-GN3pNVGBeDC756fu20QUZBkiRTHzErlJ3_vAbv5PXEEBlDigcI1ilMlD4J7EomK-VXJWdSBZi7Gw',
          },
        },
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log('Error calling the school api');
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to Movies Home"
        onPress={() => navigation.navigate('MoviesHome')}
      />
      <Button title="Try SSIK" onPress={this.handleSSIK} />
      <Button title="Try SSIK Students" onPress={this.handleSSIKStudents} />
    </View>
  );
};
export default AppHome;
