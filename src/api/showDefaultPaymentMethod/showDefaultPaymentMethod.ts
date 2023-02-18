import { NotFoundError } from '@amanos1022/node-grpc-wrapper';
import stripe from '../../stripe';
import { ShowDefaultPaymentMethodResponse, ShowDefaultPaymentMethodRequest } from '../../tsProtoCodegen/billing';

const createSetupIntent = async ({ stripeCustomerId: customer }: ShowDefaultPaymentMethodRequest): Promise<ShowDefaultPaymentMethodResponse> => {
  // TODO: Permission check https://angelomanos.atlassian.net/browse/MIC-224
  const { data } = await stripe.paymentMethods.list({ customer });

  if (data.length === 0) {
    throw new NotFoundError('PaymentMethod', customer);
  }

  const { id: externalId, card: { brand, last4 } } = data[0];

  return {
    id: '',
    externalId,
    brand,
    last4
  };
};

export default createSetupIntent;
