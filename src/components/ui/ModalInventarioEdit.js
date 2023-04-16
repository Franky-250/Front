import dayjs from "dayjs";
import React from "react";

export default function ModalInventarioEdit({
  title,
  closeModal,
  handleChangeEdit,
  handleChangeEdit1,
  handleChangeEdit2,
  handleChangeEdit3,
  handleChangeEdit4,
  handleChangeEdit5,
  handleChangeEdit6,
  handleChangeEdit7,
  handleChangeEdit8,
  handleChangeEdit9,
  handleChangeEdit10,
  inventarioRecuperado,
  inventarioEdit,
  loadingSave,
  editInventario,
  usuario,
  marca,
  estado,
  equipo,
}) {
  return (
    <div
      className="modal fade"
      id="exampleModalInventarioEdit"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Editar {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Serial:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name1"
                  name="serial"
                  onChange={handleChangeEdit}
                  value={
                    inventarioEdit.serial === ""
                      ? inventarioRecuperado.serial
                      : inventarioEdit.serial
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Modelo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name2"
                  name="modelo"
                  onChange={handleChangeEdit1}
                  value={
                    inventarioEdit.modelo === ""
                      ? inventarioRecuperado.modelo
                      : inventarioEdit.modelo
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Descripcion:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name3"
                  name="descripcion"
                  onChange={handleChangeEdit2}
                  value={
                    inventarioEdit.descripcion === ""
                      ? inventarioRecuperado.descripcion
                      : inventarioEdit.descripcion
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Foto:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name4"
                  name="foto"
                  onChange={handleChangeEdit3}
                  value={
                    inventarioEdit.foto === ""
                      ? inventarioRecuperado.foto
                      : inventarioEdit.foto
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Color:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name5"
                  name="color"
                  onChange={handleChangeEdit4}
                  value={
                    inventarioEdit.color === ""
                      ? inventarioRecuperado.color
                      : inventarioEdit.color
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Fecha de compra:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="recipient-name6"
                  name="fechaCompra"
                  onChange={handleChangeEdit5}
                  value={
                    inventarioEdit.fechaCompra === ""
                      ? dayjs(inventarioRecuperado.fechaCompra).format(
                          "YYYY-MM-DD"
                        )
                      : dayjs(inventarioEdit.fechaCompra).format("YYYY-MM-DD")
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Precio:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name7"
                  name="precio"
                  onChange={handleChangeEdit6}
                  value={
                    inventarioEdit.precio === ""
                      ? inventarioRecuperado.precio
                      : inventarioEdit.precio
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Usuario:
                </label>
                <select
                  type="text"
                  className="form-select"
                  id="recipient-name8"
                  name="usuario"
                  onChange={handleChangeEdit7}
                  value={
                    inventarioEdit.usuario === ""
                      ? inventarioRecuperado.usuario
                      : inventarioEdit.usuario
                  }
                >
                  <option value="">Selecciona el usuario</option>
                  {usuario != null
                    ? usuario.map((usuario, index) =>
                        usuario != null ? (
                          <option key={index} value={usuario._id}>
                            {usuario.nombre}
                          </option>
                        ) : null
                      )
                    : null}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Marca:
                </label>
                <select
                  type="text"
                  className="form-select"
                  id="recipient-name9"
                  name="marca"
                  onChange={handleChangeEdit8}
                  value={
                    inventarioEdit.marca === ""
                      ? inventarioRecuperado.marca
                      : inventarioEdit.marca
                  }
                >
                  <option value="">Selecciona el usuario</option>
                  {marca != null
                    ? marca.map((marca, index) =>
                        marca != null ? (
                          <option key={index} value={marca._id}>
                            {marca.nombre}
                          </option>
                        ) : null
                      )
                    : null}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Estado:
                </label>
                <select
                  type="text"
                  className="form-select"
                  id="recipient-name10"
                  name="estado"
                  onChange={handleChangeEdit9}
                  value={
                    inventarioEdit.estado === ""
                      ? inventarioRecuperado.estado
                      : inventarioEdit.estado
                  }
                >
                  <option value="">Selecciona el estado</option>
                  {estado != null
                    ? estado.map((estado1, index) =>
                        estado1 != null ? (
                          <option key={index} value={estado1._id}>
                            {estado1.nombre}
                          </option>
                        ) : null
                      )
                    : null}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Tipo de Equipo:
                </label>
                <select
                  type="text"
                  className="form-select"
                  id="recipient-name11"
                  name="tipoEquipo"
                  onChange={handleChangeEdit10}
                  value={
                    inventarioEdit.tipoEquipo === ""
                      ? inventarioRecuperado.tipoEquipo
                      : inventarioEdit.tipoEquipo
                  }
                >
                  <option value="">Selecciona el equipo</option>
                  {equipo != null
                    ? equipo.map((equipo, index) =>
                        equipo != null ? (
                          <option key={index} value={equipo._id}>
                            {equipo.nombre}
                          </option>
                        ) : null
                      )
                    : null}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Cerrar
            </button>
            {loadingSave ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Guardando...
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={editInventario}
                disabled={inventarioEdit.serial.length === 0}
              >
                Enviar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
