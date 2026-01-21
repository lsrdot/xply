export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password.length >= 8 
    && /[A-Z]/.test(password)
    && /[0-9]/.test(password)
    && /[!@#$%^&*]/.test(password);
};

export const generateHash = (password) => {
  return password.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0).toString();
};