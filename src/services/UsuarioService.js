import { axiosConfig } from "../configuration/axiosConfig";

//Listar
const getUsuarios = (estado) => {
  return axiosConfig.get("usuarios?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Crear
const createUsuario = (data = {}) => {
  return axiosConfig.post("usuarios", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Editar
const editarUsuario = (tipoId, data) => {
  return axiosConfig.put(`usuarios/${tipoId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Borrar
const borrarUsuario = (tipoId) => {
  return axiosConfig.delete(
    `usuarios/${tipoId}`,
    {},
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export { getUsuarios, createUsuario, editarUsuario, borrarUsuario };
