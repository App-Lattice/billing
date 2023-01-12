/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "JenkinsManager";

export interface CreateJobsRequest {
  email: string;
  githubUsername: string;
  githubToken: string;
  githubRepoName: string;
  serviceGroupName: string;
}

export interface CreateJobsResponse {
}

function createBaseCreateJobsRequest(): CreateJobsRequest {
  return { email: "", githubUsername: "", githubToken: "", githubRepoName: "", serviceGroupName: "" };
}

export const CreateJobsRequest = {
  encode(message: CreateJobsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.githubUsername !== "") {
      writer.uint32(18).string(message.githubUsername);
    }
    if (message.githubToken !== "") {
      writer.uint32(26).string(message.githubToken);
    }
    if (message.githubRepoName !== "") {
      writer.uint32(34).string(message.githubRepoName);
    }
    if (message.serviceGroupName !== "") {
      writer.uint32(50).string(message.serviceGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.githubUsername = reader.string();
          break;
        case 3:
          message.githubToken = reader.string();
          break;
        case 4:
          message.githubRepoName = reader.string();
          break;
        case 6:
          message.serviceGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateJobsRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      githubUsername: isSet(object.githubUsername) ? String(object.githubUsername) : "",
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
      githubRepoName: isSet(object.githubRepoName) ? String(object.githubRepoName) : "",
      serviceGroupName: isSet(object.serviceGroupName) ? String(object.serviceGroupName) : "",
    };
  },

  toJSON(message: CreateJobsRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.githubUsername !== undefined && (obj.githubUsername = message.githubUsername);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    message.githubRepoName !== undefined && (obj.githubRepoName = message.githubRepoName);
    message.serviceGroupName !== undefined && (obj.serviceGroupName = message.serviceGroupName);
    return obj;
  },

  create(base?: DeepPartial<CreateJobsRequest>): CreateJobsRequest {
    return CreateJobsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateJobsRequest>): CreateJobsRequest {
    const message = createBaseCreateJobsRequest();
    message.email = object.email ?? "";
    message.githubUsername = object.githubUsername ?? "";
    message.githubToken = object.githubToken ?? "";
    message.githubRepoName = object.githubRepoName ?? "";
    message.serviceGroupName = object.serviceGroupName ?? "";
    return message;
  },
};

function createBaseCreateJobsResponse(): CreateJobsResponse {
  return {};
}

export const CreateJobsResponse = {
  encode(_: CreateJobsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateJobsResponse {
    return {};
  },

  toJSON(_: CreateJobsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CreateJobsResponse>): CreateJobsResponse {
    return CreateJobsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CreateJobsResponse>): CreateJobsResponse {
    const message = createBaseCreateJobsResponse();
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "JenkinsManager.API",
  methods: {
    createJobs: {
      name: "createJobs",
      requestType: CreateJobsRequest,
      requestStream: false,
      responseType: CreateJobsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  createJobs(
    request: CreateJobsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateJobsResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  createJobs(
    request: DeepPartial<CreateJobsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateJobsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
