import { ServiceDefinition } from '@amanos1022/node-grpc-wrapper';
import { APIDefinition } from '../tsProtoCodegen/billing';
import createSetupIntent from './createSetupIntent/createSetupIntent';
import showDefaultPaymentMethod from './showDefaultPaymentMethod/showDefaultPaymentMethod';

const serviceDefinitions: ServiceDefinition[] = [
  {
    definition: APIDefinition,
    service: {
      createSetupIntent,
      showDefaultPaymentMethod,
    },
  },
];

export default serviceDefinitions;
