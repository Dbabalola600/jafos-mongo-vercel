


import connectMongo from "../../../../utils/connectMongo";
import OrderItem from "../../../../model/Student/orderItem";
import Student from "../../../../model/StudentModel"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */






export default async function fetchOrderItem(req, res) {
    if (req.method === "POST") {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { _id } = JSON.parse(req.body)
        console.log("FETCHING DOCUMENTS")


        const orders = await OrderItem.findById( _id)
        console.log("FETCHED ORDERS")


        return res.status(200).json(

             orders
        )



    } else {
        return res.status(400).json({
            notFound: true,
        });
    }
}








