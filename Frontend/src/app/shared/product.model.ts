export class Product {
    _id:number
    name:string;
    description:string;
    price:number;
    imageurl:string;
    imageurl2:string;
    imageurl3:string;
    dprice:number;
    qty:number;
    address:string;
    paymentmethod:string;
   
constructor(_id,name,description='',price=0,imageurl='',imageurl2='',imageurl3='',dprice=0,qty=1){
      this._id=_id;
      this.name=name;
      this.description=description;
      this.price=price;
      this.imageurl=imageurl;
      this.imageurl2=imageurl2;
      this.imageurl3=imageurl3; 
      this.dprice=dprice;
      this.qty=qty;
    }
}
