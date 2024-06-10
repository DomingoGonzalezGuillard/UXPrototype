import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

type IconProps = ComponentProps<typeof Ionicons>;

export function TabBarIcon({ style, ...rest }: IconProps) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
