import * as servico from "../interfaces/servicos/servico.js";

//====controlador do candidato====
export const criar_candidato = async (req, res) => {
    try {
        const candidato = await servico.criar_candidato(req.body);
        res.status(201).json(candidato);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const buscar_todos_candidatos = async (req, res) => {
    try {
        const candidato = await servico.buscar_todos_candidatos();
        res.status(200).json(candidato);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const buscar_candidato = async (req, res) => {
    try {
        const candidato = await servico.buscar_candidato(req.params.id);
        if (!candidato) {
            return res.status(404).json({ Message: 'candidato não encontrado de id:' + req.params.id });
        }
        res.status(200).json(candidato);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const atualizar_candidato = async (req, res) => {
    try {
        const candidato = await servico.atualizar_candidato(req.params.id, req.body);
        if (!candidato) {
            return res.status(404).json({ Message: 'candidato não encontrado' });
        }
        res.status(200).json(candidato);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const apagar_candidato = async (req, res) => {
    try {
        const candidato = await servico.apagar_candidato(req.params.id);
        if (!candidato) {
            return res.status(404).json({ Message: 'candidato não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

//====controlador da credencia====
export const criar_credencia = async (req, res) => {
    try {
        const credencia = await servico.criar_credencia(req.body);
        res.status(201).json(credencia);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const buscar_todas_credencias = async (req, res) => {
    try {
        const credencia = await servico.buscar_todas_credencias();
        res.status(200).json(credencia);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const buscar_credencia = async (req, res) => {
    try {
        const credencia = await servico.buscar_credencia(req.params.id);
        if (!credencia) {
            return res.status(404).json({ Message: 'credencia não encontrado de id:' + req.params.id });
        }
        res.status(200).json(credencia);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const atualizar_credencia = async (req, res) => {
    try {
        const credencia = await servico.atualizar_credencia(req.params.id, req.body);
        if (!credencia) {
            return res.status(404).json({ Message: 'credencia não encontrado' });
        }
        res.status(200).json(credencia);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const apagar_credencia = async (req, res) => {
    try {
        const credencia = await servico.apagar_credencia(req.params.id);
        if (!credencia) {
            return res.status(404).json({ Message: 'credencia não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};
