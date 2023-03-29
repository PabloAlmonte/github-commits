import { Committer } from "./Commiter"

export class Commit{
  sha: string
  committer: Committer
  message: string
  date: Date

  constructor(json: any){
    this.sha = json.sha
    this.message = json.commit.message
    this.date = new Date(json.commit.committer.date)
    this.committer = new Committer(json)
  }
}