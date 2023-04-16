import { axiosConfig } from "../configuration/axiosConfig";

//Listar
const getMarcas = (estado) => {
  return axiosConfig.get("marcas?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Crear
const createMarca = (data = {}) => {
  return axiosConfig.post("marcas", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Editar
const editarMarca = (tipoId, data) => {
  return axiosConfig.put(`marcas/${tipoId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Borrar
const borrarMarca = (tipoId) => {
  return axiosConfig.delete(
    `marcas/${tipoId}`,
    {},
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export { getMarcas, createMarca, editarMarca, borrarMarca };
