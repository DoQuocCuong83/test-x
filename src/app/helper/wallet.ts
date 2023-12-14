import { Wallet } from '../types/wallet'

export const getAptosWallet = () => {
  if ('aptos' in window) {
    return window.aptos as Wallet
  } else {
    alert(
      "Your device don't install petra wallet extension. Please install before.",
    )
    window.open(
      'https://chromewebstore.google.com/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci',
      `_blank`,
    )
  }
}

export const connectWallet = async (wallet: Wallet) => {
  try {
    await wallet.connect()
  } catch {
    alert('Please open petra wallet extension and login before.')
  }
}

export const getAccountWallet = async (wallet: Wallet) => {
  const account = await wallet.account()
  return account
}

export const ellipsisAddressWallet = (addressWallet: string) => {
  const length = addressWallet.length
  return (
    addressWallet.slice(0, 5) + '...' + addressWallet.slice(length - 5, length)
  )
}
