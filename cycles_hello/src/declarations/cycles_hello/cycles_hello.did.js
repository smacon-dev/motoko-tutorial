export const idlFactory = ({ IDL }) => {
  const HelloCycles = IDL.Service({
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'owner' : IDL.Func([], [IDL.Principal], []),
    'wallet_balance' : IDL.Func([], [IDL.Nat], []),
    'wallet_receive' : IDL.Func(
        [],
        [IDL.Record({ 'accepted' : IDL.Nat64 })],
        [],
      ),
  });
  return HelloCycles;
};
export const init = ({ IDL }) => { return [IDL.Nat]; };
