import { api } from "./api";
import {coRotaAtualizarCarro, coRotaCriarCarro, coRotaDeletarCarro, coRotaObterCarros, coRotaObterMeusCarros} from "../functions/constantes";
import { CarroDTO } from "../Types";

export async function getMycars(){
    const res = await api.get(coRotaObterMeusCarros);
    return res;
}

export async function getAllcars(nome='',marca=''){
    let url = coRotaObterCarros

    if(nome != '' && marca != ''){
        url = url+`?marca=${marca}&nome=${nome}`
    }else{
        if(marca != ''){
            url = url+`?marca=${marca}`
        }else if(nome != ''){
            url = url+`?nome=${nome}`
        }
    }
    const res = await api.get(url);
    return res;

}

export async function createCar(car: CarroDTO){
    const res = await api.post(coRotaCriarCarro,car);
    return res;
}

export async function updateCar(car: CarroDTO){
    const res = await api.post(coRotaAtualizarCarro,car);
    return res;
}

export async function deleteCar(id: number){
    const res = await api.delete(coRotaDeletarCarro+id);
    return res;
}