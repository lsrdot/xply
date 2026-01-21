import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BadgeIcon from '../assets/icons/BadgeIcon';
import TrophyIcon from '../assets/icons/TrophyIcon';
import ManageAccountsIcon from '../assets/icons/ManageAccountsIcon';

const DetalhesTarefa = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();
    const { tarefa } = route.params || {};

    const [modoPomodoroAtivo, setModoPomodoroAtivo] = useState(true);
    const [emExecucao, setEmExecucao] = useState(false);
    const [emPausa, setEmPausa] = useState(false);
    const [tempoRestante, setTempoRestante] = useState(25 * 60);
    const [temporizadorId, setTemporizadorId] = useState(null);
    const [observacoes, setObservacoes] = useState(tarefa?.observacoes || '');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });

        if (modoPomodoroAtivo && emExecucao) {
            const id = setInterval(() => {
                setTempoRestante((anterior) => {
                    if (anterior === 0) {
                        clearInterval(id);
                        setEmExecucao(false);
                        setEmPausa(true);
                        setTempoRestante(5 * 60);
                        return 0;
                    }
                    return anterior - 1;
                });
            }, 1000);
            setTemporizadorId(id);
        } else {
            if (temporizadorId) clearInterval(temporizadorId);
        }

        return () => {
            if (temporizadorId) clearInterval(temporizadorId);
        };
    }, [emExecucao, modoPomodoroAtivo]);

    const alternarTemporizador = () => {
        if (!modoPomodoroAtivo) return;
        if (tempoRestante === 0) {
            setTempoRestante(emPausa ? 5 * 60 : 25 * 60);
        }
        setEmExecucao(!emExecucao);
    };

    const pausarTemporizador = () => {
        if (!modoPomodoroAtivo) return;
        setEmExecucao(false);
    };

    const formatarTempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const seg = segundos % 60;
        return `${minutos.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    };

    const handleConcluir = () => {
        navigation.goBack();
    };

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
                        <Text className="text-white text-base font-semibold">
                            Olá, Fulano
                        </Text>
                        <MaterialIcons
                            name="arrow-back"
                            size={24}
                            color="#FFFFFF"
                            onPress={() => navigation.goBack()}
                        />
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

            {/* Área do Pomodoro e detalhes da tarefa */}
            <View className="w-[90%] self-center flex-grow rounded-xl mt-4">
                <View className="bg-white p-6 rounded-xl shadow-md shadow-black/15">
                    {/* Detalhes da tarefa */}
                    <Text className="text-xl font-bold text-gray-700 mb-2">
                        {tarefa?.titulo || 'Detalhes da tarefa'}
                    </Text>

                    <Text className="text-sm text-gray-600 mb-1">Categoria: {tarefa?.categoria}</Text>
                    <Text className="text-sm text-gray-600 mb-4">Dificuldade: {tarefa?.dificuldade}</Text>

                    <Text className="text-sm text-gray-600 mb-1">Observações</Text>
                    <TextInput
                        className="border border-gray-300 rounded-md p-2 mb-4"
                        placeholder="Observações Gerais."
                        value={observacoes}
                        onChangeText={setObservacoes}
                        multiline
                    />

                    <TouchableOpacity
                        className="bg-indigo-900 py-3 rounded-md mb-6"
                        onPress={() => {
                            // Lógica para salvar observações
                        }}
                    >
                        <Text className="text-white text-center font-bold">Salvar Observações</Text>
                    </TouchableOpacity>

                    {/* Timer Pomodoro */}
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-sm font-medium">Modo pomodoro</Text>
                        <Switch
                            value={modoPomodoroAtivo}
                            onValueChange={setModoPomodoroAtivo}
                            trackColor={{ false: '#ccc', true: '#4f46e5' }}
                            thumbColor={modoPomodoroAtivo ? '#312e81' : '#888'}
                        />
                    </View>

                    <Text className="text-xs text-gray-500 mb-4">
                        Use ciclos de foco de 25 minutos com pequenas pausas para manter a produtividade.
                    </Text>

                    <View className="flex-row justify-center items-center mb-2">
                        <TouchableOpacity
                            onPress={alternarTemporizador}
                            disabled={!modoPomodoroAtivo}
                        >
                            <FontAwesome
                                name="play-circle"
                                size={40}
                                color={modoPomodoroAtivo ? '#32007C' : '#A0A0A0'}
                            />
                        </TouchableOpacity>

                        <Text
                            className={`text-lg font-semibold mx-2 ${
                                modoPomodoroAtivo ? 'text-black' : 'text-gray-400'
                            }`}
                        >
                            {formatarTempo(tempoRestante)}
                        </Text>

                        <TouchableOpacity
                            onPress={pausarTemporizador}
                            disabled={!modoPomodoroAtivo}
                        >
                            <FontAwesome
                                name="pause-circle"
                                size={40}
                                color={modoPomodoroAtivo ? '#32007C' : '#A0A0A0'}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text
                        className={`text-center text-xs mb-6 ${
                            modoPomodoroAtivo ? 'text-gray-500' : 'text-gray-300'
                        }`}
                    >
                        {emPausa ? 'Hora da pausa!' : 'Ciclo em andamento'}
                    </Text>

                    <TouchableOpacity
                        className="bg-green-600 py-3 rounded-md"
                        onPress={handleConcluir}
                    >
                        <Text className="text-white text-center font-bold">Concluir Tarefa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DetalhesTarefa;