import axios from "axios";

// const baseUrl = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog"; <<< não está funcionando

// const baseUrl = "https://undefined.netlify.app/api/catalog";  <<< Caso não funcione o de baixo, utilizar este

const baseUrl = "https://api.jsonbin.io/b/5f06b199a62f9b4b276192e4";

export default async function api() {
  return await axios.get(baseUrl);
}
