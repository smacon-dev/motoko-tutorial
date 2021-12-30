export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'location' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
