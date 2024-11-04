export const idlFactory = ({ IDL }) => {
  const HttpHeader = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const HttpResponse = IDL.Record({
    'status' : IDL.Nat16,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HttpHeader),
    'streaming_strategy' : IDL.Opt(
      IDL.Variant({
        'Callback' : IDL.Record({
          'token' : IDL.Reserved,
          'callback' : IDL.Reserved,
        }),
      })
    ),
  });
  return IDL.Service({
    'http_request' : IDL.Func([], [HttpResponse], ['query']),
    'roll_dice' : IDL.Func([], [IDL.Record({ 'value' : IDL.Nat8 })], []),
  });
};
export const init = ({ IDL }) => { return []; };
