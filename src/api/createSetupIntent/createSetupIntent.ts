import stripe from '../../stripe';
import { CreateSetupIntentRequest, ShowSetupIntentResponse } from '../../tsProtoCodegen/billing';


const createSetupIntent = async ({ stripeCustomerId: customer }: CreateSetupIntentRequest): Promise<ShowSetupIntentResponse> => {
  // TODO: Permission check https://angelomanos.atlassian.net/browse/MIC-224
  const { client_secret: clientSecret } = await stripe.setupIntents.create({
    payment_method_types: ['card'],
    customer,
  });

  const paymentMethods = await stripe.paymentMethods.list({ customer });

  return {
    clientSecret,
    hasPaymentMethod: paymentMethods.data.length > 0
  };
};

export default createSetupIntent;
