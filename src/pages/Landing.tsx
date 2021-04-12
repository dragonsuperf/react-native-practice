import React, { useState } from 'react';
import {
  KakaoOAuthToken,
  KakaoProfile,
  login,
  logout,
  unlink,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import { RootStackParamList } from '@/types/navigation';
import { Button, View, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StackNavigationProp } from '@react-navigation/stack';

function Landing({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Landing'>;
}) {
  const [result, setResult] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <View style={backgroundStyle}>
      <Text>Result</Text>
      <Text>{result}</Text>
      <Button onPress={() => signInWithKakao()} title="로그인" />
      <Button onPress={() => getProfile()} title="프로필 가져오기" />
      <Button onPress={() => navigation.navigate('Home')} title="홈으로" />
    </View>
  );
}

export default Landing;
