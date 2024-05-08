import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
    //criar disciplina
    async create(req:Request, res: Response) {
        const { name } = req.body;

        if(!name) {
            return res.status(400).json({ messagem: 'O nome é Obrigatório'})
        }

        try {
            const newSubject = subjectRepository.create({name})

            await subjectRepository.save(newSubject);

            console.log(newSubject)

            return res.status(201).json(newSubject)
        } catch (err) {
            return res.status(500).json({ messagem: 'Internal Server Error'})
        }
    }
}