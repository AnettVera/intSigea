import "../../assets/styles.css";
import { useState } from "react";
import { Label, TextInput } from 'flowbite-react';
import "flowbite/dist/flowbite.css";
import 'flowbite';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animacion">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </div>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md justify-center mb-8">
        <form onSubmit={handleSubmit} className="mb-8 flex-auto justify-between">
          <h1 className="text-blue-800 text-3xl font-semibold mb-6">Iniciar Sesión</h1>

          <div className="mb-4">
            <Label htmlFor="username" value="Nombre de usuario" style={{ color: "#6B82B8" }}>Nombre de usuario</Label>
            <TextInput
              id="username"
              type="text"
              sizing="md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inputbox mb-4">
            <Label htmlFor="password" value="Contraseña" style={{ color: "#6B82B8" }}>Contraseña</Label>
            <TextInput
              id="password"
              type="password"
              sizing="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Iniciar</button>
        </form>
      </div>
    </div>
  );
}
