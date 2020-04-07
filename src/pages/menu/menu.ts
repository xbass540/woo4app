import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import * as WC from 'woocommerce-api';
import {ProductsByCategoryPage} from '../products-by-category/products-by-category';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
 /**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage: any;
  WooCommerce: any;
  categories:any[];
  @ViewChild('content') childNavCtrl: NavController;
  loggedIn: boolean;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, private WP:WoocommerceProvider) {

    this.homePage= HomePage

    this.categories=[];
 
    this.WooCommerce=WP.init();

  this.WooCommerce.getAsync("products/categories").then((data) => {
    console.log(JSON.parse(data.body).product_categories);

    let temp:any[]= JSON.parse(data.body).product_categories;

    for(let i=0;i<temp.length;i++){
      if(temp[i].slug == 'advanced-styling' || temp[i].slug== 'belly-basic' || temp[i].slug== 'belly-intermediate-classes' || temp[i].slug== 'express-pass' || temp[i].slug== 'multi-pass' || temp[i].slug== 'single-taster'){
          this.categories.push(temp[i]);
          console.log(temp[i]);

          if(temp[i].slug=='advanced-styling')
            {
              temp[i].icon="jet";
            }
            if(temp[i].slug=='belly-basic')
            {
              temp[i].icon="walk";
            }
            if(temp[i].slug=='belly-intermediate-classes')
            {
              temp[i].icon="bicycle";
            }
            if(temp[i].slug=='express-pass')
            {
              temp[i].icon="umbrella";
            }
            if(temp[i].slug=='multi-pass')
            {
              temp[i].icon="albums";
            }
            if(temp[i].slug=='single-taster')
            {
              temp[i].icon="checkmark";
            }
      }
  }





  }, (err) => {
    console.log(err)
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  //check if a user is logged in
  ionViewDidEnter() {
    
    this.storage.ready().then( () => {
      this.storage.get("userLoginInfo").then( (userLoginInfo) => {

        if(userLoginInfo != null){

          console.log("User logged in...");
          this.user = userLoginInfo.user;
          console.log(this.user);
          this.loggedIn = true;
        }
        else {
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }

      })
    })


  }


//opens category page of a specific category 
  openCategoryPage(category){
    this.childNavCtrl.setRoot(ProductsByCategoryPage,{"category":category});
  }



  openPage(pageName: string){
    if(pageName == "signup"){
      this.navCtrl.push(SignupPage);
    }
    if(pageName == "login"){
      this.navCtrl.push(LoginPage);
    }
    if(pageName == 'logout'){
      this.storage.remove("userLoginInfo").then( () => {
        this.user = {};
        this.loggedIn = false;
      })
    }
    if(pageName == 'cart'){
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }

  

  }

}
