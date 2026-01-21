import { View, TextInput, Text } from 'react-native';
import React from 'react';

const CustomInput = ({ label, value, onChangeText, placeholder, className }) => {
  return (
    <View className={`mb-4 ${className}`}>
      <Text className="text-sm font-medium mb-1 text-[#5D3FD3]">{label}</Text>
      <TextInput
        className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl text-text bg-gray-50"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default CustomInput;