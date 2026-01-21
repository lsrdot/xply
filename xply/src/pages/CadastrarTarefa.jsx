import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, KeyboardAvoidingView,
  Platform, StatusBar, FlatList, StyleSheet
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BadgeIcon from '../assets/icons/BadgeIcon';
import TrophyIcon from '../assets/icons/TrophyIcon';
import ManageAccountsIcon from '../assets/icons/ManageAccountsIcon';

export default function CadastrarTarefa() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const STORAGE_KEY = '@tarefas';

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const dados = await AsyncStorage.getItem(STORAGE_KEY);
        if (dados) setTarefas(JSON.parse(dados));
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    carregarTarefas();
  }, []);

  const salvarTarefasNoStorage = async (listaAtualizada) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtualizada));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  const categorias = ['Estudo', 'Trabalho', 'Exercício', 'Lazer'];
  const dificuldades = ['Fácil', 'Médio', 'Difícil'];

  const salvarTarefa = () => {
    if (!titulo || !categoria || !dificuldade) return;

    const novaTarefa = {
      id: Date.now(),
      titulo,
      categoria,
      dificuldade,
      observacoes
    };

    const atualizadas = [...tarefas, novaTarefa];
    setTarefas(atualizadas);
    salvarTarefasNoStorage(atualizadas);
    limparFormulario();
  };

  const limparFormulario = () => {
    setTitulo('');
    setCategoria('');
    setDificuldade('');
    setObservacoes('');
  };

  const deletarTarefa = (id) => {
    const atualizadas = tarefas.filter(t => t.id !== id);
    setTarefas(atualizadas);
    salvarTarefasNoStorage(atualizadas);
  };

  const editarTarefa = (tarefa) => {
    setTitulo(tarefa.titulo);
    setCategoria(tarefa.categoria);
    setDificuldade(tarefa.dificuldade);
    setObservacoes(tarefa.observacoes);
    deletarTarefa(tarefa.id);
    setMostrarLista(false);
  };

  const navegarParaDetalhes = (tarefa) => {
    navigation.navigate('DetalhesTarefa', { tarefa });
  };

  const ListaTarefas = () => (
      <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
              <View className="bg-white p-4 rounded-xl mb-3 shadow-sm shadow-neutral-dark-900/10">
                <View className="flex-row justify-between items-start">
                  <View className="flex-row items-start flex-1">
                    <View className={`bg-${
                        item.categoria === 'Estudo' ? 'secondary-green-100' :
                            item.categoria === 'Trabalho' ? 'secondary-blue-100' :
                                item.categoria === 'Exercício' ? 'secondary-orange-100' :
                                    'secondary-lavender-100'
                    } p-2 rounded-lg mr-3`}>
                      <MaterialIcons
                          name={
                            item.categoria === 'Estudo' ? 'school' :
                                item.categoria === 'Trabalho' ? 'work' :
                                    item.categoria === 'Exercício' ? 'fitness-center' :
                                        'beach-access'
                          }
                          size={20}
                          color={
                            item.categoria === 'Estudo' ? '#42A048' :
                                item.categoria === 'Trabalho' ? '#2440E5' :
                                    item.categoria === 'Exercício' ? '#FB8A00' :
                                        '#A91FE9'
                          }
                      />
                    </View>

                    <View className="flex-1">
                      <TouchableOpacity onPress={() => navegarParaDetalhes(item)}>
                        <Text className="text-neutral-dark-900 font-semibold text-base">{item.titulo}</Text>
                      </TouchableOpacity>
                      {item.observacoes ? (
                          <Text className="text-neutral-dark-500 text-sm mt-1">{item.observacoes}</Text>
                      ) : null}
                    </View>
                  </View>

                  <View className="items-end ml-2">
                    <Text className={`text-xs px-2 py-1 rounded-full ${
                        item.dificuldade === 'Fácil' ? 'bg-support-success-100 text-support-success-700' :
                            item.dificuldade === 'Médio' ? 'bg-support-warning-100 text-support-warning-700' :
                                'bg-support-error-100 text-support-error-700'
                    }`}>
                      {item.dificuldade}
                    </Text>

                    <View className="flex-row mt-2">
                      <TouchableOpacity onPress={() => editarTarefa(item)} className="mr-2">
                        <MaterialIcons name="edit" size={20} color="#8F9098" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
                        <MaterialIcons name="delete" size={20} color="#D63537" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          )}
          ListEmptyComponent={
            <View className="bg-neutral-light-100 p-6 rounded-xl items-center">
              <MaterialIcons name="assignment" size={40} color="#C5C6CC" />
              <Text className="text-neutral-dark-500 mt-2 text-center">Nenhuma tarefa cadastrada ainda</Text>
            </View>
          }
      />
  );

  return (
      <View className="flex-1 relative">
        <StatusBar barStyle="light-content" backgroundColor="#32007C"/>

        {/* Fundo degrade */}
        <LinearGradient
            colors={['#FED9FF', '#DBFBFA']}
            style={StyleSheet.absoluteFillObject}
        />

        {/* Header degrade escuro */}
        <LinearGradient
            colors={['#32007C', '#00041D']}
            style={{
              height: '28%',
              paddingTop: insets.top + 16,
              alignItems: 'center',
              zIndex: 20,
            }}
        >
          {/* Olá pessoa e botão sair */}
          <View className="w-[90%] self-center">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base font-semibold">Olá, Fulano</Text>
              <MaterialIcons name="logout" size={20} color="#FFFFFF"/>
            </View>
          </View>

          {/* Barra de progresso */}
          <View className="w-[90%] h-5 bg-white rounded-full overflow-hidden mt-2">
            <LinearGradient
                colors={['#FB00FF', '#0EE6E2']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{width: '75%', height: '100%'}}
            />
          </View>

          {/* XP */}
          <View className="w-[90%] self-center">
            <View className="flex-row justify-between mt-1">
              <Text className="text-white text-sm font-medium">XP</Text>
              <Text className="text-white text-sm font-medium">150/200</Text>
            </View>
          </View>

          {/* Level */}
          <View className="mt-2 border border-white rounded-full px-8 py-1 self-center flex items-center justify-center">
            <Text className="text-white text-xl font-bold tracking-widest">Level 1</Text>
          </View>
        </LinearGradient>

        {/* Box branco */}
        <View className="w-[90%] mt-[-42px] self-center bg-white rounded-xl p-4 z-30 shadow-md shadow-black/15">
          <View className="flex-row items-center justify-between w-full">
            <View className="flex-1 items-center">
              <TrophyIcon size={40}/>
              <Text className="text-[#494A50] text-base mt-1">5</Text>
            </View>
            <View className="w-[1px] h-10 bg-gray-300 mx-4"/>
            <View className="flex-1 items-center">
              <BadgeIcon size={40}/>
              <Text className="text-[#494A50] text-base mt-1">5</Text>
            </View>
            <View className="w-[1px] h-10 bg-gray-300 mx-4"/>
            <View className="flex-1 items-center">
              <ManageAccountsIcon size={40}/>
              <Text className="text-[#494A50] text-base mt-1">Perfil</Text>
            </View>
          </View>
        </View>

        {/* Área de cadastro/listagem de tarefas */}
        <View className="w-[90%] self-center flex-grow rounded-xl mt-4">
          {mostrarLista ? (
              <View className="bg-white p-4 rounded-xl shadow-md shadow-black/15">
                <ListaTarefas />
                <TouchableOpacity
                    className="bg-indigo-700 p-3 rounded-full mt-4"
                    onPress={() => setMostrarLista(false)}
                >
                  <Text className="text-white text-center text-lg font-bold">Nova Tarefa</Text>
                </TouchableOpacity>
              </View>
          ) : (
              <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{ flex: 1 }}
              >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View className="bg-white p-4 rounded-xl shadow-md shadow-black/15">
                    <Text className="text-xl font-bold text-gray-700 mb-4">
                      {tarefas.length > 0 ? 'Nova tarefa' : 'Cadastre sua primeira tarefa'}
                    </Text>

                    <Text className="text-sm font-semibold text-gray-700 mb-2">Título da tarefa</Text>
                    <TextInput
                        className="border border-gray-400 rounded-lg p-3 mb-4"
                        placeholder="Tarefa"
                        placeholderTextColor="#A1A1A1"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <Text className="text-sm font-semibold text-gray-700 mb-2">Categoria</Text>
                    <View className="flex-row flex-wrap mb-4">
                      {categorias.map((item) => (
                          <TouchableOpacity
                              key={item}
                              onPress={() => setCategoria(item)}
                              className={`bg-gray-200 p-3 rounded-lg mx-2 mb-2 ${categoria === item ? 'bg-white border border-gray-700' : ''}`}
                          >
                            <Text className={`text-center text-sm ${categoria === item ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                      ))}
                    </View>

                    <Text className="text-sm font-semibold text-gray-700 mb-2">Dificuldade</Text>
                    <View className="flex-row flex-wrap mb-4">
                      {dificuldades.map((item) => (
                          <TouchableOpacity
                              key={item}
                              onPress={() => setDificuldade(item)}
                              className={`bg-gray-200 p-3 rounded-lg mx-2 mb-2 ${dificuldade === item ? 'bg-white border border-gray-700' : ''}`}
                          >
                            <Text className={`text-center text-sm ${dificuldade === item ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                      ))}
                    </View>

                    <Text className="text-sm font-semibold text-gray-700 mb-2">Observações</Text>
                    <TextInput
                        className="border border-gray-400 rounded-lg p-3 mb-4 h-20 text-top"
                        placeholder="Observações gerais"
                        placeholderTextColor="#A1A1A1"
                        multiline
                        numberOfLines={3}
                        textAlignVertical="top"
                        value={observacoes}
                        onChangeText={setObservacoes}
                    />

                    <TouchableOpacity
                        className="bg-indigo-700 p-3 rounded-full mt-4"
                        onPress={salvarTarefa}
                    >
                      <Text className="text-white text-center text-lg font-bold">Salvar</Text>
                    </TouchableOpacity>

                    {tarefas.length > 0 && (
                        <TouchableOpacity
                            className="border border-indigo-700 p-3 rounded-full mt-3"
                            onPress={() => setMostrarLista(true)}
                        >
                          <Text className="text-indigo-700 text-center text-lg font-bold">Minhas Tarefas</Text>
                        </TouchableOpacity>
                    )}
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
          )}
        </View>
      </View>
  );
}