export default class GithubService {
  private baseURL: String = 'https://api.github.com'

  getCommits(repoURL: String){
    const arr = repoURL.split('/')
    
    const name = arr.pop()
    const owner = arr.pop()

    return fetch(`${this.baseURL}/repos/${owner}/${name}/commits`).then(res => res.json())
  }
}