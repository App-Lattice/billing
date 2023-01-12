/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ServiceGroup";

export enum KafkaTopics {
  SERVICE_GROUP_CREATED = "SERVICE_GROUP_CREATED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function kafkaTopicsFromJSON(object: any): KafkaTopics {
  switch (object) {
    case 0:
    case "SERVICE_GROUP_CREATED":
      return KafkaTopics.SERVICE_GROUP_CREATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaTopics.UNRECOGNIZED;
  }
}

export function kafkaTopicsToJSON(object: KafkaTopics): string {
  switch (object) {
    case KafkaTopics.SERVICE_GROUP_CREATED:
      return "SERVICE_GROUP_CREATED";
    case KafkaTopics.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function kafkaTopicsToNumber(object: KafkaTopics): number {
  switch (object) {
    case KafkaTopics.SERVICE_GROUP_CREATED:
      return 0;
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
  numberOfNodes: number;
  nodeSize: string;
  createdAt: number;
  updatedAt: number;
  name: string;
}

export interface CreateRequest {
  name: string;
  numberOfNodes: number;
  nodeSize: string;
}

export interface CreateResponse {
  id: string;
  numberOfNodes: number;
  nodeSize: string;
  createdAt: number;
  name: string;
}

export interface UpdateRequest {
  id: string;
  numberOfNodes?: number | undefined;
  nodeSize?: string | undefined;
  updatedAt: number;
}

export interface UpdateResponse {
  id: string;
  numberOfNodes: number;
  nodeSize: string;
  createdAt: number;
  updatedAt: number;
}

export interface DestroyRequest {
  id: string;
}

export interface DestroyResponse {
  id: string;
  numberOfNodes: number;
  nodeSize: string;
  createdAt: number;
  updatedAt: number;
}

export interface StatusUpdated {
  originalStatus: string;
  newStatus: string;
  clusterId: string;
  id: string;
  clusterName: string;
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
  return { id: "", numberOfNodes: 0, nodeSize: "", createdAt: 0, updatedAt: 0, name: "" };
}

export const ShowResponse = {
  encode(message: ShowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.numberOfNodes !== 0) {
      writer.uint32(16).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(26).string(message.nodeSize);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(40).int64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
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
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nodeSize = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.name = reader.string();
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
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ShowResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<ShowResponse>): ShowResponse {
    return ShowResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowResponse>): ShowResponse {
    const message = createBaseShowResponse();
    message.id = object.id ?? "";
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateRequest(): CreateRequest {
  return { name: "", numberOfNodes: 0, nodeSize: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.numberOfNodes !== 0) {
      writer.uint32(16).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(26).string(message.nodeSize);
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
          message.name = reader.string();
          break;
        case 2:
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nodeSize = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    return obj;
  },

  create(base?: DeepPartial<CreateRequest>): CreateRequest {
    return CreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateRequest>): CreateRequest {
    const message = createBaseCreateRequest();
    message.name = object.name ?? "";
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { id: "", numberOfNodes: 0, nodeSize: "", createdAt: 0, name: "" };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.numberOfNodes !== 0) {
      writer.uint32(16).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(26).string(message.nodeSize);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
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
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nodeSize = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.name = reader.string();
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
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CreateResponse>): CreateResponse {
    return CreateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateResponse>): CreateResponse {
    const message = createBaseCreateResponse();
    message.id = object.id ?? "";
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUpdateRequest(): UpdateRequest {
  return { id: "", numberOfNodes: undefined, nodeSize: undefined, updatedAt: 0 };
}

export const UpdateRequest = {
  encode(message: UpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.numberOfNodes !== undefined) {
      writer.uint32(16).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== undefined) {
      writer.uint32(26).string(message.nodeSize);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(32).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nodeSize = reader.string();
          break;
        case 4:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : undefined,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : undefined,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: UpdateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    return obj;
  },

  create(base?: DeepPartial<UpdateRequest>): UpdateRequest {
    return UpdateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateRequest>): UpdateRequest {
    const message = createBaseUpdateRequest();
    message.id = object.id ?? "";
    message.numberOfNodes = object.numberOfNodes ?? undefined;
    message.nodeSize = object.nodeSize ?? undefined;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseUpdateResponse(): UpdateResponse {
  return { id: "", numberOfNodes: 0, nodeSize: "", createdAt: 0, updatedAt: 0 };
}

export const UpdateResponse = {
  encode(message: UpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.numberOfNodes !== 0) {
      writer.uint32(24).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(34).string(message.nodeSize);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(48).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.nodeSize = reader.string();
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

  fromJSON(object: any): UpdateResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: UpdateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
    return obj;
  },

  create(base?: DeepPartial<UpdateResponse>): UpdateResponse {
    return UpdateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateResponse>): UpdateResponse {
    const message = createBaseUpdateResponse();
    message.id = object.id ?? "";
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
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
  return { id: "", numberOfNodes: 0, nodeSize: "", createdAt: 0, updatedAt: 0 };
}

export const DestroyResponse = {
  encode(message: DestroyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.numberOfNodes !== 0) {
      writer.uint32(16).int64(message.numberOfNodes);
    }
    if (message.nodeSize !== "") {
      writer.uint32(26).string(message.nodeSize);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(40).int64(message.updatedAt);
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
          message.numberOfNodes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nodeSize = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
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
      numberOfNodes: isSet(object.numberOfNodes) ? Number(object.numberOfNodes) : 0,
      nodeSize: isSet(object.nodeSize) ? String(object.nodeSize) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: DestroyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.numberOfNodes !== undefined && (obj.numberOfNodes = Math.round(message.numberOfNodes));
    message.nodeSize !== undefined && (obj.nodeSize = message.nodeSize);
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
    message.numberOfNodes = object.numberOfNodes ?? 0;
    message.nodeSize = object.nodeSize ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseStatusUpdated(): StatusUpdated {
  return { originalStatus: "", newStatus: "", clusterId: "", id: "", clusterName: "" };
}

export const StatusUpdated = {
  encode(message: StatusUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalStatus !== "") {
      writer.uint32(10).string(message.originalStatus);
    }
    if (message.newStatus !== "") {
      writer.uint32(18).string(message.newStatus);
    }
    if (message.clusterId !== "") {
      writer.uint32(26).string(message.clusterId);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.clusterName !== "") {
      writer.uint32(42).string(message.clusterName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalStatus = reader.string();
          break;
        case 2:
          message.newStatus = reader.string();
          break;
        case 3:
          message.clusterId = reader.string();
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
          message.clusterName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatusUpdated {
    return {
      originalStatus: isSet(object.originalStatus) ? String(object.originalStatus) : "",
      newStatus: isSet(object.newStatus) ? String(object.newStatus) : "",
      clusterId: isSet(object.clusterId) ? String(object.clusterId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      clusterName: isSet(object.clusterName) ? String(object.clusterName) : "",
    };
  },

  toJSON(message: StatusUpdated): unknown {
    const obj: any = {};
    message.originalStatus !== undefined && (obj.originalStatus = message.originalStatus);
    message.newStatus !== undefined && (obj.newStatus = message.newStatus);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.id !== undefined && (obj.id = message.id);
    message.clusterName !== undefined && (obj.clusterName = message.clusterName);
    return obj;
  },

  create(base?: DeepPartial<StatusUpdated>): StatusUpdated {
    return StatusUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StatusUpdated>): StatusUpdated {
    const message = createBaseStatusUpdated();
    message.originalStatus = object.originalStatus ?? "";
    message.newStatus = object.newStatus ?? "";
    message.clusterId = object.clusterId ?? "";
    message.id = object.id ?? "";
    message.clusterName = object.clusterName ?? "";
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "ServiceGroup.API",
  methods: {
    create: {
      name: "create",
      requestType: CreateRequest,
      requestStream: false,
      responseType: CreateResponse,
      responseStream: false,
      options: {},
    },
    destroy: {
      name: "destroy",
      requestType: DestroyRequest,
      requestStream: false,
      responseType: DestroyResponse,
      responseStream: false,
      options: {},
    },
    /** rpc update (UpdateRequest) returns (UpdateResponse) {} */
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
  create(request: CreateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateResponse>>;
  destroy(request: DestroyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DestroyResponse>>;
  /** rpc update (UpdateRequest) returns (UpdateResponse) {} */
  show(request: ShowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShowResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  create(request: DeepPartial<CreateRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateResponse>;
  destroy(request: DeepPartial<DestroyRequest>, options?: CallOptions & CallOptionsExt): Promise<DestroyResponse>;
  /** rpc update (UpdateRequest) returns (UpdateResponse) {} */
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
