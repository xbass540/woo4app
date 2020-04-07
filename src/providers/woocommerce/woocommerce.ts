import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {

WooCommerce:any;

  constructor() {
    this.WooCommerce = WC ({

      url:"https://woocommerce-251774-1115146.cloudwaysapps.com",
      consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
      consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"

  });  }


  init(){
    return this.WooCommerce;
  }

}
