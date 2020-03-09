import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import {ProductDetailsPage} from '../product-details/product-details';

@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {

  WooCommerce:any;
  products:any[];
  page:number;
  category:any;
  moreProducts: any[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {


  this.page=1;
  this.category=this.navParams.get("category");

    this.WooCommerce = WC ({

      url:"https://woocommerce-251774-1115146.cloudwaysapps.com",
      consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
      consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"

  });

  this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then( (data) => {
    console.log(JSON.parse(data.body));
    this.products=JSON.parse(data.body).products;
        },
        (err) => {

          console.log(err);
        })



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }

/////////////////////////////////

loadMoreProducts(event) {
  this.page++;
  console.log("Getting page " + this.page);
  this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then((data) => {
    let temp = (JSON.parse(data.body).products);

    this.products = this.products.concat(JSON.parse(data.body).products)
    console.log(this.products);
    event.complete();

    if (temp.length < 10)
      event.enable(false);

      this.toastCtrl.create({
        message: "No more products!",
        duration:5000
  
      }).present();


  })
}

openProductPage(product){
  this.navCtrl.push(ProductDetailsPage, {"product":product});
}

}
