import { Repo } from "../interfaces/repos"
import reposModel from "../schemas/repos"

const reposService = {
    create: async (repo: Repo): Promise<Repo> => {
        return reposModel.create(repo)
    },
    get: async () => {
        return reposModel.find({}).lean()
    }
}

export default reposService