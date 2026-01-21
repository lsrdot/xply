import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail } from '../utils/validation';
import { MaterialIcons } from '@expo/vector-icons';

const CadastroUsuario = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmacaoSenha: ""
  });
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmacao, setShowConfirmacao] = useState(false);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    // Validações
    if (!formData.nome || formData.nome.length < 3) {
      Alert.alert('Erro', 'Nome deve ter pelo menos 3 caracteres');
      return;
    }

    if (!validateEmail(formData.email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    if (formData.senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (formData.senha !== formData.confirmacaoSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      await AsyncStorage.setItem("cadastroUsuario", JSON.stringify(formData));
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      
      setFormData({
        nome: "",
        email: "",
        senha: "",
        confirmacaoSenha: ""
      });
      
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar os dados");
      Alert.alert("Erro", "Não foi possível salvar os dados");
    }
  };

  const isFormValid = (
    formData.nome.length >= 3 &&
    validateEmail(formData.email) &&
    formData.senha.length >= 6 &&
    formData.senha === formData.confirmacaoSenha
  );

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <View style={styles.header}>
        <Image
          source={require('../assets/image-login.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.titulo}>Cadastre-se</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            value={formData.nome}
            onChangeText={(text) => handleChange("nome", text)}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#999"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="exemplo@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputWithIcon}
              value={formData.senha}
              onChangeText={(text) => handleChange("senha", text)}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!showSenha}
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowSenha(!showSenha)}
            >
              <MaterialIcons 
                name={showSenha ? "visibility-off" : "visibility"} 
                size={24} 
                color="#5D3FD3" 
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Confirmação de senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputWithIcon}
              value={formData.confirmacaoSenha}
              onChangeText={(text) => handleChange("confirmacaoSenha", text)}
              placeholder="Confirme sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirmacao}
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowConfirmacao(!showConfirmacao)}
            >
              <MaterialIcons 
                name={showConfirmacao ? "visibility-off" : "visibility"} 
                size={24} 
                color="#5D3FD3" 
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity
          style={[styles.botao, !isFormValid && styles.botaoDisabled]}
          onPress={handleSubmit}
          disabled={!isFormValid}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotaoVoltar}>Voltar para Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    backgroundColor: '#5D3FD3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 200,
    height: 200,
  },
  scrollContent: {
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  inputWithIcon: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  iconButton: {
    padding: 16,
  },
  botao: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#5D3FD3',
    alignItems: 'center',
    marginTop: 16,
  },
  botaoDisabled: {
    backgroundColor: '#aaa',
  },
  textoBotao: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoVoltar: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5D3FD3',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: 'transparent',
  },
  textoBotaoVoltar: {
    fontSize: 16,
    color: '#5D3FD3',
    fontWeight: 'bold',
  },
});

export default CadastroUsuario;