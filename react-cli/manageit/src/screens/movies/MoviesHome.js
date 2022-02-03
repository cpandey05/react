import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoviesHome = ({route, navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {id_token, test} = route.params;

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
      console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  handleSSIKStudents = async () => {
    console.log('Sign in done -fetch students');
    const authToken = 'Bearer ' + id_token;
    alert(authToken);
    try {
      const response = await fetch(
        'https://ssik.in/api/class-students?page=0&size=60&schoolClassId.equals=5&sort=id,asc',
        {
          method: 'GET',
          headers: {
            Authorization: authToken,
          },
        },
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log('Error calling the school api');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@id_token');
      if (value !== null) {
        console.log('Data from async storage ####', value);
        alert(value);
      }
    } catch (error) {
      // error reading value
      console.error(error);
    }
  };
  useEffect(() => {
    alert('Data fetched');
    alert(getData());
    handleSSIKStudents();
  }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.firstName}, {item.fatherName}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default MoviesHome;
