import { Component } from '@angular/core';
import { NavController, NavParams,  ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import {ProductDetailsPage} from '../product-details/product-details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  WooCommerce:any;
  searchQuery: string = "";
  products:any[];
  page:number=2;
  moreProducts: any[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    console.log(this.navParams.get("searchQuery"));

    this.searchQuery = this.navParams.get("searchQuery");

    this.WooCommerce = WC({
      url:"https://woocommerce-251774-1115146.cloudwaysapps.com",
      consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
      consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
    });

    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery).then((searchData) => {
      this.products = JSON.parse(searchData.body).products;
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  loadMoreProducts(event){

    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery + "&page=" + this.page).then((searchData) => {
      this.products = this.products.concat(JSON.parse(searchData.body).products);

      if(JSON.parse(searchData.body).products.length < 10){
        event.enable(false);

        this.toastCtrl.create({
          message: "No more products!",
          duration: 5000
        }).present();

      }

      event.complete();
      this.page ++;

    });
  }


  openProductPage(product){
    this.navCtrl.push(ProductDetailsPage, {"product":product});
  }

}
