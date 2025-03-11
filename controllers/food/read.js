import food from "../../Models/food.js";

let allFood = async (req,res,next)=>{
    try {
        let all = await food.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
 export default allFood