import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled from 'styled-components/native';

const CustomButton = styled.Button<{ color?: string }>`
  color: ${props => props.color ?? props.theme.color.primaryColor};
  padding: 5;
  font-size: 12;
`;

interface ButtonProps {
  title: string;
  color?: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

function Button({ title, color, onPress }: ButtonProps) {
  return <CustomButton title={title} onPress={onPress} color={color} />;
}

export default Button;
