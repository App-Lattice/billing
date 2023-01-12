/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DigitalOcean";

export enum K8S_SIZES {
  nothing = "nothing",
  S1VCPU2GB = "S1VCPU2GB",
  S1VCPU2GBAMD = "S1VCPU2GBAMD",
  s1vcpu2gbintel = "s1vcpu2gbintel",
  S2VCPU2GB = "S2VCPU2GB",
  S2VCPU2GBAMD = "S2VCPU2GBAMD",
  S2VCPU2GBINTEL = "S2VCPU2GBINTEL",
  S2VCPU4GB = "S2VCPU4GB",
  S2VCPU4GBAMD = "S2VCPU4GBAMD",
  S2VCPU4GBINTEL = "S2VCPU4GBINTEL",
  C2 = "C2",
  S4VCPU8GB = "S4VCPU8GB",
  S4VCPU8GBAMD = "S4VCPU8GBAMD",
  S4VCPU8GBINTEL = "S4VCPU8GBINTEL",
  G2VCPU8GB = "G2VCPU8GB",
  GD2VCPU8GB = "GD2VCPU8GB",
  M2VCPU16GB = "M2VCPU16GB",
  C4 = "C4",
  S8VCPU16GB = "S8VCPU16GB",
  M32VCPU16GB = "M32VCPU16GB",
  S8VCPU16GBAMD = "S8VCPU16GBAMD",
  S8VCPU16GBINTEL = "S8VCPU16GBINTEL",
  G4VCPU16GB = "G4VCPU16GB",
  M62VCPU16GB = "M62VCPU16GB",
  GD4VCPU16GB = "GD4VCPU16GB",
  SO1_52VCPU16GB = "SO1_52VCPU16GB",
  M4VCPU32GB = "M4VCPU32GB",
  C8 = "C8",
  M34VCPU32GB = "M34VCPU32GB",
  G8VCPU32GB = "G8VCPU32GB",
  M64VCPU32GB = "M64VCPU32GB",
  GD8VCPU32GB = "GD8VCPU32GB",
  SO1_54VCPU32GB = "SO1_54VCPU32GB",
  M8VCPU64GB = "M8VCPU64GB",
  C16 = "C16",
  M38VCPU64GB = "M38VCPU64GB",
  G16VCPU64GB = "G16VCPU64GB",
  M68VCPU64GB = "M68VCPU64GB",
  GD16VCPU64GB = "GD16VCPU64GB",
  SO1_58VCPU64GB = "SO1_58VCPU64GB",
  M16VCPU128GB = "M16VCPU128GB",
  C32 = "C32",
  M316VCPU128GB = "M316VCPU128GB",
  C48 = "C48",
  M24VCPU192GB = "M24VCPU192GB",
  G32VCPU128GB = "G32VCPU128GB",
  M616VCPU128GB = "M616VCPU128GB",
  GD32VCPU128GB = "GD32VCPU128GB",
  M324VCPU192GB = "M324VCPU192GB",
  G40VCPU160GB = "G40VCPU160GB",
  SO1_516VCPU128GB = "SO1_516VCPU128GB",
  M32VCPU256GB = "M32VCPU256GB",
  GD40VCPU160GB = "GD40VCPU160GB",
  M624VCPU192GB = "M624VCPU192GB",
  M332VCPU256GB = "M332VCPU256GB",
  SO1_524VCPU192GB = "SO1_524VCPU192GB",
  M632VCPU256GB = "M632VCPU256GB",
  SO1_532VCPU256GB = "SO1_532VCPU256GB",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function k8S_SIZESFromJSON(object: any): K8S_SIZES {
  switch (object) {
    case 0:
    case "nothing":
      return K8S_SIZES.nothing;
    case 57:
    case "S1VCPU2GB":
      return K8S_SIZES.S1VCPU2GB;
    case 1:
    case "S1VCPU2GBAMD":
      return K8S_SIZES.S1VCPU2GBAMD;
    case 2:
    case "s1vcpu2gbintel":
      return K8S_SIZES.s1vcpu2gbintel;
    case 3:
    case "S2VCPU2GB":
      return K8S_SIZES.S2VCPU2GB;
    case 4:
    case "S2VCPU2GBAMD":
      return K8S_SIZES.S2VCPU2GBAMD;
    case 5:
    case "S2VCPU2GBINTEL":
      return K8S_SIZES.S2VCPU2GBINTEL;
    case 6:
    case "S2VCPU4GB":
      return K8S_SIZES.S2VCPU4GB;
    case 7:
    case "S2VCPU4GBAMD":
      return K8S_SIZES.S2VCPU4GBAMD;
    case 8:
    case "S2VCPU4GBINTEL":
      return K8S_SIZES.S2VCPU4GBINTEL;
    case 9:
    case "C2":
      return K8S_SIZES.C2;
    case 10:
    case "S4VCPU8GB":
      return K8S_SIZES.S4VCPU8GB;
    case 11:
    case "S4VCPU8GBAMD":
      return K8S_SIZES.S4VCPU8GBAMD;
    case 12:
    case "S4VCPU8GBINTEL":
      return K8S_SIZES.S4VCPU8GBINTEL;
    case 13:
    case "G2VCPU8GB":
      return K8S_SIZES.G2VCPU8GB;
    case 14:
    case "GD2VCPU8GB":
      return K8S_SIZES.GD2VCPU8GB;
    case 15:
    case "M2VCPU16GB":
      return K8S_SIZES.M2VCPU16GB;
    case 16:
    case "C4":
      return K8S_SIZES.C4;
    case 17:
    case "S8VCPU16GB":
      return K8S_SIZES.S8VCPU16GB;
    case 18:
    case "M32VCPU16GB":
      return K8S_SIZES.M32VCPU16GB;
    case 19:
    case "S8VCPU16GBAMD":
      return K8S_SIZES.S8VCPU16GBAMD;
    case 20:
    case "S8VCPU16GBINTEL":
      return K8S_SIZES.S8VCPU16GBINTEL;
    case 21:
    case "G4VCPU16GB":
      return K8S_SIZES.G4VCPU16GB;
    case 22:
    case "M62VCPU16GB":
      return K8S_SIZES.M62VCPU16GB;
    case 23:
    case "GD4VCPU16GB":
      return K8S_SIZES.GD4VCPU16GB;
    case 24:
    case "SO1_52VCPU16GB":
      return K8S_SIZES.SO1_52VCPU16GB;
    case 25:
    case "M4VCPU32GB":
      return K8S_SIZES.M4VCPU32GB;
    case 26:
    case "C8":
      return K8S_SIZES.C8;
    case 27:
    case "M34VCPU32GB":
      return K8S_SIZES.M34VCPU32GB;
    case 28:
    case "G8VCPU32GB":
      return K8S_SIZES.G8VCPU32GB;
    case 29:
    case "M64VCPU32GB":
      return K8S_SIZES.M64VCPU32GB;
    case 30:
    case "GD8VCPU32GB":
      return K8S_SIZES.GD8VCPU32GB;
    case 31:
    case "SO1_54VCPU32GB":
      return K8S_SIZES.SO1_54VCPU32GB;
    case 32:
    case "M8VCPU64GB":
      return K8S_SIZES.M8VCPU64GB;
    case 33:
    case "C16":
      return K8S_SIZES.C16;
    case 34:
    case "M38VCPU64GB":
      return K8S_SIZES.M38VCPU64GB;
    case 35:
    case "G16VCPU64GB":
      return K8S_SIZES.G16VCPU64GB;
    case 36:
    case "M68VCPU64GB":
      return K8S_SIZES.M68VCPU64GB;
    case 37:
    case "GD16VCPU64GB":
      return K8S_SIZES.GD16VCPU64GB;
    case 38:
    case "SO1_58VCPU64GB":
      return K8S_SIZES.SO1_58VCPU64GB;
    case 39:
    case "M16VCPU128GB":
      return K8S_SIZES.M16VCPU128GB;
    case 40:
    case "C32":
      return K8S_SIZES.C32;
    case 41:
    case "M316VCPU128GB":
      return K8S_SIZES.M316VCPU128GB;
    case 42:
    case "C48":
      return K8S_SIZES.C48;
    case 43:
    case "M24VCPU192GB":
      return K8S_SIZES.M24VCPU192GB;
    case 44:
    case "G32VCPU128GB":
      return K8S_SIZES.G32VCPU128GB;
    case 45:
    case "M616VCPU128GB":
      return K8S_SIZES.M616VCPU128GB;
    case 46:
    case "GD32VCPU128GB":
      return K8S_SIZES.GD32VCPU128GB;
    case 47:
    case "M324VCPU192GB":
      return K8S_SIZES.M324VCPU192GB;
    case 48:
    case "G40VCPU160GB":
      return K8S_SIZES.G40VCPU160GB;
    case 49:
    case "SO1_516VCPU128GB":
      return K8S_SIZES.SO1_516VCPU128GB;
    case 50:
    case "M32VCPU256GB":
      return K8S_SIZES.M32VCPU256GB;
    case 51:
    case "GD40VCPU160GB":
      return K8S_SIZES.GD40VCPU160GB;
    case 52:
    case "M624VCPU192GB":
      return K8S_SIZES.M624VCPU192GB;
    case 53:
    case "M332VCPU256GB":
      return K8S_SIZES.M332VCPU256GB;
    case 54:
    case "SO1_524VCPU192GB":
      return K8S_SIZES.SO1_524VCPU192GB;
    case 55:
    case "M632VCPU256GB":
      return K8S_SIZES.M632VCPU256GB;
    case 56:
    case "SO1_532VCPU256GB":
      return K8S_SIZES.SO1_532VCPU256GB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return K8S_SIZES.UNRECOGNIZED;
  }
}

export function k8S_SIZESToJSON(object: K8S_SIZES): string {
  switch (object) {
    case K8S_SIZES.nothing:
      return "nothing";
    case K8S_SIZES.S1VCPU2GB:
      return "S1VCPU2GB";
    case K8S_SIZES.S1VCPU2GBAMD:
      return "S1VCPU2GBAMD";
    case K8S_SIZES.s1vcpu2gbintel:
      return "s1vcpu2gbintel";
    case K8S_SIZES.S2VCPU2GB:
      return "S2VCPU2GB";
    case K8S_SIZES.S2VCPU2GBAMD:
      return "S2VCPU2GBAMD";
    case K8S_SIZES.S2VCPU2GBINTEL:
      return "S2VCPU2GBINTEL";
    case K8S_SIZES.S2VCPU4GB:
      return "S2VCPU4GB";
    case K8S_SIZES.S2VCPU4GBAMD:
      return "S2VCPU4GBAMD";
    case K8S_SIZES.S2VCPU4GBINTEL:
      return "S2VCPU4GBINTEL";
    case K8S_SIZES.C2:
      return "C2";
    case K8S_SIZES.S4VCPU8GB:
      return "S4VCPU8GB";
    case K8S_SIZES.S4VCPU8GBAMD:
      return "S4VCPU8GBAMD";
    case K8S_SIZES.S4VCPU8GBINTEL:
      return "S4VCPU8GBINTEL";
    case K8S_SIZES.G2VCPU8GB:
      return "G2VCPU8GB";
    case K8S_SIZES.GD2VCPU8GB:
      return "GD2VCPU8GB";
    case K8S_SIZES.M2VCPU16GB:
      return "M2VCPU16GB";
    case K8S_SIZES.C4:
      return "C4";
    case K8S_SIZES.S8VCPU16GB:
      return "S8VCPU16GB";
    case K8S_SIZES.M32VCPU16GB:
      return "M32VCPU16GB";
    case K8S_SIZES.S8VCPU16GBAMD:
      return "S8VCPU16GBAMD";
    case K8S_SIZES.S8VCPU16GBINTEL:
      return "S8VCPU16GBINTEL";
    case K8S_SIZES.G4VCPU16GB:
      return "G4VCPU16GB";
    case K8S_SIZES.M62VCPU16GB:
      return "M62VCPU16GB";
    case K8S_SIZES.GD4VCPU16GB:
      return "GD4VCPU16GB";
    case K8S_SIZES.SO1_52VCPU16GB:
      return "SO1_52VCPU16GB";
    case K8S_SIZES.M4VCPU32GB:
      return "M4VCPU32GB";
    case K8S_SIZES.C8:
      return "C8";
    case K8S_SIZES.M34VCPU32GB:
      return "M34VCPU32GB";
    case K8S_SIZES.G8VCPU32GB:
      return "G8VCPU32GB";
    case K8S_SIZES.M64VCPU32GB:
      return "M64VCPU32GB";
    case K8S_SIZES.GD8VCPU32GB:
      return "GD8VCPU32GB";
    case K8S_SIZES.SO1_54VCPU32GB:
      return "SO1_54VCPU32GB";
    case K8S_SIZES.M8VCPU64GB:
      return "M8VCPU64GB";
    case K8S_SIZES.C16:
      return "C16";
    case K8S_SIZES.M38VCPU64GB:
      return "M38VCPU64GB";
    case K8S_SIZES.G16VCPU64GB:
      return "G16VCPU64GB";
    case K8S_SIZES.M68VCPU64GB:
      return "M68VCPU64GB";
    case K8S_SIZES.GD16VCPU64GB:
      return "GD16VCPU64GB";
    case K8S_SIZES.SO1_58VCPU64GB:
      return "SO1_58VCPU64GB";
    case K8S_SIZES.M16VCPU128GB:
      return "M16VCPU128GB";
    case K8S_SIZES.C32:
      return "C32";
    case K8S_SIZES.M316VCPU128GB:
      return "M316VCPU128GB";
    case K8S_SIZES.C48:
      return "C48";
    case K8S_SIZES.M24VCPU192GB:
      return "M24VCPU192GB";
    case K8S_SIZES.G32VCPU128GB:
      return "G32VCPU128GB";
    case K8S_SIZES.M616VCPU128GB:
      return "M616VCPU128GB";
    case K8S_SIZES.GD32VCPU128GB:
      return "GD32VCPU128GB";
    case K8S_SIZES.M324VCPU192GB:
      return "M324VCPU192GB";
    case K8S_SIZES.G40VCPU160GB:
      return "G40VCPU160GB";
    case K8S_SIZES.SO1_516VCPU128GB:
      return "SO1_516VCPU128GB";
    case K8S_SIZES.M32VCPU256GB:
      return "M32VCPU256GB";
    case K8S_SIZES.GD40VCPU160GB:
      return "GD40VCPU160GB";
    case K8S_SIZES.M624VCPU192GB:
      return "M624VCPU192GB";
    case K8S_SIZES.M332VCPU256GB:
      return "M332VCPU256GB";
    case K8S_SIZES.SO1_524VCPU192GB:
      return "SO1_524VCPU192GB";
    case K8S_SIZES.M632VCPU256GB:
      return "M632VCPU256GB";
    case K8S_SIZES.SO1_532VCPU256GB:
      return "SO1_532VCPU256GB";
    case K8S_SIZES.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function k8S_SIZESToNumber(object: K8S_SIZES): number {
  switch (object) {
    case K8S_SIZES.nothing:
      return 0;
    case K8S_SIZES.S1VCPU2GB:
      return 57;
    case K8S_SIZES.S1VCPU2GBAMD:
      return 1;
    case K8S_SIZES.s1vcpu2gbintel:
      return 2;
    case K8S_SIZES.S2VCPU2GB:
      return 3;
    case K8S_SIZES.S2VCPU2GBAMD:
      return 4;
    case K8S_SIZES.S2VCPU2GBINTEL:
      return 5;
    case K8S_SIZES.S2VCPU4GB:
      return 6;
    case K8S_SIZES.S2VCPU4GBAMD:
      return 7;
    case K8S_SIZES.S2VCPU4GBINTEL:
      return 8;
    case K8S_SIZES.C2:
      return 9;
    case K8S_SIZES.S4VCPU8GB:
      return 10;
    case K8S_SIZES.S4VCPU8GBAMD:
      return 11;
    case K8S_SIZES.S4VCPU8GBINTEL:
      return 12;
    case K8S_SIZES.G2VCPU8GB:
      return 13;
    case K8S_SIZES.GD2VCPU8GB:
      return 14;
    case K8S_SIZES.M2VCPU16GB:
      return 15;
    case K8S_SIZES.C4:
      return 16;
    case K8S_SIZES.S8VCPU16GB:
      return 17;
    case K8S_SIZES.M32VCPU16GB:
      return 18;
    case K8S_SIZES.S8VCPU16GBAMD:
      return 19;
    case K8S_SIZES.S8VCPU16GBINTEL:
      return 20;
    case K8S_SIZES.G4VCPU16GB:
      return 21;
    case K8S_SIZES.M62VCPU16GB:
      return 22;
    case K8S_SIZES.GD4VCPU16GB:
      return 23;
    case K8S_SIZES.SO1_52VCPU16GB:
      return 24;
    case K8S_SIZES.M4VCPU32GB:
      return 25;
    case K8S_SIZES.C8:
      return 26;
    case K8S_SIZES.M34VCPU32GB:
      return 27;
    case K8S_SIZES.G8VCPU32GB:
      return 28;
    case K8S_SIZES.M64VCPU32GB:
      return 29;
    case K8S_SIZES.GD8VCPU32GB:
      return 30;
    case K8S_SIZES.SO1_54VCPU32GB:
      return 31;
    case K8S_SIZES.M8VCPU64GB:
      return 32;
    case K8S_SIZES.C16:
      return 33;
    case K8S_SIZES.M38VCPU64GB:
      return 34;
    case K8S_SIZES.G16VCPU64GB:
      return 35;
    case K8S_SIZES.M68VCPU64GB:
      return 36;
    case K8S_SIZES.GD16VCPU64GB:
      return 37;
    case K8S_SIZES.SO1_58VCPU64GB:
      return 38;
    case K8S_SIZES.M16VCPU128GB:
      return 39;
    case K8S_SIZES.C32:
      return 40;
    case K8S_SIZES.M316VCPU128GB:
      return 41;
    case K8S_SIZES.C48:
      return 42;
    case K8S_SIZES.M24VCPU192GB:
      return 43;
    case K8S_SIZES.G32VCPU128GB:
      return 44;
    case K8S_SIZES.M616VCPU128GB:
      return 45;
    case K8S_SIZES.GD32VCPU128GB:
      return 46;
    case K8S_SIZES.M324VCPU192GB:
      return 47;
    case K8S_SIZES.G40VCPU160GB:
      return 48;
    case K8S_SIZES.SO1_516VCPU128GB:
      return 49;
    case K8S_SIZES.M32VCPU256GB:
      return 50;
    case K8S_SIZES.GD40VCPU160GB:
      return 51;
    case K8S_SIZES.M624VCPU192GB:
      return 52;
    case K8S_SIZES.M332VCPU256GB:
      return 53;
    case K8S_SIZES.SO1_524VCPU192GB:
      return 54;
    case K8S_SIZES.M632VCPU256GB:
      return 55;
    case K8S_SIZES.SO1_532VCPU256GB:
      return 56;
    case K8S_SIZES.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface NodeStatus {
  state: string;
}

export interface Node {
  id: string;
  name: string;
  status: NodeStatus | undefined;
  droplet_id: string;
  created_at: string;
  updated_at: string;
}

export interface NodePool {
  id: string;
  name: string;
  size: string;
  count: string;
  tags: string[];
  labels?: string | undefined;
  taints: string[];
  auto_scale: boolean;
  min_nodes: number;
  max_nodes: number;
  nodes: Node[];
}

export interface KubernetesClusterMaintenancePolicy {
  start_time: string;
  duration: string;
  day: string;
}

export interface KubernetesClusterStatus {
  state: string;
  message: string;
}

export interface KubernetesCluster {
  id: string;
  name: string;
  region: string;
  version: string;
  cluster_subnet: string;
  service_subnet: string;
  vpc_uuid: string;
  ipv4: string;
  endpoint: string;
  tags: string[];
  node_pools: NodePool[];
  maintenance_policy: KubernetesClusterMaintenancePolicy | undefined;
  auto_upgrade: string;
  status: KubernetesClusterStatus | undefined;
  created_at: string;
  updated_at: string;
  surge_upgrade: boolean;
  registry_enabled: boolean;
  ha: string;
}

export interface CreateKubernetesClusterResponse {
  kubernetes_cluster: KubernetesCluster | undefined;
}

function createBaseNodeStatus(): NodeStatus {
  return { state: "" };
}

export const NodeStatus = {
  encode(message: NodeStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeStatus {
    return { state: isSet(object.state) ? String(object.state) : "" };
  },

  toJSON(message: NodeStatus): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create(base?: DeepPartial<NodeStatus>): NodeStatus {
    return NodeStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NodeStatus>): NodeStatus {
    const message = createBaseNodeStatus();
    message.state = object.state ?? "";
    return message;
  },
};

function createBaseNode(): Node {
  return { id: "", name: "", status: undefined, droplet_id: "", created_at: "", updated_at: "" };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== undefined) {
      NodeStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    if (message.droplet_id !== "") {
      writer.uint32(34).string(message.droplet_id);
    }
    if (message.created_at !== "") {
      writer.uint32(42).string(message.created_at);
    }
    if (message.updated_at !== "") {
      writer.uint32(50).string(message.updated_at);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
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
          message.status = NodeStatus.decode(reader, reader.uint32());
          break;
        case 4:
          message.droplet_id = reader.string();
          break;
        case 5:
          message.created_at = reader.string();
          break;
        case 6:
          message.updated_at = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? NodeStatus.fromJSON(object.status) : undefined,
      droplet_id: isSet(object.droplet_id) ? String(object.droplet_id) : "",
      created_at: isSet(object.created_at) ? String(object.created_at) : "",
      updated_at: isSet(object.updated_at) ? String(object.updated_at) : "",
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = message.status ? NodeStatus.toJSON(message.status) : undefined);
    message.droplet_id !== undefined && (obj.droplet_id = message.droplet_id);
    message.created_at !== undefined && (obj.created_at = message.created_at);
    message.updated_at !== undefined && (obj.updated_at = message.updated_at);
    return obj;
  },

  create(base?: DeepPartial<Node>): Node {
    return Node.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? NodeStatus.fromPartial(object.status)
      : undefined;
    message.droplet_id = object.droplet_id ?? "";
    message.created_at = object.created_at ?? "";
    message.updated_at = object.updated_at ?? "";
    return message;
  },
};

function createBaseNodePool(): NodePool {
  return {
    id: "",
    name: "",
    size: "",
    count: "",
    tags: [],
    labels: undefined,
    taints: [],
    auto_scale: false,
    min_nodes: 0,
    max_nodes: 0,
    nodes: [],
  };
}

export const NodePool = {
  encode(message: NodePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.size !== "") {
      writer.uint32(26).string(message.size);
    }
    if (message.count !== "") {
      writer.uint32(34).string(message.count);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.labels !== undefined) {
      writer.uint32(50).string(message.labels);
    }
    for (const v of message.taints) {
      writer.uint32(58).string(v!);
    }
    if (message.auto_scale === true) {
      writer.uint32(64).bool(message.auto_scale);
    }
    if (message.min_nodes !== 0) {
      writer.uint32(72).int64(message.min_nodes);
    }
    if (message.max_nodes !== 0) {
      writer.uint32(80).int64(message.max_nodes);
    }
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodePool();
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
          message.size = reader.string();
          break;
        case 4:
          message.count = reader.string();
          break;
        case 5:
          message.tags.push(reader.string());
          break;
        case 6:
          message.labels = reader.string();
          break;
        case 7:
          message.taints.push(reader.string());
          break;
        case 8:
          message.auto_scale = reader.bool();
          break;
        case 9:
          message.min_nodes = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.max_nodes = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.nodes.push(Node.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodePool {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      size: isSet(object.size) ? String(object.size) : "",
      count: isSet(object.count) ? String(object.count) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      labels: isSet(object.labels) ? String(object.labels) : undefined,
      taints: Array.isArray(object?.taints) ? object.taints.map((e: any) => String(e)) : [],
      auto_scale: isSet(object.auto_scale) ? Boolean(object.auto_scale) : false,
      min_nodes: isSet(object.min_nodes) ? Number(object.min_nodes) : 0,
      max_nodes: isSet(object.max_nodes) ? Number(object.max_nodes) : 0,
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [],
    };
  },

  toJSON(message: NodePool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = message.size);
    message.count !== undefined && (obj.count = message.count);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.labels !== undefined && (obj.labels = message.labels);
    if (message.taints) {
      obj.taints = message.taints.map((e) => e);
    } else {
      obj.taints = [];
    }
    message.auto_scale !== undefined && (obj.auto_scale = message.auto_scale);
    message.min_nodes !== undefined && (obj.min_nodes = Math.round(message.min_nodes));
    message.max_nodes !== undefined && (obj.max_nodes = Math.round(message.max_nodes));
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e ? Node.toJSON(e) : undefined);
    } else {
      obj.nodes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<NodePool>): NodePool {
    return NodePool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NodePool>): NodePool {
    const message = createBaseNodePool();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? "";
    message.count = object.count ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.labels = object.labels ?? undefined;
    message.taints = object.taints?.map((e) => e) || [];
    message.auto_scale = object.auto_scale ?? false;
    message.min_nodes = object.min_nodes ?? 0;
    message.max_nodes = object.max_nodes ?? 0;
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKubernetesClusterMaintenancePolicy(): KubernetesClusterMaintenancePolicy {
  return { start_time: "", duration: "", day: "" };
}

export const KubernetesClusterMaintenancePolicy = {
  encode(message: KubernetesClusterMaintenancePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start_time !== "") {
      writer.uint32(10).string(message.start_time);
    }
    if (message.duration !== "") {
      writer.uint32(18).string(message.duration);
    }
    if (message.day !== "") {
      writer.uint32(26).string(message.day);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KubernetesClusterMaintenancePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKubernetesClusterMaintenancePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start_time = reader.string();
          break;
        case 2:
          message.duration = reader.string();
          break;
        case 3:
          message.day = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KubernetesClusterMaintenancePolicy {
    return {
      start_time: isSet(object.start_time) ? String(object.start_time) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      day: isSet(object.day) ? String(object.day) : "",
    };
  },

  toJSON(message: KubernetesClusterMaintenancePolicy): unknown {
    const obj: any = {};
    message.start_time !== undefined && (obj.start_time = message.start_time);
    message.duration !== undefined && (obj.duration = message.duration);
    message.day !== undefined && (obj.day = message.day);
    return obj;
  },

  create(base?: DeepPartial<KubernetesClusterMaintenancePolicy>): KubernetesClusterMaintenancePolicy {
    return KubernetesClusterMaintenancePolicy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<KubernetesClusterMaintenancePolicy>): KubernetesClusterMaintenancePolicy {
    const message = createBaseKubernetesClusterMaintenancePolicy();
    message.start_time = object.start_time ?? "";
    message.duration = object.duration ?? "";
    message.day = object.day ?? "";
    return message;
  },
};

function createBaseKubernetesClusterStatus(): KubernetesClusterStatus {
  return { state: "", message: "" };
}

export const KubernetesClusterStatus = {
  encode(message: KubernetesClusterStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KubernetesClusterStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKubernetesClusterStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KubernetesClusterStatus {
    return {
      state: isSet(object.state) ? String(object.state) : "",
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: KubernetesClusterStatus): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<KubernetesClusterStatus>): KubernetesClusterStatus {
    return KubernetesClusterStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<KubernetesClusterStatus>): KubernetesClusterStatus {
    const message = createBaseKubernetesClusterStatus();
    message.state = object.state ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseKubernetesCluster(): KubernetesCluster {
  return {
    id: "",
    name: "",
    region: "",
    version: "",
    cluster_subnet: "",
    service_subnet: "",
    vpc_uuid: "",
    ipv4: "",
    endpoint: "",
    tags: [],
    node_pools: [],
    maintenance_policy: undefined,
    auto_upgrade: "",
    status: undefined,
    created_at: "",
    updated_at: "",
    surge_upgrade: false,
    registry_enabled: false,
    ha: "",
  };
}

export const KubernetesCluster = {
  encode(message: KubernetesCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.cluster_subnet !== "") {
      writer.uint32(42).string(message.cluster_subnet);
    }
    if (message.service_subnet !== "") {
      writer.uint32(50).string(message.service_subnet);
    }
    if (message.vpc_uuid !== "") {
      writer.uint32(58).string(message.vpc_uuid);
    }
    if (message.ipv4 !== "") {
      writer.uint32(66).string(message.ipv4);
    }
    if (message.endpoint !== "") {
      writer.uint32(74).string(message.endpoint);
    }
    for (const v of message.tags) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.node_pools) {
      NodePool.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.maintenance_policy !== undefined) {
      KubernetesClusterMaintenancePolicy.encode(message.maintenance_policy, writer.uint32(98).fork()).ldelim();
    }
    if (message.auto_upgrade !== "") {
      writer.uint32(106).string(message.auto_upgrade);
    }
    if (message.status !== undefined) {
      KubernetesClusterStatus.encode(message.status, writer.uint32(114).fork()).ldelim();
    }
    if (message.created_at !== "") {
      writer.uint32(122).string(message.created_at);
    }
    if (message.updated_at !== "") {
      writer.uint32(130).string(message.updated_at);
    }
    if (message.surge_upgrade === true) {
      writer.uint32(136).bool(message.surge_upgrade);
    }
    if (message.registry_enabled === true) {
      writer.uint32(144).bool(message.registry_enabled);
    }
    if (message.ha !== "") {
      writer.uint32(154).string(message.ha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KubernetesCluster {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKubernetesCluster();
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
          message.region = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.cluster_subnet = reader.string();
          break;
        case 6:
          message.service_subnet = reader.string();
          break;
        case 7:
          message.vpc_uuid = reader.string();
          break;
        case 8:
          message.ipv4 = reader.string();
          break;
        case 9:
          message.endpoint = reader.string();
          break;
        case 10:
          message.tags.push(reader.string());
          break;
        case 11:
          message.node_pools.push(NodePool.decode(reader, reader.uint32()));
          break;
        case 12:
          message.maintenance_policy = KubernetesClusterMaintenancePolicy.decode(reader, reader.uint32());
          break;
        case 13:
          message.auto_upgrade = reader.string();
          break;
        case 14:
          message.status = KubernetesClusterStatus.decode(reader, reader.uint32());
          break;
        case 15:
          message.created_at = reader.string();
          break;
        case 16:
          message.updated_at = reader.string();
          break;
        case 17:
          message.surge_upgrade = reader.bool();
          break;
        case 18:
          message.registry_enabled = reader.bool();
          break;
        case 19:
          message.ha = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KubernetesCluster {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      region: isSet(object.region) ? String(object.region) : "",
      version: isSet(object.version) ? String(object.version) : "",
      cluster_subnet: isSet(object.cluster_subnet) ? String(object.cluster_subnet) : "",
      service_subnet: isSet(object.service_subnet) ? String(object.service_subnet) : "",
      vpc_uuid: isSet(object.vpc_uuid) ? String(object.vpc_uuid) : "",
      ipv4: isSet(object.ipv4) ? String(object.ipv4) : "",
      endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      node_pools: Array.isArray(object?.node_pools) ? object.node_pools.map((e: any) => NodePool.fromJSON(e)) : [],
      maintenance_policy: isSet(object.maintenance_policy)
        ? KubernetesClusterMaintenancePolicy.fromJSON(object.maintenance_policy)
        : undefined,
      auto_upgrade: isSet(object.auto_upgrade) ? String(object.auto_upgrade) : "",
      status: isSet(object.status) ? KubernetesClusterStatus.fromJSON(object.status) : undefined,
      created_at: isSet(object.created_at) ? String(object.created_at) : "",
      updated_at: isSet(object.updated_at) ? String(object.updated_at) : "",
      surge_upgrade: isSet(object.surge_upgrade) ? Boolean(object.surge_upgrade) : false,
      registry_enabled: isSet(object.registry_enabled) ? Boolean(object.registry_enabled) : false,
      ha: isSet(object.ha) ? String(object.ha) : "",
    };
  },

  toJSON(message: KubernetesCluster): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.region !== undefined && (obj.region = message.region);
    message.version !== undefined && (obj.version = message.version);
    message.cluster_subnet !== undefined && (obj.cluster_subnet = message.cluster_subnet);
    message.service_subnet !== undefined && (obj.service_subnet = message.service_subnet);
    message.vpc_uuid !== undefined && (obj.vpc_uuid = message.vpc_uuid);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    if (message.node_pools) {
      obj.node_pools = message.node_pools.map((e) => e ? NodePool.toJSON(e) : undefined);
    } else {
      obj.node_pools = [];
    }
    message.maintenance_policy !== undefined && (obj.maintenance_policy = message.maintenance_policy
      ? KubernetesClusterMaintenancePolicy.toJSON(message.maintenance_policy)
      : undefined);
    message.auto_upgrade !== undefined && (obj.auto_upgrade = message.auto_upgrade);
    message.status !== undefined &&
      (obj.status = message.status ? KubernetesClusterStatus.toJSON(message.status) : undefined);
    message.created_at !== undefined && (obj.created_at = message.created_at);
    message.updated_at !== undefined && (obj.updated_at = message.updated_at);
    message.surge_upgrade !== undefined && (obj.surge_upgrade = message.surge_upgrade);
    message.registry_enabled !== undefined && (obj.registry_enabled = message.registry_enabled);
    message.ha !== undefined && (obj.ha = message.ha);
    return obj;
  },

  create(base?: DeepPartial<KubernetesCluster>): KubernetesCluster {
    return KubernetesCluster.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<KubernetesCluster>): KubernetesCluster {
    const message = createBaseKubernetesCluster();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.region = object.region ?? "";
    message.version = object.version ?? "";
    message.cluster_subnet = object.cluster_subnet ?? "";
    message.service_subnet = object.service_subnet ?? "";
    message.vpc_uuid = object.vpc_uuid ?? "";
    message.ipv4 = object.ipv4 ?? "";
    message.endpoint = object.endpoint ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.node_pools = object.node_pools?.map((e) => NodePool.fromPartial(e)) || [];
    message.maintenance_policy = (object.maintenance_policy !== undefined && object.maintenance_policy !== null)
      ? KubernetesClusterMaintenancePolicy.fromPartial(object.maintenance_policy)
      : undefined;
    message.auto_upgrade = object.auto_upgrade ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? KubernetesClusterStatus.fromPartial(object.status)
      : undefined;
    message.created_at = object.created_at ?? "";
    message.updated_at = object.updated_at ?? "";
    message.surge_upgrade = object.surge_upgrade ?? false;
    message.registry_enabled = object.registry_enabled ?? false;
    message.ha = object.ha ?? "";
    return message;
  },
};

function createBaseCreateKubernetesClusterResponse(): CreateKubernetesClusterResponse {
  return { kubernetes_cluster: undefined };
}

export const CreateKubernetesClusterResponse = {
  encode(message: CreateKubernetesClusterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kubernetes_cluster !== undefined) {
      KubernetesCluster.encode(message.kubernetes_cluster, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKubernetesClusterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKubernetesClusterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kubernetes_cluster = KubernetesCluster.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateKubernetesClusterResponse {
    return {
      kubernetes_cluster: isSet(object.kubernetes_cluster)
        ? KubernetesCluster.fromJSON(object.kubernetes_cluster)
        : undefined,
    };
  },

  toJSON(message: CreateKubernetesClusterResponse): unknown {
    const obj: any = {};
    message.kubernetes_cluster !== undefined && (obj.kubernetes_cluster = message.kubernetes_cluster
      ? KubernetesCluster.toJSON(message.kubernetes_cluster)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateKubernetesClusterResponse>): CreateKubernetesClusterResponse {
    return CreateKubernetesClusterResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateKubernetesClusterResponse>): CreateKubernetesClusterResponse {
    const message = createBaseCreateKubernetesClusterResponse();
    message.kubernetes_cluster = (object.kubernetes_cluster !== undefined && object.kubernetes_cluster !== null)
      ? KubernetesCluster.fromPartial(object.kubernetes_cluster)
      : undefined;
    return message;
  },
};

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
