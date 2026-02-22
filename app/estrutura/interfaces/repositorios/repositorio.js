import Candidato from "../../modelos/01_candidato.js";
import Credencia from "../../modelos/02_credencia.js";


//====repositorio do candidato====
export const criar_candidato = async (Data) => {
    return await Candidato.create(Data);
}
export const buscar_todos_candidatos = async () => {
    return await Candidato.findAll();
}
export const buscar_candidato = async (id) => {
    return await Candidato.findByPk(id);
}
export const atualizar_candidato = async (id, updates) => {
    const candidato = await Candidato.findByPk(id);
    if (!candidato) {
        return null;
    }
    return await candidato.update(updates);
}
export const apagar_candidato = async (id) => {
    const candidato = await Candidato.findByPk(id);
    if (!candidato) {
        return null;
    }
    await candidato.destroy();
    return true;
}

//====repositorio da credencia====
export const criar_credencia = async (Data) => {
    return await Credencia.create(Data);
}
export const buscar_todas_credencias = async () => {
    return await Credencia.findAll();
}
export const buscar_credencia = async (id) => {
    return await Credencia.findByPk(id);
}
export const atualizar_credencia = async (id, updates) => {
    const credencia = await Credencia.findByPk(id);
    if (!credencia) {
        return null;
    }
    return await credencia.update(updates);
}
export const apagar_credencia = async (id) => {
    const credencia = await Credencia.findByPk(id);
    if (!credencia) {
        return null;
    }
    await credencia.destroy();
    return true;
}