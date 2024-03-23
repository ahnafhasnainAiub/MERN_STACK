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

    //    customerSchema.pre("findOneAndDelete", async(data) => {
    //     console.log("Pre Middleware");          
    //    });      
       
       customerSchema.post("findOneAndDelete", async (customer) => {
          if(customer.orders.length){
            let res = await Order.deleteMany({ _id: { $in: customer.orders } });
            console.log(res);
          }         
       });

       const Order =  mongoose.model("Order", orderSchema);
       const Customer =  mongoose.model("Customer", customerSchema);

       //Customer Delete
       const delCust = async () => {
         let customer = await Customer.findByIdAndDelete('65ff27d1a4a5c35c33a49547');
         console.log(customer);
       };

       delCust();