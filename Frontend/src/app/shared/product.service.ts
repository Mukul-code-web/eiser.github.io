import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
import {Billing} from './billing.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly baseURL = 'http://localhost:8080/cartlist';
  readonly baseURL1 = 'http://localhost:8080/billing';
  readonly baseURL2 = 'http://localhost:8080/coupons';
  
  

  selectedproducts:Product[];
  selectedBilling:Billing;
  Billing:Billing[];
  products:Product[]=[
    
    new Product(1,'Red women purses','Red solid purse clutch.1 main compartment with zip closure.1 inner zip closure, 1 mobile pouch.1 external pocket Has a wrist loop',900,'assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg',1100,1),
    new Product(2,'Mens denim jeans','Blue dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops',300,'assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg',400,1),
    new Product(3,'Men Smart Watch','The watch is integrated with Huamis proprietary BioTracker PPG biological tracking optical sensor, which can perform constant 24-hour high-precision heart-rate monitoring as well as a heart-rate interval monitoring during workouts, and warning if a much too high value is detected.',500,'assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg',800,1),
    new Product(4,'Latest men’s sneaker','A pair of round-toe white solid sneakers, has regular styling, lace-up detail,Synthetic upper,Cushioned footbed,Textured and patterned outsole,Warranty: 3 months,Warranty provided by brand/manufacturer',600,'assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg',788,1),
    new Product(5,'quartz hand watch','Display: Analogue,Movement: Quartz,Power source: Battery,Dial style: Solid round stainless steel dial,Features: Reset Time,Strap style: Black regular, silicone strap with a tang closure,Water resistance: 30 m,Comes in a Tommy Hilfiger case,Warranty: 2 years,Warranty provided by Brand Owner / Manufacturer',400,'assets/img/product/inspired-product/i5.jpg','assets/img/product/inspired-product/i5.jpg','assets/img/product/inspired-product/i5.jpg',788,1),
    new Product(6,'Nike latest sneaker','A pair of round-toe white & pink sneakers, has regular styling, lace-up detail Leather upper Cushioned footbed Textured and patterned outsole,Warranty: 6 months Warranty provided by brand/manufacturer',900,'assets/img/product/inspired-product/i6.jpg','assets/img/product/inspired-product/i6.jpg','assets/img/product/inspired-product/i6.jpg',2000,1),
    new Product(7,'women style purses','Orange solid clutch 2 main compartments with one twist closure & one with zip closure, 2 card holders',500,'assets/img/product/inspired-product/i7.jpg','assets/img/product/inspired-product/i7.jpg','assets/img/product/inspired-product/i7.jpg',700,1),
    new Product(8,'adidas sport shoe','A pair of parrot running shoes, has regular styling, lace-up detail Synthetic upper Cushioned footbed Textured and patterned outsole,Warranty: 3 months Warranty provided by brand/manufacture',900,'assets/img/product/inspired-product/i8.jpg','assets/img/product/inspired-product/i8.jpg','assets/img/product/inspired-product/i8.jpg',3000,1),
    new Product(9,'Men’s summer t-shirt','This is the product 9 description.The product is really kool!',900,'assets/img/product/new-product/new-product1.png','assets/img/product/new-product/new-product1.png','assets/img/product/new-product/new-product1.png',1700,1),
    
  ]

  menproduct:Product[]=[
    new Product(10,'Apple Coat Myeme','Maroon woollen solid overcoat,has a notched lapel collar,long sleeves,button closures,two pockets,attached lining Comes with a belt',3000,'assets/img/menproduct/Apple Coat Myeme.png','assets/img/menproduct/Apple Coat Myeme.png','assets/img/menproduct/Apple Coat Myeme.png',4000,1),
    new Product(11,'Bamboo Shirt','Navy blue solid knitted innerwear vest,has a round neck,sleeveless',400,'assets/img/menproduct/Bamboo Shirt.jpg','assets/img/menproduct/Bamboo Shirt.jpg','assets/img/menproduct/Bamboo Shirt.jpg',1000,1),
    new Product(12,'Brion Pant','Brown solid mid-rise trousers,button closure,and 5 pockets',2000,'assets/img/menproduct/Brion Pant.jpg','assets/img/menproduct/Brion Pant.jpg','assets/img/menproduct/Brion Pant.jpg',3000,1),
    new Product(13,'Buzz Jean JackJack','Blue solid men shirt,has a shirt collar,three-quarter sleeves,button closure,flared hem',1500,'assets/img/menproduct/Buzz Jean JackJack.png','assets/img/menproduct/Buzz Jean JackJack2.png','assets/img/menproduct/Buzz Jean JackJack3.png',2000,1),
    new Product(14,'Elkton Jacket','Brown solid jacket,has a hooded,4 pockets,zip closure,long sleeves,straight hem,and polycotton lining',2800,'assets/img/menproduct/Elkton Jacket.jpg','assets/img/menproduct/Elkton Jacket.jpg','assets/img/menproduct/Elkton Jacket.jpg',3000,1),
    new Product(15,'Flannel Shirt','Red and white checked casual shirt,has a spread collar,long sleeves,button placket,curved hem,and 1 patch pocket',999,'assets/img/menproduct/Flannel Shirt.jpg','assets/img/menproduct/Flannel Shirt.jpg','assets/img/menproduct/Flannel Shirt.jpg',1599,1),
    new Product(16,'Jumar Long Sleeve T','Navy blue and Charcoal grey striped T-shirt,has a round neck,and long sleeves',599,'assets/img/menproduct/Jumar Long Sleeve T.jpg','assets/img/menproduct/Jumar Long Sleeve T.jpg','assets/img/menproduct/Jumar Long Sleeve T.jpg',999,1),
    new Product(17,'Keltic T','Olive Brown printed T-shirt,has a round neck, short sleeves',300,'assets/img/menproduct/Keltic T.jpg','assets/img/menproduct/Keltic T.jpg','assets/img/menproduct/Keltic T.jpg',599,1),
    new Product(18,'Midas Shirt','Green and face striped casual shirt,has a spread collar, long sleeves,curved hem,two patch pocket',899,'assets/img/menproduct/Midas Shirt.jpg','assets/img/menproduct/Midas Shirt.jpg','assets/img/menproduct/Midas Shirt.jpg',1000,1),
    new Product(19,'Nemesis Knicker','Coffee Brown solid mid-rise regular shorts,has five pockets,a button closure,zip fly ',900,'assets/img/menproduct/Nemesis Knicker.jpg','assets/img/menproduct/Nemesis Knicker.jpg','assets/img/menproduct/Nemesis Knicker.jpg',1100,1),
    new Product(20,'OrA Midas Shirt','Orange and face striped casual shirt,has a spread collar,long sleeves,curved hem,two patch pocket',299,'assets/img/menproduct/OrA Midas Shirt.jpg','assets/img/menproduct/OrA Midas Shirt.jpg','assets/img/menproduct/OrA Midas Shirt.jpg',999,1),
    new Product(21,'Orrin Flannel Shirt','Blue checked casual shirt,has a spread collar,long sleeves,button placket,curved hem,and 1 flap pockets',799,'assets/img/menproduct/Orrin Flannel Shirt.jpg','assets/img/menproduct/Orrin Flannel Shirt.jpg','assets/img/menproduct/Orrin Flannel Shirt.jpg',999,1),
    new Product(22,'Palm JonesCo Hood','Yellow and White colourblocked T-shirt,has a hood, and long sleeves',1999,'assets/img/menproduct/Palm JonesCo Jacket.png','assets/img/menproduct/Palm JonesCo Jacket2.png','assets/img/menproduct/Palm JonesCo Jacket3.png',3999,1),
    new Product(23,'Scott Sport Painter T-Shirt','yellow and berry blue printed T-shirt,has a round neck,and short sleeves',980,'assets/img/menproduct/Scott Sport Painter T-Shirt.png','assets/img/menproduct/Scott Sport Painter T-Shirt.png','assets/img/menproduct/Scott Sport Painter T-Shirt.png',1100,1),
    new Product(24,'Shuffle Sweater for Teen','Grey solid pullover sweater,has a mock collar,long sleeves,and ribbed hem',1499,'assets/img/menproduct/Shuffle Sweater for Teen.png','assets/img/menproduct/Shuffle Sweater for Teen2.png','assets/img/menproduct/Shuffle Sweater for Teen3.png',2000,1),
    new Product(25,'Sportiva Swing Tee','Red, yellow and blue colourblocked T-shirt,has a round neck,half sleeves',900,'assets/img/menproduct/Sportiva Swing Tee.png','assets/img/menproduct/Sportiva Swing Tee.png','assets/img/menproduct/Sportiva Swing Tee.png',1100,1),
    new Product(26,'SxS Midas Shirt','Navy Blue and white checked casual shirt,has a button-down collar,long sleeves,button placket,and curved hem',499,'assets/img/menproduct/SxS Midas Shirt.jpg','assets/img/menproduct/SxS Midas Shirt.jpg','assets/img/menproduct/SxS Midas Shirt.jpg',1100,1),
    new Product(27,'Take a Hike','Yellow solid T-shirt,has a round neck,and short sleeves',699,'assets/img/menproduct/Take a Hike.jpg','assets/img/menproduct/Take a Hike.jpg','assets/img/menproduct/Take a Hike.jpg',999,1),
    new Product(28,'Men Grey Melange All-Over-Printed T-shirt','Pull over this snug tee to keep your style looking fresh.This grey melange shirt is the perfect note to strike with a pair of skinny jeans when youre looking for a simple night out at the bars.',454,'assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt.webp','assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt2','assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt3.webp',699,1),
    new Product(29,'Men Navy & White Striped Round Neck T-shirt','Navy blue and white striped T-shirt,has a round neck,short sleeves,1 pocket',539,'assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt.webp','assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt3.webp',899,1),
    new Product(30,'Men White Solid V-Neck T-shirt','White solid waist length T-shirt,has a V-neck,short sleeves',579,'assets/img/menproduct/Men White Solid V-Neck T-shirt.webp','assets/img/menproduct/Men White Solid V-Neck T-shirt2.webp','assets/img/menproduct/Men White Solid V-Neck T-shirt3.webp',1449,1),
    new Product(31,'Men Charcoal Grey & Maroon Striped Polo T-shirt','Soft, well-structured, and durable, youll definitely love being the proud owner of this Roadster T-shirt. When you are grabbing a quick meal with your friends, this charcoal piece looks great with slimmer pants and chukka boot.',399,'assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt.webp','assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt2.webp','assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt3.webp',799,1),
    new Product(32,'Men Grey Melange Self Design Round Neck T-shirt','Grey melange self-design T-shirt, has a round neck, long sleeves, 1 pocket',799,'assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt.webp','assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt2.webp','assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt3.webp',1299,1),
    new Product(33,'Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt','Mustard yellow and Coffee Brown printed T-shirt, has a round neck, and short sleeves',324,'assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt3.webp',499,1),
    new Product(34,'Men Blue & White Printed Polo Collar T-shirt','Blue and white printed T-shirt, has a polo collar, short sleeves, button closure',1299,'assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt.webp','assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt2.webp','assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt3.webp',2599,1),
    new Product(35,'Men White & Red Printed Round Neck T-shirt','White and red printed waist length T-shirt, has a round neck, short sleeves',359,'assets/img/menproduct/Men White & Red Printed Round Neck T-shirt.webp','assets/img/menproduct/Men White & Red Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men White & Red Printed Round Neck T-shirt3.webp',899,1),
    new Product(36,'Men Orange Solid Round Neck T-shirt With Printed Detailing','Orange solid T-shirt, has a round neck, printed detailing, and short sleeves',1199,'assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing.webp','assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing2.webp','assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing3.webp',2999,1),
    new Product(37,'Men White Slim Fit Printed Round Neck T-shirt','White printed T-shirt, has a round neck, and short sleeves',714,'assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt.webp','assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt3.webp',1299,1),
    new Product(38,'Men Navy Blue Striped Slim Fit Round Neck T-shirt','Navy blue and white striped T-shirt, has a round neck, and short sleeves',799,'assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt.webp','assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt3.webp',1299,1),
    new Product(39,'Men Grey Melange Printed Round Neck T-shirt','Grey Melange printed T-shirt, has a round neck, and short sleeves',674,'assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt3.webp',1499,1),
    new Product(40,'Men Navy Blue Printed Round Neck T-shirt','Navy blue printed T-shirt, has a round neck, short sleeves',1429,'assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt3.webp',2599,1),
    new Product(41,'Men Grey Melange Printed Round Neck T-shirtt','Grey Melange printed T-shirt, has a round neck, and short sleeves',1799,'assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt2.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt3.webp',2999,1),
  ]
  
  womenproduct:Product[]=[
    new Product(42,'Nightwear Top Shop','Red, white Striped knitted top with fringes, has a round neck, short sleeves, button closures',1000,'assets/img/womenproduct/Nightwear Top Shop.png','assets/img/womenproduct/Nightwear Top Shop.png','assets/img/womenproduct/Nightwear Top Shop.png',2000,1),
    new Product(43,'Bra Set Effects','Black and brown printed medium-coverage Everyday bra.bra Lightly Padded and Non-Wired cut and sew cups Multiway straps and back closure Back style: Styled Back,Feature: All Day Comfort',400,'assets/img/womenproduct/Bra Set Effects.png','assets/img/womenproduct/Bra Set Effects.png','assets/img/womenproduct/Bra Set Effects.png',1000,1),
    new Product(44,'Top Night Secret','Women tiered top and has shoulder straps with 3 set with different color',1500,'assets/img/womenproduct/Top Night Secret.png','assets/img/womenproduct/Top Night Secret2.png','assets/img/womenproduct/Top Night Secret3.png',2999,1),
    new Product(45,'Fiery Coral','Coral pink solid woven regular top with ruffle detail, has a tie-up neck, and short sleeves',1500,'assets/img/womenproduct/Fiery Coral.png','assets/img/womenproduct/Fiery Coral2.png','assets/img/womenproduct/Fiery Coral3.png',2000,1),
    new Product(46,'Sport Night Wear','Light green solid knitted innerwear vest, has shoulder straps Engineered with flexfit technology',1000,'assets/img/womenproduct/Sport Night Wear.png','assets/img/womenproduct/Sport Night Wear2.png','assets/img/womenproduct/Sport Night Wear3.png',2000,1),
    new Product(47,'Cecilia Knicker','Dark red solid women mid-rise regular shorts, has two pockets, a button closure, zip fly ',999,'assets/img/womenproduct/Cecilia Knicker.jpg','assets/img/womenproduct/Cecilia Knicker.jpg','assets/img/womenproduct/Cecilia Knicker.jpg',1599,1),
    new Product(48,'Eden Jacket','Black reversible solid varsity jacket , has a stand collar, two pockets, snap button closure, long sleeves, straight hem, polyester lining Black solid varsity jacket, has a stand collar, two pockets, snap button closure, long sleeves, straight hem, polyester lining',999,'assets/img/womenproduct/Eden Jacket.jpg','assets/img/womenproduct/Eden Jacket.jpg','assets/img/womenproduct/Eden Jacket.jpg',1999,1),
    new Product(49,'Lucia Sweater','Navy blue pullover sweater, has a turtle neck, full sleeves, and straight hem',1200,'assets/img/womenproduct/Lucia Sweater.jpg','assets/img/womenproduct/Lucia Sweater.jpg','assets/img/womenproduct/Lucia Sweater.jpg',2000,1),
    new Product(50,'Riley Women Shirt','Green and navy blue checked casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',899,'assets/img/womenproduct/Riley Woven Shirt.jpg','assets/img/womenproduct/Riley Woven Shirt.jpg','assets/img/womenproduct/Riley Woven Shirt.jpg',1000,1),
    new Product(51,'Amaya Dress','Pink Printed solid knitted A-line dress with accordion pleats, has shoulder straps, concealed zip closure, an attached lining, and flared hem Comes with a belt',900,'assets/img/womenproduct/Amaya Dress.jpg','assets/img/womenproduct/Amaya Dress.jpg','assets/img/womenproduct/Amaya Dress.jpg',1100,1),
    new Product(52,'Nenah Sweater','Green solid pullover sweater, has a turtle neck, full sleeves, and straight hem',499,'assets/img/womenproduct/Nenah Sweater.jpg','assets/img/womenproduct/Nenah Sweater.jpg','assets/img/womenproduct/Nenah Sweater.jpg',999,1),
    new Product(53,'Maura Vest','Dont want the winter breeze to play spoilsport with your workouts- zip up the HRX Womens Active Sweatshirt. Its got a hood to keep you cozy, a sporty design and pockets- what more could you need...',799,'assets/img/womenproduct/Maura Vest.jpg','assets/img/womenproduct/Maura Vest.jpg','assets/img/womenproduct/Maura Vest.jpg',999,1),
    new Product(54,'Kari Jacket','Cream solid jacket, has a lapel collar, 2 pockets, zip closure, long sleeves, straight hem, and synthetic',1999,'assets/img/womenproduct/Kari Jacket.jpg','assets/img/womenproduct/Kari Jacket.jpg','assets/img/womenproduct/Kari Jacket.jpg',3999,1),
    new Product(55,'Bliss Knicker','Cream women mid-rise regular shorts, has two pockets, a button closure, zip fly ',980,'assets/img/womenproduct/Bliss Knicker.jpg','assets/img/womenproduct/Bliss Knicker.jpg','assets/img/womenproduct/Bliss Knicker.jpg',1100,1),
    new Product(56,'Leather Hi-top sneakers','Bring some cool style to your weekend look with these tan sneakers for men from DC. The leather upper makes these lace-ups high on quality and durability, while the rubber outsole assures a good grip. Featuring a contrast patch, these sneakers will complement most of your jeans and shorts.',1499,'assets/img/womenproduct/Leather Hi-top sneakers.jpg','assets/img/womenproduct/Leather Hi-top sneakers2.jpg','assets/img/womenproduct/Leather Hi-top sneakers3.jpg',2000,1),
  ]
 

  jacketproduct:Product[]=[
    new Product(13,'Buzz Jean JackJack','Blue solid men shirt,has a shirt collar,three-quarter sleeves,button closure,flared hem',1500,'assets/img/jacketproduct/Buzz Jean JackJack.png','assets/img/jacketproduct/Buzz Jean JackJack2.png','assets/img/jacketproduct/Buzz Jean JackJack3.png',2000,1),
    new Product(22,'Palm JonesCo Hood','Yellow and White colourblocked T-shirt,has a hood, and long sleeves',1999,'assets/img/jacketproduct/Palm JonesCo Jacket.png','assets/img/jacketproduct/Palm JonesCo Jacket2.png','assets/img/jacketproduct/Palm JonesCo Jacket3.png',3999,1),
    new Product(48,'Eden Jacket','Black reversible solid varsity jacket , has a stand collar, two pockets, snap button closure, long sleeves, straight hem, polyester lining Black solid varsity jacket, has a stand collar, two pockets, snap button closure, long sleeves, straight hem, polyester lining',999,'assets/img/jacketproduct/Eden Jacket.jpg','assets/img/jacketproduct/Eden Jacket.jpg','assets/img/jacketproduct/Eden Jacket.jpg',1999,1),
    new Product(53,'Maura Vest','Dont want the winter breeze to play spoilsport with your workouts- zip up the HRX Womens Active Sweatshirt. Its got a hood to keep you cozy, a sporty design and pockets- what more could you need...',799,'assets/img/jacketproduct/Maura Vest.jpg','assets/img/jacketproduct/Maura Vest.jpg','assets/img/jacketproduct/Maura Vest.jpg',999,1),
    new Product(54,'Kari Jacket','Cream solid jacket, has a lapel collar, 2 pockets, zip closure, long sleeves, straight hem, and synthetic',1999,'assets/img/jacketproduct/Kari Jacket.jpg','assets/img/jacketproduct/Kari Jacket.jpg','assets/img/jacketproduct/Kari Jacket.jpg',3999,1),
    new Product(14,'Elkton Jacket','Brown solid jacket,has a hooded,4 pockets,zip closure,long sleeves,straight hem,and polycotton lining',2800,'assets/img/jacketproduct/Elkton Jacket.jpg','assets/img/jacketproduct/Elkton Jacket.jpg','assets/img/jacketproduct/Elkton Jacket.jpg',3000,1),
  ]

  nightwearproduct:Product[]=[
    new Product(42,'Nightwear Top Shop','Red, white Striped knitted top with fringes, has a round neck, short sleeves, button closures',1000,'assets/img/nightwearproduct/Nightwear Top Shop.png','assets/img/nightwearproduct/Nightwear Top Shop.png','assets/img/nightwearproduct/Nightwear Top Shop.png',2000,1),
    new Product(44,'Top Night Secret','Women tiered top and has shoulder straps with 3 set with different color',1500,'assets/img/nightwearproduct/Top Night Secret.png','assets/img/nightwearproduct/Top Night Secret2.png','assets/img/nightwearproduct/Top Night Secret3.png',2999,1),
    new Product(45,'Fiery Coral','Coral pink solid woven regular top with ruffle detail, has a tie-up neck, and short sleeves',1500,'assets/img/nightwearproduct/Fiery Coral.png','assets/img/nightwearproduct/Fiery Coral2.png','assets/img/nightwearproduct/Fiery Coral3.png',2000,1),
    new Product(46,'Sport Night Wear','Light green solid knitted innerwear vest, has shoulder straps Engineered with flexfit technology',1000,'assets/img/nightwearproduct/Sport Night Wear.png','assets/img/nightwearproduct/Sport Night Wear2.png','assets/img/nightwearproduct/Sport Night Wear3.png',2000,1),
  ]

  pantsproduct:Product[]=[
    new Product(47,'Cecilia Knicker','Dark red solid women mid-rise regular shorts, has two pockets, a button closure, zip fly ',999,'assets/img/pantsproduct/Cecilia Knicker.jpg','assets/img/pantsproduct/Cecilia Knicker.jpg','assets/img/pantsproduct/Cecilia Knicker.jpg',1599,1),
    new Product(55,'Bliss Knicker','Cream women mid-rise regular shorts, has two pockets, a button closure, zip fly ',980,'assets/img/pantsproduct/Bliss Knicker.jpg','assets/img/pantsproduct/Bliss Knicker.jpg','assets/img/pantsproduct/Bliss Knicker.jpg',1100,1),
    new Product(12,'Brion Pant','Brown solid mid-rise trousers,button closure,and 5 pockets',2000,'assets/img/pantsproduct/Brion Pant.jpg','assets/img/pantsproduct/Brion Pant.jpg','assets/img/pantsproduct/Brion Pant.jpg',3000,1),
    new Product(19,'Nemesis Knicker','Coffee Brown solid mid-rise regular shorts,has five pockets,a button closure,zip fly ',900,'assets/img/pantsproduct/Nemesis Knicker.jpg','assets/img/pantsproduct/Nemesis Knicker.jpg','assets/img/pantsproduct/Nemesis Knicker.jpg',1100,1),
  ]

  coatssproduct:Product[]=[
    new Product(24,'Shuffle Sweater for Teen','Grey solid pullover sweater,has a mock collar,long sleeves,and ribbed hem',1499,'assets/img/coatsproduct/Shuffle Sweater for Teen.png','assets/img/coatsproduct/Shuffle Sweater for Teen2.png','assets/img/coatsproduct/Shuffle Sweater for Teen3.png',2000,1),
    new Product(10,'Apple Coat Myeme','Maroon woollen solid overcoat,has a notched lapel collar,long sleeves,button closures,two pockets,attached lining Comes with a belt',3000,'assets/img/coatsproduct/Apple Coat Myeme.png','assets/img/coatsproduct/Apple Coat Myeme.png','assets/img/coatsproduct/Apple Coat Myeme.png',4000,1),
    new Product(52,'Nenah Sweater','Green solid pullover sweater, has a turtle neck, full sleeves, and straight hem',499,'assets/img/coatsproduct/Nenah Sweater.jpg','assets/img/coatsproduct/Nenah Sweater.jpg','assets/img/coatsproduct/Nenah Sweater.jpg',999,1),
  ]

  home1product:Product[]=[
    
    new Product(1,'Red women purses','Red solid purse clutch.1 main compartment with zip closure.1 inner zip closure, 1 mobile pouch.1 external pocket Has a wrist loop',900,'assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg',1100,1),
    new Product(2,'Mens denim jeans','Blue dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops',300,'assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg',400,1),
    new Product(3,'Men Smart Watch','The watch is integrated with Huamis proprietary BioTracker PPG biological tracking optical sensor, which can perform constant 24-hour high-precision heart-rate monitoring as well as a heart-rate interval monitoring during workouts, and warning if a much too high value is detected.',500,'assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg',800,1),
    new Product(4,'Latest men’s sneaker','A pair of round-toe white solid sneakers, has regular styling, lace-up detail,Synthetic upper,Cushioned footbed,Textured and patterned outsole,Warranty: 3 months,Warranty provided by brand/manufacturer',600,'assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg',788,1),
    new Product(5,'quartz hand watch','Display: Analogue,Movement: Quartz,Power source: Battery,Dial style: Solid round stainless steel dial,Features: Reset Time,Strap style: Black regular, silicone strap with a tang closure,Water resistance: 30 m,Comes in a Tommy Hilfiger case,Warranty: 2 years,Warranty provided by Brand Owner / Manufacturer',400,'assets/img/product/inspired-product/i5.jpg','assets/img/product/inspired-product/i5.jpg','assets/img/product/inspired-product/i5.jpg',788,1),
    new Product(6,'Nike latest sneaker','A pair of round-toe white & pink sneakers, has regular styling, lace-up detail Leather upper Cushioned footbed Textured and patterned outsole,Warranty: 6 months Warranty provided by brand/manufacturer',900,'assets/img/product/inspired-product/i6.jpg','assets/img/product/inspired-product/i6.jpg','assets/img/product/inspired-product/i6.jpg',2000,1),
    new Product(7,'women style purses','Orange solid clutch 2 main compartments with one twist closure & one with zip closure, 2 card holders',500,'assets/img/product/inspired-product/i7.jpg','assets/img/product/inspired-product/i7.jpg','assets/img/product/inspired-product/i7.jpg',700,1),
    new Product(8,'adidas sport shoe','A pair of parrot running shoes, has regular styling, lace-up detail Synthetic upper Cushioned footbed Textured and patterned outsole,Warranty: 3 months Warranty provided by brand/manufacture',900,'assets/img/product/inspired-product/i8.jpg','assets/img/product/inspired-product/i8.jpg','assets/img/product/inspired-product/i8.jpg',3000,1),
  ]

  home2product:Product[]=[
    new Product(26,'SxS Midas Shirt','Navy Blue and white checked casual shirt,has a button-down collar,long sleeves,button placket,and curved hem',499,'assets/img/menproduct/SxS Midas Shirt.jpg','assets/img/menproduct/SxS Midas Shirt.jpg','assets/img/menproduct/SxS Midas Shirt.jpg',1100,1),
    new Product(27,'Take a Hike','Yellow solid T-shirt,has a round neck,and short sleeves',699,'assets/img/menproduct/Take a Hike.jpg','assets/img/menproduct/Take a Hike.jpg','assets/img/menproduct/Take a Hike.jpg',999,1),
    new Product(14,'Elkton Jacket','Brown solid jacket,has a hooded,4 pockets,zip closure,long sleeves,straight hem,and polycotton lining',2800,'assets/img/jacketproduct/Elkton Jacket.jpg','assets/img/jacketproduct/Elkton Jacket.jpg','assets/img/jacketproduct/Elkton Jacket.jpg',3000,1),
    
  ]

  home3product:Product[]=[
    new Product(1,'Red women purses','Red solid purse clutch.1 main compartment with zip closure.1 inner zip closure, 1 mobile pouch.1 external pocket Has a wrist loop',900,'assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg','assets/img/product/inspired-product/i1.jpg',1100,1),
    new Product(2,'Mens denim jeans','Blue dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops',300,'assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg','assets/img/product/inspired-product/i2.jpg',400,1),
    new Product(3,'Men Smart Watch','The watch is integrated with Huamis proprietary BioTracker PPG biological tracking optical sensor, which can perform constant 24-hour high-precision heart-rate monitoring as well as a heart-rate interval monitoring during workouts, and warning if a much too high value is detected.',500,'assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg','assets/img/product/inspired-product/i3.jpg',800,1),
    new Product(4,'Latest men’s sneaker','A pair of round-toe white solid sneakers, has regular styling, lace-up detail,Synthetic upper,Cushioned footbed,Textured and patterned outsole,Warranty: 3 months,Warranty provided by brand/manufacturer',600,'assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg','assets/img/product/inspired-product/i4.jpg',788,1),
  ]

  mentshirtcollectionproduct:Product[]=[
    new Product(28,'Men Grey Melange All-Over-Printed T-shirt','Pull over this snug tee to keep your style looking fresh. This grey melange shirt is the perfect note to strike with a pair of skinny jeans when youre looking for a simple night out at the bars.',454,'assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt.webp','assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt2','assets/img/menproduct/Men Grey Melange All-Over-Printed T-shirt3.webp',699,1),
    new Product(29,'Men Navy & White Striped Round Neck T-shirt','Navy blue and white striped T-shirt, has a round neck, short sleeves, 1 pocket',539,'assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt.webp','assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy & White Striped Round Neck T-shirt3.webp',899,1),
    new Product(30,'Men White Solid V-Neck T-shirt','White solid waist length T-shirt, has a V-neck, short sleeves',579,'assets/img/menproduct/Men White Solid V-Neck T-shirt.webp','assets/img/menproduct/Men White Solid V-Neck T-shirt2.webp','assets/img/menproduct/Men White Solid V-Neck T-shirt3.webp',1449,1),
    new Product(31,'Men Charcoal Grey & Maroon Striped Polo T-shirt','Soft, well-structured, and durable, youll definitely love being the proud owner of this Roadster T-shirt. When you are grabbing a quick meal with your friends, this charcoal piece looks great with slimmer pants and chukka boot.',399,'assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt.webp','assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt2.webp','assets/img/menproduct/Men Charcoal Grey & Maroon Striped Polo T-shirt3.webp',799,1),
    new Product(32,'Men Grey Melange Self Design Round Neck T-shirt','Grey melange self-design T-shirt, has a round neck, long sleeves, 1 pocket',799,'assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt.webp','assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt2.webp','assets/img/menproduct/Men Grey Melange Self Design Round Neck T-shirt3.webp',1299,1),
    new Product(33,'Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt','Mustard yellow and Coffee Brown printed T-shirt, has a round neck, and short sleeves',324,'assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Mustard Yellow & Coffee Brown Printed Round Neck T-shirt3.webp',499,1),
    new Product(34,'Men Blue & White Printed Polo Collar T-shirt','Blue and white printed T-shirt, has a polo collar, short sleeves, button closure',1299,'assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt.webp','assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt2.webp','assets/img/menproduct/Men Blue & White Printed Polo Collar T-shirt3.webp',2599,1),
    new Product(35,'Men White & Red Printed Round Neck T-shirt','White and red printed waist length T-shirt, has a round neck, short sleeves',359,'assets/img/menproduct/Men White & Red Printed Round Neck T-shirt.webp','assets/img/menproduct/Men White & Red Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men White & Red Printed Round Neck T-shirt3.webp',899,1),
    new Product(36,'Men Orange Solid Round Neck T-shirt With Printed Detailing','Orange solid T-shirt, has a round neck, printed detailing, and short sleeves',1199,'assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing.webp','assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing2.webp','assets/img/menproduct/Men Orange Solid Round Neck T-shirt With Printed Detailing3.webp',2999,1),
    new Product(37,'Men White Slim Fit Printed Round Neck T-shirt','White printed T-shirt, has a round neck, and short sleeves',714,'assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt.webp','assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men White Slim Fit Printed Round Neck T-shirt3.webp',1299,1),
    new Product(38,'Men Navy Blue Striped Slim Fit Round Neck T-shirt','Navy blue and white striped T-shirt, has a round neck, and short sleeves',799,'assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt.webp','assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy Blue Striped Slim Fit Round Neck T-shirt3.webp',1299,1),
    new Product(39,'Men Grey Melange Printed Round Neck T-shirt','Grey Melange printed T-shirt, has a round neck, and short sleeves',674,'assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirt3.webp',1499,1),
    new Product(40,'Men Navy Blue Printed Round Neck T-shirt','Navy blue printed T-shirt, has a round neck, short sleeves',1429,'assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt.webp','assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt2.webp','assets/img/menproduct/Men Navy Blue Printed Round Neck T-shirt3.webp',2599,1),
    new Product(41,'Men Grey Melange Printed Round Neck T-shirtt','Grey Melange printed T-shirt, has a round neck, and short sleeves',1799,'assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt2.webp','assets/img/menproduct/Men Grey Melange Printed Round Neck T-shirtt3.webp',2999,1),
  ]

  CouponProduct:Product[]=[
    new Product(57,'Grocery Savings Pass - 3 Months','Program Details: - Buy the 3 Month Pass & start availing benefits from the upcoming month - Discount is applicable from 1st of next month - Discount of Rs.100 applies automatically on the first Grocery purchase of the month for Rs.1,000 or above (excluding Infant milk substitutes, feeding bottles, baby cereals and other infant foods) - Discount is applicable only once per month Please refer to Terms & Conditions of the offer in the order confirmation email received upon purchase of the Savings Pass.',11,'assets/img/product/inspired-product/i10.jpeg','assets/img/product/inspired-product/i10.jpeg','assets/img/product/inspired-product/i10.jpeg',119,1),
  ]

  constructor(private http:HttpClient) { }

  getmenproducts():Product[]{
    return this.menproduct;
  }

  getwomenproducts():Product[]{
    return this.womenproduct;
  }

  getjacketproducts():Product[]{
    return this.jacketproduct;
  }

  getnightwearproducts():Product[]{
    return this.nightwearproduct;
  }

  getpantsproducts():Product[]{
    return this.pantsproduct;
  }

  getcoatsproducts():Product[]{
    return this. coatssproduct;
  }

  gethome1products():Product[]{
    return this.home1product;
  }

  gethome2products():Product[]{
    return this.home2product;
  }

  gethome3products():Product[]{
    return this.home3product;
  }

  getmentshirtproducts():Product[]{
    return this.mentshirtcollectionproduct;
  }

  getcouponproduct():Product[]{
    return this.CouponProduct;
  }


  getproducts():Product[]{
    return this.products;
  }

postcartdata(product:Product){
  return this.http.post(this.baseURL,product);
 
}


getcartdata(){
  return this.http.get(this.baseURL);
}

getcartdatadetails(_id:number){
return this.http.get(this.baseURL+  `/${_id}`);
}

deletecartitem(_id:number){
  return this.http.delete(this.baseURL + `/${_id}`);
}

updatecartdata(_id:number,emp:Product){
  return this.http.put(this.baseURL + `/${_id}`,emp);
}

postbilling(billing:Billing){
  return this.http.post(this.baseURL1,billing);
}

getbillingList(){
  return this.http.get(this.baseURL1);
}

postcoupondata(product:Product){
  return this.http.post(this.baseURL,product);
}

getcoupondata(){
  return this.http.get(this.baseURL);
}
}




