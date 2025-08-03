import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'get_balance' : ActorMethod<
    [string],
    { 'balance' : number, 'unit' : string, 'address' : string }
  >,
  'get_current_fee_percentiles' : ActorMethod<[], Array<bigint>>,
  'get_p2pkh_address' : ActorMethod<[], { 'address' : string }>,
  'get_utxos' : ActorMethod<
    [string],
    Array<
      {
        'confirmations' : bigint,
        'value' : bigint,
        'txid' : string,
        'vout' : bigint,
      }
    >
  >,
  'send' : ActorMethod<
    [string, bigint],
    {
      'destination' : string,
      'txId' : string,
      'success' : boolean,
      'amount' : bigint,
    }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
