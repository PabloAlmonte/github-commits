import { Commit } from "./models/Commit"

export default class GithubService {
  private baseURL: String = 'https://api.github.com'

  async getCommits(repoURL: String): Promise<[Commit]> {
    const arr = repoURL.split('/')
    
    const name = arr.pop()
    const owner = arr.pop()

    const result = await fetch(`${this.baseURL}/repos/${owner}/${name}/commits`).then(res => res.json());

    return result.map((json: any) => new Commit(json))
  }
}