import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const commits = await fetch('https://api.github.com/repos/PabloAlmonte/BoxCodes/commits').then(res => res.json())
  return NextResponse.json(commits)
}