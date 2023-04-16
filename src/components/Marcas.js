import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  getMarcas,
  createMarca,
  editarMarca,
  borrarMarca,
} from "../services/MarcaService";
import ModalMarca from "./ui/ModalMarca";
import ModalMarcaEdit from "./ui/ModalMarcaEdit";

export default function Marcas() {
  const title = "Marca";
  const [Marcas, setMarcas] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [Marca, setMarca] = useState({
    nombre: "",
  });
  const [loadingSave, setLoadingSave] = useState(false);

  const [id, setId] = useState("");

  const listMarcas = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await getMarcas(query);
      console.log(data);
      setMarcas(data);

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
    listMarcas();
  }, [query]);

  const changeSwitch = () => {
    setQuery(!query);
  };

  const handleChange = (e) => {
    setMarca({
      ...Marca,
      [e.target.name]: e.target.value,
    });
  };

  const saveMarca = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await createMarca(Marca);
      console.log(response);
      setMarca({ nombre: "" });
      listMarcas();
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
    setMarca({ nombre: "" });
    if (id) setId("");
  };

  const selectMarca = (evt) => {
    evt.preventDefault();
    setId(evt.target.id);
    const tEq = Marcas.filter((Marca) => Marca._id === evt.target.id);
    setMarca({ ...tEq[0] });
  };

  const editMarca = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarMarca(id, Marca);
      console.log(response);
      setMarca({ nombre: "" });
      listMarcas();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  const deleteMarca = async (id) => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await borrarMarca(id);
      console.log(response);
      listMarcas();
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
      <ModalMarcaEdit
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        Marca={Marca}
        loadingSave={loadingSave}
        editMarca={editMarca}
      />

      <ModalMarca
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        Marca={Marca}
        loadingSave={loadingSave}
        saveMarca={saveMarca}
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
              {Marcas.map((Marca, index) => {
                return (
                  <tr key={Marca._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{Marca.nombre}</td>
                    <td>{Marca.estado ? "Activo" : "Inactivo"}</td>
                    <td>{dayjs(Marca.fechaCreacion).format("YYYY-MM-DD")}</td>
                    <td>
                      {dayjs(Marca.fechaActualizacion).format("YYYY-MM-DD")}
                    </td>
                    <td>
                      <button
                        onClick={selectMarca}
                        type="button"
                        className="btn btn-outline-success"
                        style={{ marginRight: "10px" }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalMarcaEdit"
                        id={Marca._id}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => deleteMarca(Marca._id)}
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
