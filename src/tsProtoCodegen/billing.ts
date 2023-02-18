/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Billing";

export interface CreateSetupIntentRequest {
  stripeCustomerId: string;
}

export interface ShowSetupIntentResponse {
  setupIntent: SetupIntent | undefined;
  hasPaymentMethod: boolean;
}

export interface SetupIntent {
  id: string;
  clientSecret: string;
}

export interface ShowDefaultPaymentMethodRequest {
  stripeCustomerId: string;
}

export interface ShowDefaultPaymentMethodResponse {
  id: string;
  externalId: string;
  brand: string;
  last4: string;
}

function createBaseCreateSetupIntentRequest(): CreateSetupIntentRequest {
  return { stripeCustomerId: "" };
}

export const CreateSetupIntentRequest = {
  encode(message: CreateSetupIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stripeCustomerId !== "") {
      writer.uint32(10).string(message.stripeCustomerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSetupIntentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSetupIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeCustomerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSetupIntentRequest {
    return { stripeCustomerId: isSet(object.stripeCustomerId) ? String(object.stripeCustomerId) : "" };
  },

  toJSON(message: CreateSetupIntentRequest): unknown {
    const obj: any = {};
    message.stripeCustomerId !== undefined && (obj.stripeCustomerId = message.stripeCustomerId);
    return obj;
  },

  create(base?: DeepPartial<CreateSetupIntentRequest>): CreateSetupIntentRequest {
    return CreateSetupIntentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateSetupIntentRequest>): CreateSetupIntentRequest {
    const message = createBaseCreateSetupIntentRequest();
    message.stripeCustomerId = object.stripeCustomerId ?? "";
    return message;
  },
};

function createBaseShowSetupIntentResponse(): ShowSetupIntentResponse {
  return { setupIntent: undefined, hasPaymentMethod: false };
}

export const ShowSetupIntentResponse = {
  encode(message: ShowSetupIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setupIntent !== undefined) {
      SetupIntent.encode(message.setupIntent, writer.uint32(10).fork()).ldelim();
    }
    if (message.hasPaymentMethod === true) {
      writer.uint32(16).bool(message.hasPaymentMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowSetupIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowSetupIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setupIntent = SetupIntent.decode(reader, reader.uint32());
          break;
        case 2:
          message.hasPaymentMethod = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShowSetupIntentResponse {
    return {
      setupIntent: isSet(object.setupIntent) ? SetupIntent.fromJSON(object.setupIntent) : undefined,
      hasPaymentMethod: isSet(object.hasPaymentMethod) ? Boolean(object.hasPaymentMethod) : false,
    };
  },

  toJSON(message: ShowSetupIntentResponse): unknown {
    const obj: any = {};
    message.setupIntent !== undefined &&
      (obj.setupIntent = message.setupIntent ? SetupIntent.toJSON(message.setupIntent) : undefined);
    message.hasPaymentMethod !== undefined && (obj.hasPaymentMethod = message.hasPaymentMethod);
    return obj;
  },

  create(base?: DeepPartial<ShowSetupIntentResponse>): ShowSetupIntentResponse {
    return ShowSetupIntentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowSetupIntentResponse>): ShowSetupIntentResponse {
    const message = createBaseShowSetupIntentResponse();
    message.setupIntent = (object.setupIntent !== undefined && object.setupIntent !== null)
      ? SetupIntent.fromPartial(object.setupIntent)
      : undefined;
    message.hasPaymentMethod = object.hasPaymentMethod ?? false;
    return message;
  },
};

function createBaseSetupIntent(): SetupIntent {
  return { id: "", clientSecret: "" };
}

export const SetupIntent = {
  encode(message: SetupIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientSecret !== "") {
      writer.uint32(18).string(message.clientSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetupIntent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
    };
  },

  toJSON(message: SetupIntent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientSecret !== undefined && (obj.clientSecret = message.clientSecret);
    return obj;
  },

  create(base?: DeepPartial<SetupIntent>): SetupIntent {
    return SetupIntent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetupIntent>): SetupIntent {
    const message = createBaseSetupIntent();
    message.id = object.id ?? "";
    message.clientSecret = object.clientSecret ?? "";
    return message;
  },
};

function createBaseShowDefaultPaymentMethodRequest(): ShowDefaultPaymentMethodRequest {
  return { stripeCustomerId: "" };
}

export const ShowDefaultPaymentMethodRequest = {
  encode(message: ShowDefaultPaymentMethodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stripeCustomerId !== "") {
      writer.uint32(10).string(message.stripeCustomerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowDefaultPaymentMethodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowDefaultPaymentMethodRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeCustomerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShowDefaultPaymentMethodRequest {
    return { stripeCustomerId: isSet(object.stripeCustomerId) ? String(object.stripeCustomerId) : "" };
  },

  toJSON(message: ShowDefaultPaymentMethodRequest): unknown {
    const obj: any = {};
    message.stripeCustomerId !== undefined && (obj.stripeCustomerId = message.stripeCustomerId);
    return obj;
  },

  create(base?: DeepPartial<ShowDefaultPaymentMethodRequest>): ShowDefaultPaymentMethodRequest {
    return ShowDefaultPaymentMethodRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowDefaultPaymentMethodRequest>): ShowDefaultPaymentMethodRequest {
    const message = createBaseShowDefaultPaymentMethodRequest();
    message.stripeCustomerId = object.stripeCustomerId ?? "";
    return message;
  },
};

function createBaseShowDefaultPaymentMethodResponse(): ShowDefaultPaymentMethodResponse {
  return { id: "", externalId: "", brand: "", last4: "" };
}

export const ShowDefaultPaymentMethodResponse = {
  encode(message: ShowDefaultPaymentMethodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    if (message.brand !== "") {
      writer.uint32(26).string(message.brand);
    }
    if (message.last4 !== "") {
      writer.uint32(34).string(message.last4);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowDefaultPaymentMethodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowDefaultPaymentMethodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.externalId = reader.string();
          break;
        case 3:
          message.brand = reader.string();
          break;
        case 4:
          message.last4 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShowDefaultPaymentMethodResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      brand: isSet(object.brand) ? String(object.brand) : "",
      last4: isSet(object.last4) ? String(object.last4) : "",
    };
  },

  toJSON(message: ShowDefaultPaymentMethodResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.externalId !== undefined && (obj.externalId = message.externalId);
    message.brand !== undefined && (obj.brand = message.brand);
    message.last4 !== undefined && (obj.last4 = message.last4);
    return obj;
  },

  create(base?: DeepPartial<ShowDefaultPaymentMethodResponse>): ShowDefaultPaymentMethodResponse {
    return ShowDefaultPaymentMethodResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowDefaultPaymentMethodResponse>): ShowDefaultPaymentMethodResponse {
    const message = createBaseShowDefaultPaymentMethodResponse();
    message.id = object.id ?? "";
    message.externalId = object.externalId ?? "";
    message.brand = object.brand ?? "";
    message.last4 = object.last4 ?? "";
    return message;
  },
};

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "Billing.API",
  methods: {
    createSetupIntent: {
      name: "createSetupIntent",
      requestType: CreateSetupIntentRequest,
      requestStream: false,
      responseType: ShowSetupIntentResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  createSetupIntent(
    request: CreateSetupIntentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ShowSetupIntentResponse>>;
}

export interface APIClient<CallOptionsExt = {}> {
  createSetupIntent(
    request: DeepPartial<CreateSetupIntentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ShowSetupIntentResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
