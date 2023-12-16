import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {PerfilScreen} from '.';
import {styles} from '../theme/appTheme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20, marginBottom: 20, flex: 1}}>
      <Text>HomeScreen</Text>

      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.navigate('PerfilScreen')}>
          <Text>Go to Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
