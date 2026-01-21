/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Inter_400Regular'],
        italic: ['Inter_400Regular_Italic'],
        semiBold: ['Inter_600SemiBold'],
        bold: ['Inter_700Bold'],
        extraBold: ['Inter_800ExtraBold'],
      },
      colors: {
        primary: {
          indigo: {
            900: '#00041D', // azul escuro degrade header
            700: '#32007C', // botão geral, azul degrade header
          },
          cyan: {
            500: '#0EE6E2', // azul degrade XP
          },
          magenta: {
            500: '#FB00FF', // rosa degrade XP, linha página de acesso
          },
        },
        secondary: {
          teal: {
            500: '#18A3C2', // insignia
            100: '#DBFBFA', // azul degrade fundo
          },
          sky: {
            500: '#00BBFF', // troféu platina
            100: '#C4EBFA', // troféu platina fundo
          },
          blue: {
            500: '#2440E5', // ícone trabalho
            100: '#EAEBFF', // ícone trabalho fundo
          },
          lavender: {
            500: '#A91FE9', // ícone lazer
            100: '#DFAFFF', // ícone lazer fundo
          },
          green: {
            500: '#42A048', // ícone estudo, botão confirmar, texto concluir
            100: '#E9F5E9', // ícone estudo fundo
          },
          gold: {
            500: '#C28D18', // troféu
            100: '#F3EBD8', // troféu fundo
          },
          orange: {
            500: '#FB8A00', // ícone exercício
            100: '#FFF2E1', // ícone exercício fundo
          },
          pink: {
            100: '#FED9FF', // rosa degrade fundo
          },
          red: {
            500: '#D63537', // botão excluir
          },
        },
        neutral: {
          light: {
            400: '#C5C6CC', // linhas, botões
            300: '#D4D6DD', // troféus e insígnias ausentes
            200: '#E8E9F1',
            100: '#F8F9FE',
            50: '#FFFFFF', // branco
          },
          dark: {
            900: '#1F2024',
            800: '#2F3036',
            700: '#494A50', // texto, ícones
            600: '#71727A',
            500: '#8F9098', // texto, ícone "exibir senha"
          },
        },
        support: {
          success: {
            700: '#298267',
            500: '#3AC0A0',
            100: '#E7F4E8',
          },
          warning: {
            700: '#E86339',
            500: '#FFB37C',
            100: '#FFF4E4',
          },
          error: {
            700: '#ED3241',
            500: '#FF616D',
            100: '#FFE2E5',
          },
        },
      },
    },
  },
  plugins: [],
}