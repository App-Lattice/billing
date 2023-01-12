/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Authenticate";

/** jwt in metadata */
export interface AuthenticateRequest {
}

export interface AuthenticateResponse {
  jwtPayload: JwtPayload | undefined;
}

export interface CreateTokenRequest {
  userId: string;
}

export interface CreateTokenResponse {
  jwt: string;
}

export interface JwtPayload {
  userId: string;
  githubToken: string;
}

function createBaseAuthenticateRequest(): AuthenticateRequest {
  return {};
}

export const AuthenticateRequest = {
  encode(_: AuthenticateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateRequest();
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

  fromJSON(_: any): AuthenticateRequest {
    return {};
  },

  toJSON(_: AuthenticateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AuthenticateRequest>): AuthenticateRequest {
    return AuthenticateRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<AuthenticateRequest>): AuthenticateRequest {
    const message = createBaseAuthenticateRequest();
    return message;
  },
};

function createBaseAuthenticateResponse(): AuthenticateResponse {
  return { jwtPayload: undefined };
}

export const AuthenticateResponse = {
  encode(message: AuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwtPayload !== undefined) {
      JwtPayload.encode(message.jwtPayload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jwtPayload = JwtPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    return { jwtPayload: isSet(object.jwtPayload) ? JwtPayload.fromJSON(object.jwtPayload) : undefined };
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    message.jwtPayload !== undefined &&
      (obj.jwtPayload = message.jwtPayload ? JwtPayload.toJSON(message.jwtPayload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AuthenticateResponse>): AuthenticateResponse {
    return AuthenticateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticateResponse>): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.jwtPayload = (object.jwtPayload !== undefined && object.jwtPayload !== null)
      ? JwtPayload.fromPartial(object.jwtPayload)
      : undefined;
    return message;
  },
};

function createBaseCreateTokenRequest(): CreateTokenRequest {
  return { userId: "" };
}

export const CreateTokenRequest = {
  encode(message: CreateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTokenRequest();
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

  fromJSON(object: any): CreateTokenRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: CreateTokenRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create(base?: DeepPartial<CreateTokenRequest>): CreateTokenRequest {
    return CreateTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTokenRequest>): CreateTokenRequest {
    const message = createBaseCreateTokenRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseCreateTokenResponse(): CreateTokenResponse {
  return { jwt: "" };
}

export const CreateTokenResponse = {
  encode(message: CreateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwt !== "") {
      writer.uint32(10).string(message.jwt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jwt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTokenResponse {
    return { jwt: isSet(object.jwt) ? String(object.jwt) : "" };
  },

  toJSON(message: CreateTokenResponse): unknown {
    const obj: any = {};
    message.jwt !== undefined && (obj.jwt = message.jwt);
    return obj;
  },

  create(base?: DeepPartial<CreateTokenResponse>): CreateTokenResponse {
    return CreateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTokenResponse>): CreateTokenResponse {
    const message = createBaseCreateTokenResponse();
    message.jwt = object.jwt ?? "";
    return message;
  },
};

function createBaseJwtPayload(): JwtPayload {
  return { userId: "", githubToken: "" };
}

export const JwtPayload = {
  encode(message: JwtPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.githubToken !== "") {
      writer.uint32(18).string(message.githubToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwtPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.githubToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JwtPayload {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      githubToken: isSet(object.githubToken) ? String(object.githubToken) : "",
    };
  },

  toJSON(message: JwtPayload): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.githubToken !== undefined && (obj.githubToken = message.githubToken);
    return obj;
  },

  create(base?: DeepPartial<JwtPayload>): JwtPayload {
    return JwtPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<JwtPayload>): JwtPayload {
    const message = createBaseJwtPayload();
    message.userId = object.userId ?? "";
    message.githubToken = object.githubToken ?? "";
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "Authenticate.API",
  methods: {
    authenticate: {
      name: "authenticate",
      requestType: AuthenticateRequest,
      requestStream: false,
      responseType: AuthenticateResponse,
      responseStream: false,
      options: {},
    },
    createToken: {
      name: "createToken",
      requestType: CreateTokenRequest,
      requestStream: false,
      responseType: CreateTokenResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  authenticate(
    request: AuthenticateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticateResponse>>;
  createToken(
    request: CreateTokenRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateTokenResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  authenticate(
    request: DeepPartial<AuthenticateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticateResponse>;
  createToken(
    request: DeepPartial<CreateTokenRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateTokenResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
