/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { CreatePublicRouteResponse } from "./service";

export const protobufPackage = "ServiceGroupService";

export interface CreateRequest {
  serviceGroupId: string;
  name: string;
  envVars: string;
  publicRoutes: CreatePublicRouteResponse[];
}

export interface CreateResponse {
  id: string;
  name: string;
  envVars: string;
  publicRoutes: CreatePublicRouteResponse[];
}

function createBaseCreateRequest(): CreateRequest {
  return { serviceGroupId: "", name: "", envVars: "", publicRoutes: [] };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceGroupId !== "") {
      writer.uint32(10).string(message.serviceGroupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.envVars !== "") {
      writer.uint32(26).string(message.envVars);
    }
    for (const v of message.publicRoutes) {
      CreatePublicRouteResponse.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceGroupId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.envVars = reader.string();
          break;
        case 4:
          message.publicRoutes.push(CreatePublicRouteResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRequest {
    return {
      serviceGroupId: isSet(object.serviceGroupId) ? String(object.serviceGroupId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      envVars: isSet(object.envVars) ? String(object.envVars) : "",
      publicRoutes: Array.isArray(object?.publicRoutes)
        ? object.publicRoutes.map((e: any) => CreatePublicRouteResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    message.serviceGroupId !== undefined && (obj.serviceGroupId = message.serviceGroupId);
    message.name !== undefined && (obj.name = message.name);
    message.envVars !== undefined && (obj.envVars = message.envVars);
    if (message.publicRoutes) {
      obj.publicRoutes = message.publicRoutes.map((e) => e ? CreatePublicRouteResponse.toJSON(e) : undefined);
    } else {
      obj.publicRoutes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CreateRequest>): CreateRequest {
    return CreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateRequest>): CreateRequest {
    const message = createBaseCreateRequest();
    message.serviceGroupId = object.serviceGroupId ?? "";
    message.name = object.name ?? "";
    message.envVars = object.envVars ?? "";
    message.publicRoutes = object.publicRoutes?.map((e) => CreatePublicRouteResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { id: "", name: "", envVars: "", publicRoutes: [] };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.envVars !== "") {
      writer.uint32(26).string(message.envVars);
    }
    for (const v of message.publicRoutes) {
      CreatePublicRouteResponse.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.envVars = reader.string();
          break;
        case 4:
          message.publicRoutes.push(CreatePublicRouteResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      envVars: isSet(object.envVars) ? String(object.envVars) : "",
      publicRoutes: Array.isArray(object?.publicRoutes)
        ? object.publicRoutes.map((e: any) => CreatePublicRouteResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.envVars !== undefined && (obj.envVars = message.envVars);
    if (message.publicRoutes) {
      obj.publicRoutes = message.publicRoutes.map((e) => e ? CreatePublicRouteResponse.toJSON(e) : undefined);
    } else {
      obj.publicRoutes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CreateResponse>): CreateResponse {
    return CreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateResponse>): CreateResponse {
    const message = createBaseCreateResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.envVars = object.envVars ?? "";
    message.publicRoutes = object.publicRoutes?.map((e) => CreatePublicRouteResponse.fromPartial(e)) || [];
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "ServiceGroupService.API",
  methods: {
    create: {
      name: "create",
      requestType: CreateRequest,
      requestStream: false,
      responseType: CreateResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  create(request: CreateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  create(request: DeepPartial<CreateRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
