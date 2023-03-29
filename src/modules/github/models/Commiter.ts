export class Committer {
  name: string
  email: string
  avatar?: string

  constructor(json: any){
    const { name, email } = json.commit.committer
    
    this.email = email
    this.name = name
    this.avatar = json.committer?.avatar_url
  }
}