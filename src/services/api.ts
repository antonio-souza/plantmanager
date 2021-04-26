import axios from 'axios';

//Simulação de uma API com os dados do arquivo server.json

const api = axios.create({
    baseURL: 'http://192.168.0.21:3333', //Endereco IP da maquina (Ipconfig -> Endereço IPv4)
})

export default api;