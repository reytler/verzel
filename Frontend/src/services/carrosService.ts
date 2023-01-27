import { api } from "./api";
import {coRotaCriarCarro, coRotaObterMeusCarros} from "../functions/constantes";
import { TCarro } from "../Types";

export async function getMycars(){
    try {
        const res = await api.get(coRotaObterMeusCarros);
        return res;
    } catch (error) {
        console.log('Erro ao obter carros: ',error)
    }
}

export async function createCar(car: TCarro){
    try {
        const res = await api.post(coRotaCriarCarro,car);
        return res;
    } catch (error) {
        console.log('Erro ao salvar carro: ',error)
    }
}