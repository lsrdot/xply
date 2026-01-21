import { registerRootComponent } from 'expo';
import './global.css'; // Importando os estilos globais do Tailwind
import App from './App';
import './global.css';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the pages in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);