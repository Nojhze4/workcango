declare global {
  interface Window { Stripe: any }
}

import { environment } from '../environment/environment';

export class StripeClient {
  private static instance: any;


}
