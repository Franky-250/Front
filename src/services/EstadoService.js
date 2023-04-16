import { axiosConfig } from "../configuration/axiosConfig";

//Listar
const getEstados = (estado) => {
  return axiosConfig.get("estados?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Crear
const createEstado = (data = {}) => {
  return axiosConfig.post("estados", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Editar
const editarEstado = (tipoId, data) => {
  return axiosConfig.put(`estados/${tipoId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Borrar
const borrarEstado = (tipoId) => {
  return axiosConfig.delete(
    `estados/${tipoId}`,
    {},
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export { getEstados, createEstado, editarEstado, borrarEstado };
