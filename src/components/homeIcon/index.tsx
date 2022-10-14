import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeIcon = ({
  focused = false,
  size,
  color,
}: {
  focused?: boolean;
  size: any;
  color: any;
}) => {
  return (
    <Ionicons
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
    />
  );
};

export {HomeIcon};
