import api from "./api";

export async function listarApiUsuario() {
  return await api.get("/api/ListarUsuarios");
}

export async function guardarApiUsuario(datos: any) {
  return await api.get("/api/Adicionar", datos);
}

export async function mostrarApiUsuario(id: any) {
  return await api.get(`/api/BuscarUsuario/${id}`);
}

export async function modificarApiUsuario(id: any, datos: any) {
  return await api.put(`/api/Actualizar/${id}`, datos);
}

export async function eliminarApiUsuario(id: any) {
  return await api.delete(`/api/Eliminar/${id}`);
}
