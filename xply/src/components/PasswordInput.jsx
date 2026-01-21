import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';

const PasswordInput = ({ label, value, onChangeText, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`mb-4 ${className}`}>
      <Text className="text-sm font-medium mb-1 text-[#5D3FD3]">{label}</Text>
      <View className="flex-row items-center border-2 border-gray-200 rounded-xl pr-2 bg-gray-50">
        <TextInput
          className="flex-1 h-12 px-4 text-text bg-gray-50"
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="p-2"
        >
          {showPassword ? (
            <EyeSlashIcon size={20} color="#5D3FD3" />
          ) : (
            <EyeIcon size={20} color="#5D3FD3" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;