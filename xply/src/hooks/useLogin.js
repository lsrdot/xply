import { useState } from 'react';
import { Alert } from 'react-native';
import { authenticateUser } from '../services/userService';

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const user = await authenticateUser(email, password);
      
      if (!user) {
        Alert.alert('Error', 'Invalid email or password');
        return false;
      }

      return true;
    } catch (err) {
      setError(err.message);
      Alert.alert('Error', 'Failed to login. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}