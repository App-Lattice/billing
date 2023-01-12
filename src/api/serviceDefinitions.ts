import { ServiceDefinition } from '@amanos1022/node-grpc-wrapper';
import { APIDefinition } from '../tsProtoCodegen/billing';
import createSetupIntent from './createSetupIntent/createSetupIntent';

const serviceDefinitions: ServiceDefinition[] = [
  {
    definition: APIDefinition,
    service: { createSetupIntent }
  }
];

export default serviceDefinitions;
