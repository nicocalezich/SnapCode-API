import { Request, Response } from "express";
import reposService from "../services/repos";
import { Repo } from "../interfaces/repos"

const reposController = {
    create: async (req: Request, res: Response) => {
        try {
            const repo = req.body as Repo
            const createdRepo = await reposService.create(repo)
            res.send(createdRepo).status(201)
        } catch (error) {
            res.send(error)
        }
    },
    get: async (_req: Request, res: Response) => {
        try {
            const getRepos = await reposService.get()
            res.send(getRepos).status(200)
        } catch (error) {
            res.send(error)
        }
    }
}

export default reposController