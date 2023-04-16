import { axiosConfig } from "../configuration/axiosConfig";

//Listar
const getInventarios = (estado) => {
  return axiosConfig.get("inventarios?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Crear
const createInventario = (data = {}) => {
  return axiosConfig.post("inventarios", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Editar
const editarInventario = (tipoId, data) => {
  return axiosConfig.put(`inventarios/${tipoId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Borrar
const borrarInventario = (tipoId) => {
  return axiosConfig.delete(
    `inventarios/${tipoId}`,
    {},
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export { getInventarios, createInventario, editarInventario, borrarInventario };
