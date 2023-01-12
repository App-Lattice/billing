/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Service";

export enum Status {
  creating_github_repo = "creating_github_repo",
  updating_k8s_config = "updating_k8s_config",
  creating_cicd_pipelines = "creating_cicd_pipelines",
  initial_docker_build_and_deploy = "initial_docker_build_and_deploy",
  destroying = "destroying",
  updating = "updating",
  ready = "ready",
  failed = "failed",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "creating_github_repo":
      return Status.creating_github_repo;
    case 1:
    case "updating_k8s_config":
      return Status.updating_k8s_config;
    case 2:
    case "creating_cicd_pipelines":
      return Status.creating_cicd_pipelines;
    case 3:
    case "initial_docker_build_and_deploy":
      return Status.initial_docker_build_and_deploy;
    case 4:
    case "destroying":
      return Status.destroying;
    case 5:
    case "updating":
      return Status.updating;
    case 6:
    case "ready":
      return Status.ready;
    case 7:
    case "failed":
      return Status.failed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.creating_github_repo:
      return "creating_github_repo";
    case Status.updating_k8s_config:
      return "updating_k8s_config";
    case Status.creating_cicd_pipelines:
      return "creating_cicd_pipelines";
    case Status.initial_docker_build_and_deploy:
      return "initial_docker_build_and_deploy";
    case Status.destroying:
      return "destroying";
    case Status.updating:
      return "updating";
    case Status.ready:
      return "ready";
    case Status.failed:
      return "failed";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function statusToNumber(object: Status): number {
  switch (object) {
    case Status.creating_github_repo:
      return 0;
    case Status.updating_k8s_config:
      return 1;
    case Status.creating_cicd_pipelines:
      return 2;
    case Status.initial_docker_build_and_deploy:
      return 3;
    case Status.destroying:
      return 4;
    case Status.updating:
      return 5;
    case Status.ready:
      return 6;
    case Status.failed:
      return 7;
    case Status.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum KafkaTopics {
  SERVICE_SERVICE_UPDATE_STATUS = "SERVICE_SERVICE_UPDATE_STATUS",
  SERVICE_SERVICE_CREATE = "SERVICE_SERVICE_CREATE",
  SERVICE_SERVICE_DELETE = "SERVICE_SERVICE_DELETE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function kafkaTopicsFromJSON(object: any): KafkaTopics {
  switch (object) {
    case 0:
    case "SERVICE_SERVICE_UPDATE_STATUS":
      return KafkaTopics.SERVICE_SERVICE_UPDATE_STATUS;
    case 1:
    case "SERVICE_SERVICE_CREATE":
      return KafkaTopics.SERVICE_SERVICE_CREATE;
    case 2:
    case "SERVICE_SERVICE_DELETE":
      return KafkaTopics.SERVICE_SERVICE_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaTopics.UNRECOGNIZED;
  }
}

export function kafkaTopicsToJSON(object: KafkaTopics): string {
  switch (object) {
    case KafkaTopics.SERVICE_SERVICE_UPDATE_STATUS:
      return "SERVICE_SERVICE_UPDATE_STATUS";
    case KafkaTopics.SERVICE_SERVICE_CREATE:
      return "SERVICE_SERVICE_CREATE";
    case KafkaTopics.SERVICE_SERVICE_DELETE:
      return "SERVICE_SERVICE_DELETE";
    case KafkaTopics.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function kafkaTopicsToNumber(object: KafkaTopics): number {
  switch (object) {
    case KafkaTopics.SERVICE_SERVICE_UPDATE_STATUS:
      return 0;
    case KafkaTopics.SERVICE_SERVICE_CREATE:
      return 1;
    case KafkaTopics.SERVICE_SERVICE_DELETE:
      return 2;
    case KafkaTopics.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CreateRequest {
  name: string;
  envVars: string;
  publicRoutes: CreatePublicRouteRequest[];
  githubUsername: string;
  githubToken: string;
  serviceGroupName: string;
}

export interface CreateResponse {
  id: string;
  name: string;
  envVars: string;
  publicRoutes: CreatePublicRouteResponse[];
}

export interface CreateArgumentError {
  name: string[];
  envVars: string[];
  publicRoutes: string[];
  githubUsername: string[];
  githubToken: string[];
  serviceGroupName: string[];
}

export interface CreatePublicRouteRequest {
  path: string;
  serviceId?: string | undefined;
}

export interface CreatePublicRouteResponse {
  id: string;
  path: string;
  serviceId: string;
}

export interface Updated {
  originalStatus: Status;
  newStatus: Status;
  publicId: string;
}

function createBaseCreateRequest(): CreateRequest {
  return { name: "", envVars: "", publicRoutes: [], githubUsername: "", githubToken: "", serviceGroupName: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.envVars !== "") {
      writer.uint32(26).string(message.envVars);
    }
    for (const v of message.publicRoutes) {
      CreatePublicRouteRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.githubUsername !== "") {
      writer.uint32(42).string(message.githubUsername);
    }
    if (message.githubToken !== "") {
      writer.uint32(50).string(message.githubToken);
    }
    if (message.serviceGroupName !== "") {
      writer.uint32(58).string(message.serviceGroupName);
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
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.envVars = reader.string();
          break;
        case 4:
          message.publicRoutes.push(CreatePublicRouteRequest.decode(reader, reader.uint32()));
          break;
        case 5:
          message.githubUsername = reader.string();
          break;
        case 6:
          message.githubToken = reader.string();
          break;
        case 7:
          message.serviceGroupName = reader.string();
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
      envVars: isSet(object.envVars) ? String(object.envVars) : "",
      publicRoutes: Array.isArray(object?.publicRoutes)
        ? object.publicRoutes.map((e: any) => CreatePublicRouteRequest.fromJSON(e))
        : [],
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
      serviceGroupName: isSet(object.serviceGroupName) ? String(object.serviceGroupName) : "",
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.envVars !== undefined && (obj.envVars = message.envVars);
    if (message.publicRoutes) {
      obj.publicRoutes = message.publicRoutes.map((e) => e ? CreatePublicRouteRequest.toJSON(e) : undefined);
    } else {
      obj.publicRoutes = [];
    }
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    message.serviceGroupName !== undefined && (obj.serviceGroupName = message.serviceGroupName);
    return obj;
  },

  create(base?: DeepPartial<CreateRequest>): CreateRequest {
    return CreateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateRequest>): CreateRequest {
    const message = createBaseCreateRequest();
    message.name = object.name ?? "";
    message.envVars = object.envVars ?? "";
    message.publicRoutes = object.publicRoutes?.map((e) => CreatePublicRouteRequest.fromPartial(e)) || [];
    message.githubUsername = object.githubUsername ?? "";
    message.githubToken = object.githubToken ?? "";
    message.serviceGroupName = object.serviceGroupName ?? "";
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

function createBaseCreateArgumentError(): CreateArgumentError {
  return { name: [], envVars: [], publicRoutes: [], githubUsername: [], githubToken: [], serviceGroupName: [] };
}

export const CreateArgumentError = {
  encode(message: CreateArgumentError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.envVars) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.publicRoutes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.githubUsername) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.githubToken) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.serviceGroupName) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateArgumentError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateArgumentError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name.push(reader.string());
          break;
        case 2:
          message.envVars.push(reader.string());
          break;
        case 3:
          message.publicRoutes.push(reader.string());
          break;
        case 4:
          message.githubUsername.push(reader.string());
          break;
        case 5:
          message.githubToken.push(reader.string());
          break;
        case 6:
          message.serviceGroupName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateArgumentError {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => String(e)) : [],
      envVars: Array.isArray(object?.envVars) ? object.envVars.map((e: any) => String(e)) : [],
      publicRoutes: Array.isArray(object?.publicRoutes) ? object.publicRoutes.map((e: any) => String(e)) : [],
      githubUsername: Array.isArray(object?.githubUsername) ? object.githubUsername.map((e: any) => String(e)) : [],
      githubToken: Array.isArray(object?.githubToken) ? object.githubToken.map((e: any) => String(e)) : [],
      serviceGroupName: Array.isArray(object?.serviceGroupName)
        ? object.serviceGroupName.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CreateArgumentError): unknown {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map((e) => e);
    } else {
      obj.name = [];
    }
    if (message.envVars) {
      obj.envVars = message.envVars.map((e) => e);
    } else {
      obj.envVars = [];
    }
    if (message.publicRoutes) {
      obj.publicRoutes = message.publicRoutes.map((e) => e);
    } else {
      obj.publicRoutes = [];
    }
    if (message.githubUsername) {
      obj.githubUsername = message.githubUsername.map((e) => e);
    } else {
      obj.githubUsername = [];
    }
    if (message.githubToken) {
      obj.githubToken = message.githubToken.map((e) => e);
    } else {
      obj.githubToken = [];
    }
    if (message.serviceGroupName) {
      obj.serviceGroupName = message.serviceGroupName.map((e) => e);
    } else {
      obj.serviceGroupName = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CreateArgumentError>): CreateArgumentError {
    return CreateArgumentError.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateArgumentError>): CreateArgumentError {
    const message = createBaseCreateArgumentError();
    message.name = object.name?.map((e) => e) || [];
    message.envVars = object.envVars?.map((e) => e) || [];
    message.publicRoutes = object.publicRoutes?.map((e) => e) || [];
    message.githubUsername = object.githubUsername?.map((e) => e) || [];
    message.githubToken = object.githubToken?.map((e) => e) || [];
    message.serviceGroupName = object.serviceGroupName?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreatePublicRouteRequest(): CreatePublicRouteRequest {
  return { path: "", serviceId: undefined };
}

export const CreatePublicRouteRequest = {
  encode(message: CreatePublicRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.serviceId !== undefined) {
      writer.uint32(18).string(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePublicRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePublicRouteRequest {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : undefined,
    };
  },

  toJSON(message: CreatePublicRouteRequest): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    return obj;
  },

  create(base?: DeepPartial<CreatePublicRouteRequest>): CreatePublicRouteRequest {
    return CreatePublicRouteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePublicRouteRequest>): CreatePublicRouteRequest {
    const message = createBaseCreatePublicRouteRequest();
    message.path = object.path ?? "";
    message.serviceId = object.serviceId ?? undefined;
    return message;
  },
};

function createBaseCreatePublicRouteResponse(): CreatePublicRouteResponse {
  return { id: "", path: "", serviceId: "" };
}

export const CreatePublicRouteResponse = {
  encode(message: CreatePublicRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.serviceId !== "") {
      writer.uint32(26).string(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePublicRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePublicRouteResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      path: isSet(object.path) ? String(object.path) : "",
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
    };
  },

  toJSON(message: CreatePublicRouteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.path !== undefined && (obj.path = message.path);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    return obj;
  },

  create(base?: DeepPartial<CreatePublicRouteResponse>): CreatePublicRouteResponse {
    return CreatePublicRouteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePublicRouteResponse>): CreatePublicRouteResponse {
    const message = createBaseCreatePublicRouteResponse();
    message.id = object.id ?? "";
    message.path = object.path ?? "";
    message.serviceId = object.serviceId ?? "";
    return message;
  },
};

function createBaseUpdated(): Updated {
  return { originalStatus: Status.creating_github_repo, newStatus: Status.creating_github_repo, publicId: "" };
}

export const Updated = {
  encode(message: Updated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalStatus !== Status.creating_github_repo) {
      writer.uint32(8).int32(statusToNumber(message.originalStatus));
    }
    if (message.newStatus !== Status.creating_github_repo) {
      writer.uint32(16).int32(statusToNumber(message.newStatus));
    }
    if (message.publicId !== "") {
      writer.uint32(26).string(message.publicId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Updated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalStatus = statusFromJSON(reader.int32());
          break;
        case 2:
          message.newStatus = statusFromJSON(reader.int32());
          break;
        case 3:
          message.publicId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Updated {
    return {
      originalStatus: isSet(object.originalStatus)
        ? statusFromJSON(object.originalStatus)
        : Status.creating_github_repo,
      newStatus: isSet(object.newStatus) ? statusFromJSON(object.newStatus) : Status.creating_github_repo,
      publicId: isSet(object.publicId) ? String(object.publicId) : "",
    };
  },

  toJSON(message: Updated): unknown {
    const obj: any = {};
    message.originalStatus !== undefined && (obj.originalStatus = statusToJSON(message.originalStatus));
    message.newStatus !== undefined && (obj.newStatus = statusToJSON(message.newStatus));
    message.publicId !== undefined && (obj.publicId = message.publicId);
    return obj;
  },

  create(base?: DeepPartial<Updated>): Updated {
    return Updated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Updated>): Updated {
    const message = createBaseUpdated();
    message.originalStatus = object.originalStatus ?? Status.creating_github_repo;
    message.newStatus = object.newStatus ?? Status.creating_github_repo;
    message.publicId = object.publicId ?? "";
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "Service.API",
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
