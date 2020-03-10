import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,ModalController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  product:any;
  WooCommerce: any;
  reviews: any[]=[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController,  public modalCtrl:ModalController) {

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

  
  addToCart(product) {

    this.storage.get("cart").then((data) => {
    
      if (data == null || data.length==0){
        data= [];
        data.push({
          "product":product,
          "qty": 1,
          "amount": parseFloat(product.price)
        });
      }else{
        
        let added=0;
        for(let i=0 ;i < data.lentgh;i++){
          if(product.id== data[i].product.id){
            console.log("Product already in the cart");
            let qty=data[i].qty;
            data[qty]=qty+1;
            data[i].amount=parseFloat(data[i].amount)+parseFloat(data[i].product.price);
            added=1;
          }
        }
        if(added==0){
          data.push({
            "product":product,
            "qty": 1,
            "amount": parseFloat(product.price)
          });
        }
      }

      this.storage.set("cart", data).then (()=>{

          console.log("Cart updated");
          console.log(data);
          this.toastCtrl.create({
            message: "Cart Updated",
            duration: 3000
          }).present();
      })
    
    });
  
    }


openCart(){
  this.modalCtrl.create(CartPage).present();
}


}