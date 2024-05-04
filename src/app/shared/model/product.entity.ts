export class Product {
  id:any;
  title:any;
  photoUrl:any;
  price:any;
  bundleId:any;
  rating:any;
  constructor(id:any, title:any, photoUrl:any, price:any, bundleId:any, rating:any) {
    this.id = id;
    this.title = title;
    this.photoUrl = photoUrl;
    this.price = price;
    this.bundleId = bundleId;
    this.rating = rating;
  }

  get getBundleId() {
    return this.bundleId;
  }

  get getId() {
    return this.id;
  }

  get getPrice() {
    return this.price;
  }

}
