const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
   .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
   item:String,
   price:Number,
});
const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE;")
// });


const Order = mongoose.model("order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);
customerSchema.post("findOneAndDelete",async (data) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({_id:{$in:customer.orders}});
        console.log(res);
    }
});

// const addCustomer = async() => {
//     let cust1 = new Customer({
//         name:"Rahul Kumar",
        
//     });
//     let order1 = await Order.findOne({item:"Chips"});
//     let order2 = await Order.findOne({item:"Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }

// addCustomer();
// // const addOrders = async () => {
// //     let res = await Order.insertMany([
// //         {item: "Samosa",price:12},
// //         {item:"Chips",price:10},
// //         {item:"Chocolate",price:30}
// //     ]);
// //     console.log(res);
// // };

// // addOrders();

// Phase --> 2

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun"
    });


    let newOrder = new Order ({
        item:"Pizza",
        price:250,
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();

    console.log("added new customer");

};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("6adde86adfe0b532c455435e");
    console.log(data);
};

// addCust();
delCust();