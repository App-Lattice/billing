/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Billing";

export interface CreateSetupIntentRequest {
  stripeCustomerId: string;
}

export interface ShowSetupIntentResponse {
  clientSecret: string;
  hasPaymentMethod: boolean;
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
  return { clientSecret: "", hasPaymentMethod: false };
}

export const ShowSetupIntentResponse = {
  encode(message: ShowSetupIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientSecret !== "") {
      writer.uint32(18).string(message.clientSecret);
    }
    if (message.hasPaymentMethod === true) {
      writer.uint32(24).bool(message.hasPaymentMethod);
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
        case 2:
          message.clientSecret = reader.string();
          break;
        case 3:
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
      clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
      hasPaymentMethod: isSet(object.hasPaymentMethod) ? Boolean(object.hasPaymentMethod) : false,
    };
  },

  toJSON(message: ShowSetupIntentResponse): unknown {
    const obj: any = {};
    message.clientSecret !== undefined && (obj.clientSecret = message.clientSecret);
    message.hasPaymentMethod !== undefined && (obj.hasPaymentMethod = message.hasPaymentMethod);
    return obj;
  },

  create(base?: DeepPartial<ShowSetupIntentResponse>): ShowSetupIntentResponse {
    return ShowSetupIntentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShowSetupIntentResponse>): ShowSetupIntentResponse {
    const message = createBaseShowSetupIntentResponse();
    message.clientSecret = object.clientSecret ?? "";
    message.hasPaymentMethod = object.hasPaymentMethod ?? false;
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
