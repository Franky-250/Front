import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  getInventarios,
  createInventario,
  editarInventario,
  borrarInventario,
} from "../services/InventarioService";
import ModalInventario from "./ui/ModalInventario";
import ModalInventarioEdit from "./ui/ModalInventarioEdit";
import { getUsuarios } from "../services/UsuarioService";
import { getMarcas } from "../services/MarcaService";
import { getEstados } from "../services/EstadoService";
import { getTipoEquipos } from "../services/TipoEquipoService";

export default function Inventario() {
  const title = "Inventario";
  const [Inventarios, setInventarios] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [usuario, setUsuarios] = useState();
  const [marca, setMarcas] = useState();
  const [estado, setEstados] = useState();
  const [equipo, setEquipos] = useState();
  const [Inventario, setInventario] = useState({
    serial: "",
    modelo: "",
    descripcion: "",
    foto: "",
    color: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    estado: "",
    tipoEquipo: "",
  });
  const [inventarioEdit, setInventarioEdit] = useState({
    serial: "",
    modelo: "",
    descripcion: "",
    foto: "",
    color: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    estado: "",
    tipoEquipo: "",
  });
  const [inventarioRecuperado, setInventarioRecuperado] = useState({
    serial: "",
    modelo: "",
    descripcion: "",
    foto: "",
    color: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    estado: "",
    tipoEquipo: "",
  });
  const [loadingSave, setLoadingSave] = useState(false);

  const [id, setId] = useState("");

  const listInventarios = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await getInventarios(query);
      console.log(data);
      setInventarios(data);

      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  };
  const estadoenviar = true;
  const listarEquipos1 = async () => {
    const { data } = await getUsuarios(estadoenviar);
    const daticos = data.map((datico) =>
      datico.estado === true ? datico : null
    );
    console.log(daticos);
    setUsuarios(daticos);
  };
  //listar marcas
  const listarEquipos2 = async () => {
    const { data } = await getMarcas(estadoenviar);
    const daticos = data.map((datico) =>
      datico.estado === true ? datico : null
    );
    console.log(daticos);
    setMarcas(daticos);
  };
  //listar estados
  const listarEquipos3 = async () => {
    const { data } = await getEstados(estadoenviar);
    const daticos = data.map((datico) =>
      datico.estado === true ? datico : null
    );
    console.log(daticos);
    setEstados(daticos);
  };
  //listar equipos
  const listarEquipos4 = async () => {
    const { data } = await getTipoEquipos(estadoenviar);
    const daticos = data.map((datico) =>
      datico.estado === true ? datico : null
    );
    console.log(daticos);
    setEquipos(daticos);
  };

  useEffect(() => {
    listInventarios();
    listarEquipos1();
    listarEquipos2();
    listarEquipos3();
    listarEquipos4();
  }, [query]);

  const changeSwitch = () => {
    setQuery(!query);
  };

  const handleChange = (e) => {
    setInventario({
      ...Inventario,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeEdit = (e) => {
    setInventarioEdit({
      serial:
        e.target.value === "" ? inventarioRecuperado.serial : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit1 = (e) => {
    setInventarioEdit({
      modelo:
        e.target.value === "" ? inventarioRecuperado.modelo : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descripcion,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit2 = (e) => {
    setInventarioEdit({
      descripcion:
        e.target.value === ""
          ? inventarioRecuperado.descripcion
          : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      serial:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      equipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.equipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit3 = (e) => {
    setInventarioEdit({
      foto: e.target.value === "" ? inventarioRecuperado.foto : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit4 = (e) => {
    setInventarioEdit({
      color:
        e.target.value === "" ? inventarioRecuperado.color : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit5 = (e) => {
    setInventarioEdit({
      // setInventarioEdit({...inventarioEdit, fechaCompra: dayjs(e.target.value).add(0, 'day')})
      fechaCompra:
        e.target.value === ""
          ? inventarioRecuperado.fechaCompra
          : dayjs(e.target.value).add(0, "day"),
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit6 = (e) => {
    setInventarioEdit({
      precio:
        e.target.value === "" ? inventarioRecuperado.precio : e.target.value,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit7 = (e) => {
    setInventarioEdit({
      usuario:
        e.target.value === "" ? inventarioRecuperado.usuario : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit8 = (e) => {
    setInventarioEdit({
      marca:
        e.target.value === "" ? inventarioRecuperado.marca : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit9 = (e) => {
    setInventarioEdit({
      estado:
        e.target.value === "" ? inventarioRecuperado.estado : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
      tipoEquipo:
        inventarioEdit.tipoEquipo === ""
          ? inventarioRecuperado.tipoEquipo
          : inventarioEdit.tipoEquipo,
    });
  };

  const handleChangeEdit10 = (e) => {
    setInventarioEdit({
      tipoEquipo:
        e.target.value === ""
          ? inventarioRecuperado.tipoEquipo
          : e.target.value,
      precio:
        inventarioEdit.precio === ""
          ? inventarioRecuperado.precio
          : inventarioEdit.precio,
      modelo:
        inventarioEdit.modelo === ""
          ? inventarioRecuperado.modelo
          : inventarioEdit.modelo,
      descripcion:
        inventarioEdit.descripcion === ""
          ? inventarioRecuperado.descripcion
          : inventarioEdit.descrip,
      foto:
        inventarioEdit.foto === ""
          ? inventarioRecuperado.foto
          : inventarioEdit.foto,
      color:
        inventarioEdit.color === ""
          ? inventarioRecuperado.color
          : inventarioEdit.color,
      fechaCompra:
        inventarioEdit.fechaCompra === ""
          ? inventarioRecuperado.fechaCompra
          : inventarioEdit.fechaCompra,

      usuario:
        inventarioEdit.usuario === ""
          ? inventarioRecuperado.usuario
          : inventarioEdit.usuario,
      marca:
        inventarioEdit.marca === ""
          ? inventarioRecuperado.marca
          : inventarioEdit.marca,
      estado:
        inventarioEdit.estado === ""
          ? inventarioRecuperado.estado
          : inventarioEdit.estado,
      serial:
        inventarioEdit.serial === ""
          ? inventarioRecuperado.serial
          : inventarioEdit.serial,
    });
  };

  const saveInventario = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      console.log(Inventario);
      const response = await createInventario(Inventario);
      console.log(response);
      setInventario({
        serial: "",
        modelo: "",
        descripcion: "",
        foto: "",
        color: "",
        fechaCompra: "",
        precio: "",
        usuario: "",
        marca: "",
        estado: "",
        tipoEquipo: "",
      });
      listInventarios();
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
    setInventario({
      serial: "",
      modelo: "",
      descripcion: "",
      foto: "",
      color: "",
      fechaCompra: "",
      precio: "",
      usuario: "",
      marca: "",
      estado: "",
      tipoEquipo: "",
    });
    if (id) setId("");
  };

  const selectInventario = (evt) => {
    evt.preventDefault();
    setId(evt.target.id);
    const tEq = Inventarios.filter(
      (Inventario) => Inventario._id === evt.target.id
    );
    setInventario({ ...tEq[0] });

    setInventarioRecuperado({
      serial: evt.target.getAttribute("data-serial"),
      modelo: evt.target.getAttribute("data-modelo"),
      descripcion: evt.target.getAttribute("data-descrip"),
      foto: evt.target.getAttribute("data-foto"),
      color: evt.target.getAttribute("data-color"),
      fechaCompra: evt.target.getAttribute("data-fechacompra"),
      precio: evt.target.getAttribute("data-precio"),
      usuario: evt.target.getAttribute("data-usuario"),
      marca: evt.target.getAttribute("data-marca"),
      estado: evt.target.getAttribute("data-estado"),
      tipoEquipo: evt.target.getAttribute("data-equipo"),
    });
  };

  const editInventario = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      console.log(inventarioEdit);
      //setInventarioEdit({...inventarioEdit, fechaCompra: dayjs(inventarioEdit.fechaCompra).add(2, 'day')})
      const response = await editarInventario(id, inventarioEdit);
      console.log(response);
      setInventarioEdit({
        serial: "",
        modelo: "",
        descripcion: "",
        foto: "",
        color: "",
        fechaCompra: "",
        precio: "",
        usuario: "",
        marca: "",
        estado: "",
        tipoEquipo: "",
      });
      listInventarios();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  const deleteInventario = async (id) => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await borrarInventario(id);
      console.log(response);
      listInventarios();
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
      <ModalInventarioEdit
        title={title}
        closeModal={closeModal}
        handleChangeEdit={handleChangeEdit}
        handleChangeEdit1={handleChangeEdit1}
        handleChangeEdit2={handleChangeEdit2}
        handleChangeEdit3={handleChangeEdit3}
        handleChangeEdit4={handleChangeEdit4}
        handleChangeEdit5={handleChangeEdit5}
        handleChangeEdit6={handleChangeEdit6}
        handleChangeEdit7={handleChangeEdit7}
        handleChangeEdit8={handleChangeEdit8}
        handleChangeEdit9={handleChangeEdit9}
        handleChangeEdit10={handleChangeEdit10}
        inventarioRecuperado={inventarioRecuperado}
        inventarioEdit={inventarioEdit}
        loadingSave={loadingSave}
        editInventario={editInventario}
        usuario={usuario}
        marca={marca}
        estado={estado}
        equipo={equipo}
      />

      <ModalInventario
        title={title}
        closeModal={closeModal}
        handleChange={handleChange}
        Inventario={Inventario}
        usuario={usuario}
        marca={marca}
        estado={estado}
        equipo={equipo}
        loadingSave={loadingSave}
        saveInventario={saveInventario}
      />

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
                <th scope="col">Serial</th>
                <th scope="col">Modelo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Foto</th>
                <th scope="col">Color</th>
                <th scope="col">Fecha comp.</th>
                <th scope="col">Precio</th>
                <th scope="col">Usuario</th>
                <th scope="col">Marca</th>
                <th scope="col">Estado</th>
                <th scope="col">Tipo Equipo</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {Inventario != null
                ? Inventarios.map((inventario, index) => {
                    return (
                      <tr key={inventario._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{inventario.serial}</td>
                        <td>{inventario.modelo}</td>
                        <td>{inventario.descripcion}</td>
                        <td>
                          <img
                            src={inventario.foto}
                            alt="Foto"
                            width="75"
                            height="75"
                          />
                        </td>
                        <td>{inventario.color}</td>
                        <td>
                          {dayjs(inventario.fechaCompra).format("YYYY-MM-DD")}
                        </td>
                        <td>{inventario.precio}</td>
                        <td>{inventario.usuario.nombre}</td>
                        <td>{inventario.marca.nombre}</td>
                        <td>{inventario.estado.nombre}</td>
                        <td>{inventario.tipoEquipo.nombre}</td>
                        <td>
                          <button
                            onClick={selectInventario}
                            type="button"
                            className="btn btn-outline-success"
                            style={{ marginRight: "10px" }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalInventarioEdit"
                            id={inventario._id}
                            data-serial={inventario.serial}
                            data-modelo={inventario.modelo}
                            data-descrip={inventario.descripcion}
                            data-foto={inventario.foto}
                            data-color={inventario.color}
                            data-fechacompra={inventario.fechaCompra}
                            data-precio={inventario.precio}
                            data-usuario={inventario.usuario._id}
                            data-marca={inventario.marca._id}
                            data-estado={inventario.estado._id}
                            data-equipo={inventario.tipoEquipo._id}
                          >
                            Editar
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => deleteInventario(inventario._id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "No hay datos"}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
