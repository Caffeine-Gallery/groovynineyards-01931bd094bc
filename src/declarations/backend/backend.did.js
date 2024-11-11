export const idlFactory = ({ IDL }) => {
  const Company = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'sector' : IDL.Text,
    'logoUrl' : IDL.Text,
  });
  const Employee = IDL.Record({
    'bio' : IDL.Text,
    'title' : IDL.Text,
    'name' : IDL.Text,
    'photoUrl' : IDL.Text,
  });
  return IDL.Service({
    'getCompanies' : IDL.Func([], [IDL.Vec(Company)], ['query']),
    'getEmployees' : IDL.Func([], [IDL.Vec(Employee)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
