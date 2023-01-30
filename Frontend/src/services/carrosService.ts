import { api } from "./api";
import {coRotaAtualizarCarro, coRotaCriarCarro, coRotaDeletarCarro, coRotaObterCarros, coRotaObterMeusCarros} from "../functions/constantes";
import { CarroDTO } from "../Types";

export async function getMycars(){
    try {
        const res = await api.get(coRotaObterMeusCarros);
        return res;
    } catch (error) {
        console.log('Erro ao obter seus carros: ',error)
    }
}

export async function getAllcars(){
    try {
        const res = await api.get(coRotaObterCarros);
        return res;
    } catch (error) {
        console.log('Erro ao obter os carros: ',error)
    }
}

export async function createCar(car: CarroDTO){
    try {
        const res = await api.post(coRotaCriarCarro,car);
        return res;
    } catch (error) {
        console.log('Erro ao salvar carro: ',error)
    }
}

export async function updateCar(car: CarroDTO){
    try {
        const res = await api.post(coRotaAtualizarCarro,car);
        return res;
    } catch (error) {
        console.log('Erro ao editar carro: ',error)
    }
}

export async function deleteCar(id: number){
    try {
        const res = await api.delete(coRotaDeletarCarro+id);
        return res;
    } catch (error) {
        console.log('Erro ao deletar carro: ',error)
    }
}