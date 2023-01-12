import { startServer } from '@amanos1022/node-grpc-wrapper';
import restServer from '@amanos1022/rest-server';
import './consumers/init';
import serviceDefinitions from './api/serviceDefinitions';

startServer(serviceDefinitions, `${__dirname}/../descriptor_set.bin`);
restServer([]).start();
