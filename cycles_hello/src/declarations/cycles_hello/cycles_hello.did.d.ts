import type { Principal } from '@dfinity/principal';
export interface HelloCycles {
  'greet' : (arg_0: string) => Promise<string>,
  'owner' : () => Promise<Principal>,
  'wallet_balance' : () => Promise<bigint>,
  'wallet_receive' : () => Promise<{ 'accepted' : bigint }>,
}
export interface _SERVICE extends HelloCycles {}
