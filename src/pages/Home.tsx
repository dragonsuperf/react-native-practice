import { RootStackParamList } from '@/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, View } from 'react-native';

function Home({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Landing')} title="랜딩으로" />
    </View>
  );
}

export default Home;
