import cars from "../../Models/cars.js";
let allCars = async (req,res,next)=>{
    try {
        let all = await cars.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


export default  allCars