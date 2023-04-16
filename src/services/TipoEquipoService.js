import { axiosConfig } from "../configuration/axiosConfig";

//Listar
const getTipoEquipos = (estado) => {
  return axiosConfig.get("tiposequipos?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Crear
const createTipoEquipo = (data = {}) => {
  return axiosConfig.post("tiposequipos", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Editar
const editarTipoEquipo = (tipoId, data) => {
  return axiosConfig.put(`tiposequipos/${tipoId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

//Borrar
const borrarTipoEquipo = (tipoId) => {
  return axiosConfig.delete(
    `tiposequipos/${tipoId}`,
    {},
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export { getTipoEquipos, createTipoEquipo, editarTipoEquipo, borrarTipoEquipo };
