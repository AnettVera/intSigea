import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  // Cambia el nombre a userData para almacenar todo el objeto de respuesta
  const [userData, setUserData] = useState(null);

  // Ajusta para recibir y manejar el objeto completo
  const handleLoginSuccess = (data) => {
    setUserData(data);
  };

  return (
    <AuthContext.Provider value={{ userData, onLoginSuccess: handleLoginSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};
