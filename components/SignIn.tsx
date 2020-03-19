import React from 'react';
import { View, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import { NavProps } from '../App';
import Image from 'react-native-scalable-image';
import Button from './Button';

export default function SignIn(props: NavProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <Image
        width={Dimensions.get('window').width}
        resizeMode="cover"
        source={require('../img/treep.png')}
      />
      <View style={{ padding: 10 }}>
        <Input placeholder="Username" textContentType="emailAddress" />
        <Input placeholder="Password" textContentType="newPassword" />
        <Button title="SignIn" color="#d95252" onPress={() => props.navigation.navigate('Store')} />
      </View>
    </View>
  );
}