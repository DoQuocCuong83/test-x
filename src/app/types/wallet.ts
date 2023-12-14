export interface AccountWallet {
  address: string
  publicKey: string
}

export interface Wallet {
  connect: () => Promise<unknown>
  account: () => Promise<AccountWallet | undefined>
}
