import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Company {
  'name' : string,
  'description' : string,
  'sector' : string,
  'logoUrl' : string,
}
export interface Employee {
  'bio' : string,
  'title' : string,
  'name' : string,
  'photoUrl' : string,
}
export interface _SERVICE {
  'getCompanies' : ActorMethod<[], Array<Company>>,
  'getEmployees' : ActorMethod<[], Array<Employee>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
