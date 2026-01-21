// Credenciais mockadas fixas
const MOCK_USER = {
  id: 1,
  email: 'usuario@teste.com',
  name: 'Usuário Teste',
  password: process.env.MOCK_PASSWORD || ''
};

/**
 * Função de autenticação com credenciais mockadas fixas
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Object|null} - Dados do usuário ou null se não autenticado
 */
const authenticateUser = async (email, password) => {
  // Simula um pequeno delay para parecer uma chamada de API real
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Verifica se o email e senha correspondem ao usuário mockado
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
   
    
    return {
      id: MOCK_USER.id,
      email: MOCK_USER.email,
      name: MOCK_USER.name
    };
  }
  
  return null;
};

// Função removida conforme solicitado pelo usuário

export {
  authenticateUser
};