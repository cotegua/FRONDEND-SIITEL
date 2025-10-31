import api from "./api";

export async function loginApiBackend(credenciales: any) {
  const respuesta = await api.post("/api/autentificacion", credenciales);
  return respuesta;
}
