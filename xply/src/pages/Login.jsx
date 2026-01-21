import React from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';
import { validateEmail, validatePassword } from '../utils/validation';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const navigation = useNavigation();
  const { handleLogin } = useLogin();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const onSubmit = async () => {
    const emailValid = validateEmail(email);
    const passwordValid = password.length > 0;

    if (!emailValid || !passwordValid) {
      Alert.alert('Erro', 'Por favor, verifique seus dados');
      return;
    }

    const success = await handleLogin(email, password);
    
    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'CadastrarTarefa' }],
      });
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Imagem de login */}
      <View className="h-1/2 bg-[#5D3FD3] justify-center items-center">
        <Image
          source={require('../assets/image-login.png')}
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
        />
      </View>
      
      {/* Formulário de login */}
      <View className="px-8 pt-10 pb-8">
        <Text className="text-3xl font-bold text-center mb-8 text-[#5D3FD3]">Login</Text>
        
        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email"
          className="mb-5"
        />
        
        <PasswordInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          className="mb-8"
        />
        
        <TouchableOpacity
          onPress={onSubmit}
          disabled={!validateEmail(email) || !password}
          className={`py-4 rounded-xl items-center justify-center shadow-sm mb-4 ${
            validateEmail(email) && password ? 'bg-[#5D3FD3]' : 'bg-gray-400'
          }`}
        >
          <Text className="text-white font-bold text-lg">Entrar</Text>
        </TouchableOpacity>

        {/* Botão de cadastro */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          className="py-4 rounded-xl items-center justify-center border-2 border-[#5D3FD3]"
        >
          <Text className="text-[#5D3FD3] font-bold text-lg">Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;