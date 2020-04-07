import { Component } from '@angular/core';
import { NavController, NavParams,  ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import {ProductDetailsPage} from '../product-details/product-details';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private WP:WoocommerceProvider) {
    console.log(this.navParams.get("searchQuery"));

    this.searchQuery = this.navParams.get("searchQuery");

    this.WooCommerce=WP.init();


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
