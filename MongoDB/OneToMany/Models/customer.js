const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(()=> console.log("Connection successful"))
    .catch((err) => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
      }
      
      
      const orderSchema = new Schema({
        item: String,
        price: Number,
      });

      const customerSchema = new Schema({
        name : String,
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
          ],
      });

       const Order =  mongoose.model("Order", orderSchema);
       const Customer =  mongoose.model("Customer", customerSchema);
      
      
      // const findCustomer = async () => {
      //    let result = await Customer.find({}).populate("orders");
      //   console.log(result[0]);
      // };

      // findCustomer();


      const addCustomer = async () => {
         
         let newCust = new Customer({
            name: "Fahim Anwar",
         });

         let newOrder = new Order({
            item: "Pizza",
            price: 459,
         });

         newCust.orders.push(newOrder);
         
         await newOrder.save();
         await newCust.save();

         console.log("Added new customer");

       };

       addCustomer();

    //   const addOrders = async () => {
    //     let res = await Order.insertMany(
    //         [
    //           { item: "Burger", price: 250 },
    //           { item: "Biriany", price: 270 },
    //           { item: "Shawrma", price: 150 },
    //         ]
    //     );
    //     console.log(res);
    //   };
     
    //   addOrders();




