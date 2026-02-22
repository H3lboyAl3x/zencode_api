import * as repositorio from "../repositorios/repositorio.js";

//====servico do candidato====
export const criar_candidato = async (data) => {
    return await repositorio.criar_candidato(data);
};

export const buscar_todos_candidatos = async () => {
    return await repositorio.buscar_todos_candidatos();
};

export const buscar_candidato = async (id) => {
    return await repositorio.buscar_candidato(id);
};

export const atualizar_candidato = async (id, updates) => {
    return await repositorio.atualizar_candidato(id, updates);
};

export const apagar_candidato = async (id) => {
    return await repositorio.apagar_candidato(id);
};

//====servico da credencia====
export const criar_credencia = async (data) => {
    return await repositorio.criar_credencia(data);
};

export const buscar_todas_credencias = async () => {
    return await repositorio.buscar_todas_credencias();
};

export const buscar_credencia = async (id) => {
    return await repositorio.buscar_credencia(id);
};

export const atualizar_credencia = async (id, updates) => {
    return await repositorio.atualizar_credencia(id, updates);
};

export const apagar_credencia = async (id) => {
    return await repositorio.apagar_credencia(id);
};