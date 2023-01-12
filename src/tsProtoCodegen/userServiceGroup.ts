/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { CreateResponse } from "./serviceGroup";
import { ShowResponse as ShowResponse1 } from "./user";

export const protobufPackage = "UserServiceGroup";

export enum Status {
  creating = "creating",
  destroying = "destroying",
  ready = "ready",
  updating = "updating",
  destroyed = "destroyed",
  error = "error",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "creating":
      return Status.creating;
    case 1:
    case "destroying":
      return Status.destroying;
    case 2:
    case "ready":
      return Status.ready;
    case 3:
    case "updating":
      return Status.updating;
    case 4:
    case "destroyed":
      return Status.destroyed;
    case 5:
    case "error":
      return Status.error;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.creating:
      return "creating";
    case Status.destroying:
      return "destroying";
    case Status.ready:
      return "ready";
    case Status.updating:
      return "updating";
    case Status.destroyed:
      return "destroyed";
    case Status.error:
      return "error";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function statusToNumber(object: Status): number {
  switch (object) {
    case Status.creating:
      return 0;
    case Status.destroying:
      return 1;
    case Status.ready:
      return 2;
    case Status.updating:
      return 3;
    case Status.destroyed:
      return 4;
    case Status.error:
      return 5;
    case Status.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum KafkaTopics {
  USER_SERVICE_GROUP_SERVICE_DESTROY = "USER_SERVICE_GROUP_SERVICE_DESTROY",
  USER_SERVICE_GROUP_SERVICE_UPDATE = "USER_SERVICE_GROUP_SERVICE_UPDATE",
  USER_SERVICE_GROUP_SERVICE_CREATE = "USER_SERVICE_GROUP_SERVICE_CREATE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function kafkaTopicsFromJSON(object: any): KafkaTopics {
  switch (object) {
    case 0:
    case "USER_SERVICE_GROUP_SERVICE_DESTROY":
      return KafkaTopics.USER_SERVICE_GROUP_SERVICE_DESTROY;
    case 1:
    case "USER_SERVICE_GROUP_SERVICE_UPDATE":
      return KafkaTopics.USER_SERVICE_GROUP_SERVICE_UPDATE;
    case 2:
    case "USER_SERVICE_GROUP_SERVICE_CREATE":
      return KafkaTopics.USER_SERVICE_GROUP_SERVICE_CREATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaTopics.UNRECOGNIZED;
  }
}

export function kafkaTopicsToJSON(object: KafkaTopics): string {
  switch (object) {
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_DESTROY:
      return "USER_SERVICE_GROUP_SERVICE_DESTROY";
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_UPDATE:
      return "USER_SERVICE_GROUP_SERVICE_UPDATE";
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_CREATE:
      return "USER_SERVICE_GROUP_SERVICE_CREATE";
    case KafkaTopics.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function kafkaTopicsToNumber(object: KafkaTopics): number {
  switch (object) {
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_DESTROY:
      return 0;
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_UPDATE:
      return 1;
    case KafkaTopics.USER_SERVICE_GROUP_SERVICE_CREATE:
      return 2;
    case KafkaTopics.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CreateRequest {
  numberOfNodes: number;
  nodeSize: string;
  userId: string;
  name: string;
}

export interface DestroyRequest {
  id: string;
}

export interface ListRequest {
  userId: string;
}

export interface ListResponse {
  userServiceGroups: ShowResponse[];
}

export interface ShowRequest {
  id: string;
}

export interface ShowResponse {
  id: string;
  user: ShowResponse1 | undefined;
  serviceGroup: CreateResponse | undefined;
  status: Status;
  createdAt: number;
  updatedAt: number;
}

function createBaseCreateRequest(): CreateRequest {
  return { numberOfNodes: 0, nodeSize: "", userId: "", name: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberOfNodes !== 0) {
      writer.uint32(8).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(18).string(message.nodeSize);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
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
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nodeSize = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        case 4:
          message.name = reader.string();
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
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CreateRequest>): CreateRequest {
    return CreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateRequest>): CreateRequest {
    const message = createBaseCreateRequest();
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDestroyRequest(): DestroyRequest {
  return { id: "" };
}

export const DestroyRequest = {
  encode(message: DestroyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestroyRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DestroyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<DestroyRequest>): DestroyRequest {
    return DestroyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DestroyRequest>): DestroyRequest {
    const message = createBaseDestroyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return { userId: "" };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create(base?: DeepPartial<ListRequest>): ListRequest {
    return ListRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { userServiceGroups: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userServiceGroups) {
      ShowResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userServiceGroups.push(ShowResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return {
      userServiceGroups: Array.isArray(object?.userServiceGroups)
        ? object.userServiceGroups.map((e: any) => ShowResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.userServiceGroups) {
      obj.userServiceGroups = message.userServiceGroups.map((e) => e ? ShowResponse.toJSON(e) : undefined);
    } else {
      obj.userServiceGroups = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListResponse>): ListResponse {
    return ListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.userServiceGroups = object.userServiceGroups?.map((e) => ShowResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseShowRequest(): ShowRequest {
  return { id: "" };
}

export const ShowRequest = {
  encode(message: ShowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShowRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ShowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<ShowRequest>): ShowRequest {
    return ShowRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowRequest>): ShowRequest {
    const message = createBaseShowRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseShowResponse(): ShowResponse {
  return { id: "", user: undefined, serviceGroup: undefined, status: Status.creating, createdAt: 0, updatedAt: 0 };
}

export const ShowResponse = {
  encode(message: ShowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.user !== undefined) {
      ShowResponse1.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    if (message.serviceGroup !== undefined) {
      CreateResponse.encode(message.serviceGroup, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== Status.creating) {
      writer.uint32(32).int32(statusToNumber(message.status));
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(48).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.user = ShowResponse1.decode(reader, reader.uint32());
          break;
        case 3:
          message.serviceGroup = CreateResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = statusFromJSON(reader.int32());
          break;
        case 5:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShowResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      user: isSet(object.user) ? ShowResponse1.fromJSON(object.user) : undefined,
      serviceGroup: isSet(object.serviceGroup) ? CreateResponse.fromJSON(object.serviceGroup) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : Status.creating,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: ShowResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.user !== undefined && (obj.user = message.user ? ShowResponse1.toJSON(message.user) : undefined);
    message.serviceGroup !== undefined &&
      (obj.serviceGroup = message.serviceGroup ? CreateResponse.toJSON(message.serviceGroup) : undefined);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    return obj;
  },

  create(base?: DeepPartial<ShowResponse>): ShowResponse {
    return ShowResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowResponse>): ShowResponse {
    const message = createBaseShowResponse();
    message.id = object.id ?? "";
    message.user = (object.user !== undefined && object.user !== null)
      ? ShowResponse1.fromPartial(object.user)
      : undefined;
    message.serviceGroup = (object.serviceGroup !== undefined && object.serviceGroup !== null)
      ? CreateResponse.fromPartial(object.serviceGroup)
      : undefined;
    message.status = object.status ?? Status.creating;
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "UserServiceGroup.API",
  methods: {
    create: {
      name: "create",
      requestType: CreateRequest,
      requestStream: false,
      responseType: ShowResponse,
      responseStream: false,
      options: {},
    },
    destroy: {
      name: "destroy",
      requestType: DestroyRequest,
      requestStream: false,
      responseType: ShowResponse,
      responseStream: false,
      options: {},
    },
    list: {
      name: "list",
      requestType: ListRequest,
      requestStream: false,
      responseType: ListResponse,
      responseStream: false,
      options: {},
    },
    show: {
      name: "show",
      requestType: ShowRequest,
      requestStream: false,
      responseType: ShowResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  create(request: CreateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShowResponse>>;
  destroy(request: DestroyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShowResponse>>;
  list(request: ListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListResponse>>;
  show(request: ShowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShowResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  create(request: DeepPartial<CreateRequest>, options?: CallOptions & CallOptionsExt): Promise<ShowResponse>;
  destroy(request: DeepPartial<DestroyRequest>, options?: CallOptions & CallOptionsExt): Promise<ShowResponse>;
  list(request: DeepPartial<ListRequest>, options?: CallOptions & CallOptionsExt): Promise<ListResponse>;
  show(request: DeepPartial<ShowRequest>, options?: CallOptions & CallOptionsExt): Promise<ShowResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
