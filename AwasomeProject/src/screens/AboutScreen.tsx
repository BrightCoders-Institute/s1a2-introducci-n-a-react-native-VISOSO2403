import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{marginTop: top + 20, marginBottom: 20, flex: 1}}>
      <Text>AboutScreen</Text>

      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutScreen;
