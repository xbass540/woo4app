import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import {ProductDetailsPage} from '../product-details/product-details';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private WP:WoocommerceProvider) {


  this.page=1;
  this.category=this.navParams.get("category");

  this.WooCommerce=WP.init();


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
