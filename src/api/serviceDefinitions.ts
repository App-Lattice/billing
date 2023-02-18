import { ServiceDefinition } from '@amanos1022/node-grpc-wrapper';
import { APIDefinition } from '../tsProtoCodegen/billing';
import createSetupIntent from './createSetupIntent/createSetupIntent';
import getDefaultPaymentMethod from './getDefaultPaymentMethod/getDefaultPaymentMethod';

const serviceDefinitions: ServiceDefinition[] = [
  {
    definition: APIDefinition,
    service: {
      createSetupIntent,
      getDefaultPaymentMethod,
    },
  },
];

export default serviceDefinitions;
