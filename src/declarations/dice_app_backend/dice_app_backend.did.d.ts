import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface HttpHeader { 'value' : string, 'name' : string }
export interface HttpResponse {
  'status' : number,
  'body' : Uint8Array | number[],
  'headers' : Array<HttpHeader>,
  'streaming_strategy' : [] | [
    { 'Callback' : { 'token' : any, 'callback' : any } }
  ],
}
export interface _SERVICE {
  'http_request' : ActorMethod<[], HttpResponse>,
  'roll_dice' : ActorMethod<[], { 'value' : number }>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
