export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_balance' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'balance' : IDL.Float64,
            'unit' : IDL.Text,
            'address' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'get_current_fee_percentiles' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'get_p2pkh_address' : IDL.Func(
        [],
        [IDL.Record({ 'address' : IDL.Text })],
        ['query'],
      ),
    'get_utxos' : IDL.Func(
        [IDL.Text],
        [
          IDL.Vec(
            IDL.Record({
              'confirmations' : IDL.Nat,
              'value' : IDL.Nat,
              'txid' : IDL.Text,
              'vout' : IDL.Nat,
            })
          ),
        ],
        ['query'],
      ),
    'send' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [
          IDL.Record({
            'destination' : IDL.Text,
            'txId' : IDL.Text,
            'success' : IDL.Bool,
            'amount' : IDL.Nat,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
