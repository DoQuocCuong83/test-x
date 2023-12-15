import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<string[][]>,
) {
  const dataFilePath = path.join(process.cwd(), 'public/ip_jp_block.csv')

  const file = fs.readFileSync(dataFilePath).toString()

  const listBlockIpJapan = file
    .split('\n')
    .map((item: string) => {
      const [ipStart, ipEnd] = item.split(',')
      return [ipStart, ipEnd]
    })
    .filter(([ipStart, ipEnd]) => ipStart && ipEnd)

  res.status(200).json(listBlockIpJapan)
}
