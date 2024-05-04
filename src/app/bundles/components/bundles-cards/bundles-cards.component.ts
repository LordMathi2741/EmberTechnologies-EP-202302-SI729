import {Component, OnInit} from '@angular/core';
import {BundleCatchService} from "../../service/bundle-catch.service";
import {ProductCatchService} from "../../../shared/service/product-catch.service";
import {Bundle} from "../../model/bundle.entity";
import {Product} from "../../../shared/model/product.entity";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'bundles-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    NgOptimizedImage
  ],
  templateUrl: './bundles-cards.component.html',
  styleUrl: './bundles-cards.component.css'
})
export class BundlesCardsComponent implements OnInit {
  bundleData: any;
  productData: any;
  bundles: any[] = [];
  products: any[] = [];
  constructor(private bundleService:BundleCatchService, private productService: ProductCatchService) { }
  ngOnInit(): void {
    this.catchData();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data:any) => {
         data.forEach((product:any) => {
              this.productData = new Product(product.id, product.title, product.photoUrl, product.price, product.bundleId, product.rating);
              this.products.push(this.productData);
         });
    });
  }

  getSave(id:any){
    const totalUnitPrice = this.calculatePriceByProduct(id);
    const currentBundle = this.bundles.find((bundle:any) => bundle.id === id);
    return totalUnitPrice - currentBundle.price;
  }

  catchData(){
    this.getBundles();
    this.getProducts();
  }

  calculatePriceByProduct(id:any){
       const productFiltered = this.products.filter((product:any) => product.bundleId === id);
       return  productFiltered.reduce((acc:any, product:any) => acc + product.price, 0);
  }

  getBundles() {
     this.bundleService.getAllBundles().subscribe((data:any) => {
          data.forEach((bundle:any) => {
                this.bundleData = new Bundle(bundle.id, bundle.title, bundle.photoUrl, bundle.price, bundle.rating);
                this.bundles.push(this.bundleData);

          });
     });
  }


}
