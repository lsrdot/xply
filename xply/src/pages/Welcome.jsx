import React from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialIcons} from '@expo/vector-icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BadgeIcon from '../assets/icons/BadgeIcon';
import TrophyIcon from '../assets/icons/TrophyIcon';
import ManageAccountsIcon from '../assets/icons/ManageAccountsIcon';
import {useNavigation} from '@react-navigation/native';
import CadastrarTarefa from "./CadastrarTarefa";
import DetalhesTarefa from "./DetalhesTarefa";

const Welcome = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate('Login');
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
                        <MaterialIcons name="logout" size={20} color="#FFFFFF"/>
                    </View>
                </View>

                {/* Barra de progresso */}
                <View className="w-[90%] h-5 bg-white rounded-full overflow-hidden mt-2 ">
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
                <View
                    className="mt-2 border border-white rounded-full px-8 py-1 self-center flex items-center justify-center">
                    <Text className="text-white text-xl font-bold tracking-widest">
                        Level 1
                    </Text>
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


            <View
                className="w-[90%] self-center bg-transparent flex-grow rounded-xl mt-4 items-center justify-center">

                {/*Ponto de início dos testes*/}
                <TouchableOpacity
                  onPress={handleGetStarted}
                  className="bg-[#5D3FD3] py-4 px-8 rounded-xl"
                >
                  <Text className="text-white text-lg font-bold">Começar</Text>
                </TouchableOpacity>



            </View>


        </View>
    );
};

export default Welcome;
