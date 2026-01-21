import { View, Text } from 'react-native';
import React from 'react';

const Home = ({ route }) => {
  const { userEmail } = route.params;

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-xl text-primary font-bold mb-4">Welcome to XPly</Text>
      <Text className="text-base text-text">Logged in as: {userEmail}</Text>
    </View>
  );
};

export default Home;