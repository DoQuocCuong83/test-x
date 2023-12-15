export const isIpJapan = async (ip: string) => {
  if (isInvalidIp(ip)) {
    return false
  }

  const listBlockIpJapan = await getListBlockIpJapan()

  return isIpInBlockIp(ip, listBlockIpJapan)
}

const isInvalidIp = (ip: string) => {
  return ip.split('.').length !== 4
}

const getListBlockIpJapan = async () => {
  return await (await fetch('https://test-x-five.vercel.app')).json()
}

const isIpInBlockIp = (ip: string, listBlockIpJapan: string[][]) => {
  return listBlockIpJapan.some(([startIp, endIp]) => {
    const arrIp = ip.split('.')
    const arrStartIp = startIp.split('.')
    const arrEndIp = endIp.split('.')
    arrIp.forEach((_, index) =>
      recursiveNodeIp(index, arrIp, arrStartIp, arrEndIp),
    )
  })
}

const recursiveNodeIp: (
  index: number,
  arrIp: string[],
  arrStartIp: string[],
  arrEndIp: string[],
) => boolean = (index, arrIp, arrStartIp, arrEndIp) => {
  if (index > 3) {
    return false
  }
  const nodeIp = arrIp[index]
  const nodeStartIp = arrStartIp[index]
  const nodeEndIp = arrEndIp[index]
  if (nodeIp >= nodeStartIp && nodeIp < nodeEndIp) {
    return true
  } else if (nodeIp === nodeStartIp && nodeIp === nodeEndIp) {
    return recursiveNodeIp(index + 1, arrIp, arrStartIp, arrEndIp)
  } else {
    return false
  }
}
