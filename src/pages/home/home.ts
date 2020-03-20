import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { ProductDetailsPage } from '../product-details/product-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerce:any;
  products:any[];
  page:number;
  moreProducts: any[];

  @ViewChild('productSlides') productSlides:Slides;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.page=1;

    this.WooCommerce = WC ({

        url:"https://woocommerce-251774-1115146.cloudwaysapps.com",
        consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
        consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"

    });

    this.loadMoreProducts(null);


    this.WooCommerce.getAsync("products").then( (data) => {
        console.log(JSON.parse(data.body));
        this.products=JSON.parse(data.body).products;
            },
            (err) => {

              console.log(err);
            })

  }

  ionViewDidLoad(){
    setInterval(() => {
    if(this.productSlides.getActiveIndex() == this.productSlides.length()-1)
    this.productSlides.slideTo(0);
    this.productSlides.slideNext();  
    },3000)
  }


loadMoreProducts(event){

  if(event==null){
    this.page=2;
    this.moreProducts=[];
  }
  else
  this.page++;

  this.WooCommerce.getAsync("products?page="+ this.page).then( (data) => {
    console.log(JSON.parse(data.body));
    this.moreProducts=this.moreProducts.concat(JSON.parse(data.body).products);

    if (event != null)
    {
      event.complete();
    }

    if(JSON.parse(data.body).products.length < 10){
      event.enable(false);
    
    this.toastCtrl.create({
      message: "No more products!",
      duration:5000

    }).present();
    
    }


              },
        (err) => {
 
          console.log(err);
        })

}

openProductPage(product){
  this.navCtrl.push(ProductDetailsPage, {"product":product});
}


} 
