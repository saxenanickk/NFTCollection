import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FavoriteIcon = ({
  focused = false,
  size,
  color,
}: {
  focused?: boolean;
  size: any;
  color: any;
}) => {
  return (
    <MaterialIcons
      name={focused ? 'favorite' : 'favorite-outline'}
      size={size}
      color={color}
    />
  );
};

export {FavoriteIcon};
