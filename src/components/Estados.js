import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  getEstados,
  createEstado,
  editarEstado,
  borrarEstado,
} from "../services/EstadoService";
import ModalEstado from "./ui/ModalEstado";
import ModalEstadoEdit from "./ui/ModalEstadoEdit";

export default function Estados() {
  const title = "Estado";
  const [Estados, setEstados] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [Estado, setEstado] = useState({
    nombre: "",
  });
  const [loadingSave, setLoadingSave] = useState(false);

  const [id, setId] = useState("");

  const listEstados = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await getEstados(query);
      console.log(data);
      setEstados(data);

      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    listEstados();
  }, [query]);

  const changeSwitch = () => {
    setQuery(!query);
  };

  const handleChange = (e) => {
    setEstado({
      ...Estado,
      [e.target.name]: e.target.value,
    });
  };

  const saveEstado = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await createEstado(Estado);
      console.log(response);
      setEstado({ nombre: "" });
      listEstados();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  const closeModal = () => {
    setEstado({ nombre: "" });
    if (id) setId("");
  };

  const selectEstado = (evt) => {
    evt.preventDefault();
    setId(evt.target.id);
    const tEq = Estados.filter((Estado) => Estado._id === evt.target.id);
    setEstado({ ...tEq[0] });
  };

  const editEstado = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarEstado(id, Estado);
      console.log(response);
      setEstado({ nombre: "" });
      listEstados();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  const deleteEstado = async (id) => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await borrarEstado(id);
      console.log(response);
      listEstados();
      setTimeout(() => {
        setLoadingSave(false);
      }, 200);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  return (
    <>
      <ModalEstadoEdit
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        Estado={Estado}
        loadingSave={loadingSave}
        editEstado={editEstado}
      />

      <ModalEstado
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        Estado={Estado}
        loadingSave={loadingSave}
        saveEstado={saveEstado}
      />

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={query}
          onChange={changeSwitch}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Activos
        </label>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary my-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Agregar
      </button>

      {error && (
        <div className="alert alert-danger" role="alert">
          Ha ocurrido un error
        </div>
      )}

      <div className="table-responsive">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha creac.</th>
                <th scope="col">Fecha act.</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {Estados.map((Estado, index) => {
                return (
                  <tr key={Estado._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{Estado.nombre}</td>
                    <td>{Estado.estado ? "Activo" : "Inactivo"}</td>
                    <td>{dayjs(Estado.fechaCreacion).format("YYYY-MM-DD")}</td>
                    <td>
                      {dayjs(Estado.fechaActualizacion).format("YYYY-MM-DD")}
                    </td>
                    <td>
                      <button
                        onClick={selectEstado}
                        type="button"
                        className="btn btn-outline-success"
                        style={{ marginRight: "10px" }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalEstadoEdit"
                        id={Estado._id}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => deleteEstado(Estado._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
