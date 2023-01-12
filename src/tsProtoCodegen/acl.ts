/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { ShowResponse } from "./user";

export const protobufPackage = "Acl";

export interface Permission {
  userId: string;
  subjectName: string;
  subjectId?: string | undefined;
  action: string;
}

export interface AuthorizeRequest {
  userId: string;
  permission: Permission | undefined;
}

export interface AuthorizeResponse {
  permission: Permission | undefined;
  authorized: boolean;
}

export interface AddPermissionRequest {
  userId: string;
  permission: Permission | undefined;
}

export interface AddPermissionResponse {
  userId: string;
  status: boolean;
  permission?: Permission | undefined;
}

export interface DeletePermissionRequest {
  user: ShowResponse | undefined;
  permission: Permission | undefined;
}

export interface DeletePermissionResponse {
  user: ShowResponse | undefined;
  permission: Permission | undefined;
  authorized: boolean;
}

function createBasePermission(): Permission {
  return { userId: "", subjectName: "", subjectId: undefined, action: "" };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.subjectName !== "") {
      writer.uint32(18).string(message.subjectName);
    }
    if (message.subjectId !== undefined) {
      writer.uint32(26).string(message.subjectId);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.subjectName = reader.string();
          break;
        case 3:
          message.subjectId = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      subjectName: isSet(object.subjectName) ? String(object.subjectName) : "",
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : undefined,
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.subjectName !== undefined && (obj.subjectName = message.subjectName);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  create(base?: DeepPartial<Permission>): Permission {
    return Permission.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Permission>): Permission {
    const message = createBasePermission();
    message.userId = object.userId ?? "";
    message.subjectName = object.subjectName ?? "";
    message.subjectId = object.subjectId ?? undefined;
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseAuthorizeRequest(): AuthorizeRequest {
  return { userId: "", permission: undefined };
}

export const AuthorizeRequest = {
  encode(message: AuthorizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
    };
  },

  toJSON(message: AuthorizeRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AuthorizeRequest>): AuthorizeRequest {
    return AuthorizeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthorizeRequest>): AuthorizeRequest {
    const message = createBaseAuthorizeRequest();
    message.userId = object.userId ?? "";
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseAuthorizeResponse(): AuthorizeResponse {
  return { permission: undefined, authorized: false };
}

export const AuthorizeResponse = {
  encode(message: AuthorizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    if (message.authorized === true) {
      writer.uint32(16).bool(message.authorized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        case 2:
          message.authorized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeResponse {
    return {
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
      authorized: isSet(object.authorized) ? Boolean(object.authorized) : false,
    };
  },

  toJSON(message: AuthorizeResponse): unknown {
    const obj: any = {};
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    message.authorized !== undefined && (obj.authorized = message.authorized);
    return obj;
  },

  create(base?: DeepPartial<AuthorizeResponse>): AuthorizeResponse {
    return AuthorizeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthorizeResponse>): AuthorizeResponse {
    const message = createBaseAuthorizeResponse();
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    message.authorized = object.authorized ?? false;
    return message;
  },
};

function createBaseAddPermissionRequest(): AddPermissionRequest {
  return { userId: "", permission: undefined };
}

export const AddPermissionRequest = {
  encode(message: AddPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPermissionRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
    };
  },

  toJSON(message: AddPermissionRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddPermissionRequest>): AddPermissionRequest {
    return AddPermissionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddPermissionRequest>): AddPermissionRequest {
    const message = createBaseAddPermissionRequest();
    message.userId = object.userId ?? "";
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseAddPermissionResponse(): AddPermissionResponse {
  return { userId: "", status: false, permission: undefined };
}

export const AddPermissionResponse = {
  encode(message: AddPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.status === true) {
      writer.uint32(16).bool(message.status);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.status = reader.bool();
          break;
        case 3:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPermissionResponse {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
    };
  },

  toJSON(message: AddPermissionResponse): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.status !== undefined && (obj.status = message.status);
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddPermissionResponse>): AddPermissionResponse {
    return AddPermissionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddPermissionResponse>): AddPermissionResponse {
    const message = createBaseAddPermissionResponse();
    message.userId = object.userId ?? "";
    message.status = object.status ?? false;
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseDeletePermissionRequest(): DeletePermissionRequest {
  return { user: undefined, permission: undefined };
}

export const DeletePermissionRequest = {
  encode(message: DeletePermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      ShowResponse.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = ShowResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePermissionRequest {
    return {
      user: isSet(object.user) ? ShowResponse.fromJSON(object.user) : undefined,
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
    };
  },

  toJSON(message: DeletePermissionRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? ShowResponse.toJSON(message.user) : undefined);
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeletePermissionRequest>): DeletePermissionRequest {
    return DeletePermissionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeletePermissionRequest>): DeletePermissionRequest {
    const message = createBaseDeletePermissionRequest();
    message.user = (object.user !== undefined && object.user !== null)
      ? ShowResponse.fromPartial(object.user)
      : undefined;
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseDeletePermissionResponse(): DeletePermissionResponse {
  return { user: undefined, permission: undefined, authorized: false };
}

export const DeletePermissionResponse = {
  encode(message: DeletePermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      ShowResponse.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(18).fork()).ldelim();
    }
    if (message.authorized === true) {
      writer.uint32(24).bool(message.authorized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = ShowResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        case 3:
          message.authorized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePermissionResponse {
    return {
      user: isSet(object.user) ? ShowResponse.fromJSON(object.user) : undefined,
      permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined,
      authorized: isSet(object.authorized) ? Boolean(object.authorized) : false,
    };
  },

  toJSON(message: DeletePermissionResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? ShowResponse.toJSON(message.user) : undefined);
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permission.toJSON(message.permission) : undefined);
    message.authorized !== undefined && (obj.authorized = message.authorized);
    return obj;
  },

  create(base?: DeepPartial<DeletePermissionResponse>): DeletePermissionResponse {
    return DeletePermissionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeletePermissionResponse>): DeletePermissionResponse {
    const message = createBaseDeletePermissionResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? ShowResponse.fromPartial(object.user)
      : undefined;
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    message.authorized = object.authorized ?? false;
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "Acl.API",
  methods: {
    authorize: {
      name: "authorize",
      requestType: AuthorizeRequest,
      requestStream: false,
      responseType: AuthorizeResponse,
      responseStream: false,
      options: {},
    },
    addPermission: {
      name: "addPermission",
      requestType: AddPermissionRequest,
      requestStream: false,
      responseType: AddPermissionResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  authorize(request: AuthorizeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AuthorizeResponse>>;
  addPermission(
    request: AddPermissionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddPermissionResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  authorize(request: DeepPartial<AuthorizeRequest>, options?: CallOptions & CallOptionsExt): Promise<AuthorizeResponse>;
  addPermission(
    request: DeepPartial<AddPermissionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddPermissionResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
