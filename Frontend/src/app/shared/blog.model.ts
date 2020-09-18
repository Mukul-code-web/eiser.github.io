export class Blog {
    _id:number
    name:string;
    description:string;
    imageurl:string;
    date:number;
    month:string;
    category:string;
   
constructor(_id,name,description='',imageurl='',date,month,category){
      this._id=_id;
      this.name=name;
      this.description=description;
      this.imageurl=imageurl;
      this.date=date;
      this.month=month;
      this.category=category;
    }
}
