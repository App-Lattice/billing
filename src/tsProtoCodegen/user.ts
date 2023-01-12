/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "User";

export enum KafkaTopics {
  USER_SERVICE_INSERTED = "USER_SERVICE_INSERTED",
  USER_SERVICE_UPDATED = "USER_SERVICE_UPDATED",
  USER_SERVICE_READY = "USER_SERVICE_READY",
  USER_SERVICE_INSERT = "USER_SERVICE_INSERT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function kafkaTopicsFromJSON(object: any): KafkaTopics {
  switch (object) {
    case 0:
    case "USER_SERVICE_INSERTED":
      return KafkaTopics.USER_SERVICE_INSERTED;
    case 1:
    case "USER_SERVICE_UPDATED":
      return KafkaTopics.USER_SERVICE_UPDATED;
    case 2:
    case "USER_SERVICE_READY":
      return KafkaTopics.USER_SERVICE_READY;
    case 3:
    case "USER_SERVICE_INSERT":
      return KafkaTopics.USER_SERVICE_INSERT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaTopics.UNRECOGNIZED;
  }
}

export function kafkaTopicsToJSON(object: KafkaTopics): string {
  switch (object) {
    case KafkaTopics.USER_SERVICE_INSERTED:
      return "USER_SERVICE_INSERTED";
    case KafkaTopics.USER_SERVICE_UPDATED:
      return "USER_SERVICE_UPDATED";
    case KafkaTopics.USER_SERVICE_READY:
      return "USER_SERVICE_READY";
    case KafkaTopics.USER_SERVICE_INSERT:
      return "USER_SERVICE_INSERT";
    case KafkaTopics.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function kafkaTopicsToNumber(object: KafkaTopics): number {
  switch (object) {
    case KafkaTopics.USER_SERVICE_INSERTED:
      return 0;
    case KafkaTopics.USER_SERVICE_UPDATED:
      return 1;
    case KafkaTopics.USER_SERVICE_READY:
      return 2;
    case KafkaTopics.USER_SERVICE_INSERT:
      return 3;
    case KafkaTopics.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ShowRequest {
  id: string;
}

export interface ShowResponse {
  id: string;
  githubUsername: string;
  email: string;
  createdAt: number;
  updatedAt: number;
}

export interface IndexRequest {
  limit: number;
  page: number;
}

export interface IndexResponse {
  users: ShowResponse[];
}

export interface UpsertRequest {
  id?: string | undefined;
  githubToken: string;
  githubUsername: string;
  email: string;
}

export interface UpsertResponse {
  id: string;
  githubUsername: string;
  email: string;
  githubToken: string;
  createdAt: number;
  updatedAt: number;
}

export interface DestroyRequest {
  id: string;
}

export interface DestroyResponse {
  id: string;
  githubUsername: string;
  email: string;
  githubToken: string;
  createdAt: number;
  updatedAt: number;
}

export interface GetUsingGithubCodeRequest {
  code: string;
}

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
  return { id: "", githubUsername: "", email: "", createdAt: 0, updatedAt: 0 };
}

export const ShowResponse = {
  encode(message: ShowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.githubUsername !== "") {
      writer.uint32(18).string(message.githubUsername);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
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
          message.githubUsername = reader.string();
          break;
        case 4:
          message.email = reader.string();
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
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      email: isSet(object.email) ? String(object.email) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: ShowResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.email !== undefined && (obj.email = message.email);
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
    message.githubUsername = object.githubUsername ?? "";
    message.email = object.email ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseIndexRequest(): IndexRequest {
  return { limit: 0, page: 0 };
}

export const IndexRequest = {
  encode(message: IndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.int32();
          break;
        case 2:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: IndexRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  create(base?: DeepPartial<IndexRequest>): IndexRequest {
    return IndexRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IndexRequest>): IndexRequest {
    const message = createBaseIndexRequest();
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    return message;
  },
};

function createBaseIndexResponse(): IndexResponse {
  return { users: [] };
}

export const IndexResponse = {
  encode(message: IndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      ShowResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(ShowResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => ShowResponse.fromJSON(e)) : [] };
  },

  toJSON(message: IndexResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? ShowResponse.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create(base?: DeepPartial<IndexResponse>): IndexResponse {
    return IndexResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IndexResponse>): IndexResponse {
    const message = createBaseIndexResponse();
    message.users = object.users?.map((e) => ShowResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpsertRequest(): UpsertRequest {
  return { id: undefined, githubToken: "", githubUsername: "", email: "" };
}

export const UpsertRequest = {
  encode(message: UpsertRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.githubToken !== "") {
      writer.uint32(18).string(message.githubToken);
    }
    if (message.githubUsername !== "") {
      writer.uint32(26).string(message.githubUsername);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.githubToken = reader.string();
          break;
        case 3:
          message.githubUsername = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertRequest {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: UpsertRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create(base?: DeepPartial<UpsertRequest>): UpsertRequest {
    return UpsertRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpsertRequest>): UpsertRequest {
    const message = createBaseUpsertRequest();
    message.id = object.id ?? undefined;
    message.githubToken = object.githubToken ?? "";
    message.githubUsername = object.githubUsername ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUpsertResponse(): UpsertResponse {
  return { id: "", githubUsername: "", email: "", githubToken: "", createdAt: 0, updatedAt: 0 };
}

export const UpsertResponse = {
  encode(message: UpsertResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.githubUsername !== "") {
      writer.uint32(18).string(message.githubUsername);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.githubToken !== "") {
      writer.uint32(58).string(message.githubToken);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(48).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.githubUsername = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 7:
          message.githubToken = reader.string();
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

  fromJSON(object: any): UpsertResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      email: isSet(object.email) ? String(object.email) : "",
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: UpsertResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.email !== undefined && (obj.email = message.email);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    return obj;
  },

  create(base?: DeepPartial<UpsertResponse>): UpsertResponse {
    return UpsertResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpsertResponse>): UpsertResponse {
    const message = createBaseUpsertResponse();
    message.id = object.id ?? "";
    message.githubUsername = object.githubUsername ?? "";
    message.email = object.email ?? "";
    message.githubToken = object.githubToken ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
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

function createBaseDestroyResponse(): DestroyResponse {
  return { id: "", githubUsername: "", email: "", githubToken: "", createdAt: 0, updatedAt: 0 };
}

export const DestroyResponse = {
  encode(message: DestroyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.githubUsername !== "") {
      writer.uint32(18).string(message.githubUsername);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.githubToken !== "") {
      writer.uint32(58).string(message.githubToken);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(48).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.githubUsername = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 7:
          message.githubToken = reader.string();
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

  fromJSON(object: any): DestroyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      email: isSet(object.email) ? String(object.email) : "",
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: DestroyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.email !== undefined && (obj.email = message.email);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    return obj;
  },

  create(base?: DeepPartial<DestroyResponse>): DestroyResponse {
    return DestroyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DestroyResponse>): DestroyResponse {
    const message = createBaseDestroyResponse();
    message.id = object.id ?? "";
    message.githubUsername = object.githubUsername ?? "";
    message.email = object.email ?? "";
    message.githubToken = object.githubToken ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseGetUsingGithubCodeRequest(): GetUsingGithubCodeRequest {
  return { code: "" };
}

export const GetUsingGithubCodeRequest = {
  encode(message: GetUsingGithubCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsingGithubCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsingGithubCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsingGithubCodeRequest {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: GetUsingGithubCodeRequest): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  create(base?: DeepPartial<GetUsingGithubCodeRequest>): GetUsingGithubCodeRequest {
    return GetUsingGithubCodeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUsingGithubCodeRequest>): GetUsingGithubCodeRequest {
    const message = createBaseGetUsingGithubCodeRequest();
    message.code = object.code ?? "";
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "User.API",
  methods: {
    show: {
      name: "show",
      requestType: ShowRequest,
      requestStream: false,
      responseType: ShowResponse,
      responseStream: false,
      options: {},
    },
    /** rpc index (IndexRequest) returns (IndexResponse) {} */
    upsert: {
      name: "upsert",
      requestType: UpsertRequest,
      requestStream: false,
      responseType: UpsertResponse,
      responseStream: false,
      options: {},
    },
    getUsingGithubCode: {
      name: "getUsingGithubCode",
      requestType: GetUsingGithubCodeRequest,
      requestStream: false,
      responseType: ShowResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  show(request: ShowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShowResponse>>;
  /** rpc index (IndexRequest) returns (IndexResponse) {} */
  upsert(request: UpsertRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpsertResponse>>;
  getUsingGithubCode(
    request: GetUsingGithubCodeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ShowResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  show(request: DeepPartial<ShowRequest>, options?: CallOptions & CallOptionsExt): Promise<ShowResponse>;
  /** rpc index (IndexRequest) returns (IndexResponse) {} */
  upsert(request: DeepPartial<UpsertRequest>, options?: CallOptions & CallOptionsExt): Promise<UpsertResponse>;
  getUsingGithubCode(
    request: DeepPartial<GetUsingGithubCodeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ShowResponse>;
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
