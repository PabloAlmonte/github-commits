import Image from "next/image"
import GithubService from "./api/services/github"

function getCommits() {
  const service = new GithubService()
  return service.getCommits('https://github.com/PabloAlmonte/BoxCodes')
}

export default async function Home() {
  const commits = await getCommits()

  return (
    <main className="container mx-auto">
      <Image className="rounded-full mx-auto my-5" src='/assets/images/logo.png' alt='Github commits logo' width={200} height={200} />
      {
        commits.map((commit) => (
          <div className="mb-3 border-b pb-3" key={commit.sha}>
            <h1 className="font-bold">{commit.commit.message}</h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image className="rounded-full" src={commit.author?.avatar_url} alt="Author Image" width={30} height={30} />
                <h6 className="text-base ml-1">{commit.commit.author.name}</h6>
              </div>
              <small>{commit.commit.author.date}</small>
            </div>
          </div>
        ))
      }
    </main>
  )
}
