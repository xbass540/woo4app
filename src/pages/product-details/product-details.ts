import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as WC from 'woocommerce-api';


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  product:any;
  WooCommerce: any;
  reviews: any[]=[];
  toastCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.WooCommerce = WC ({

      url:"https://woocommerce-251774-1115146.cloudwaysapps.com",
      consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
      consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"

  });

  this.product = this.navParams.get("product");
  console.log(this.product);

  this.WooCommerce.getAsync('products/'+this.product.id+'/reviews').then((data) => {
    this.reviews= JSON.parse(data.body).product_reviews;
    console.log(this.reviews);
  }, (err) => {
    console.log(err);
  })

   

  }

  

  

}