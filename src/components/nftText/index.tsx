import {Text, Platform, TextProps, ColorValue} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';

interface Props extends TextProps {
  children?: React.ReactNode;
  color?: ColorValue | undefined;
  weight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  size?: number | undefined;
}

const NFTText: React.FC<Props> = ({
  children,
  color = Colors.BLACK,
  weight,
  size,
  ...restProps
}) => {
  return (
    <Text
      style={{
        /** Font family can be changed to desired font family from here. */
        fontFamily: Platform.select({ios: 'Avenir', android: 'Robot'}),
        fontWeight: weight,
        fontSize: size,
        color: color,
      }}
      {...restProps}>
      {children}
    </Text>
  );
};

export {NFTText};
