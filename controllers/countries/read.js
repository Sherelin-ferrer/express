import countries from "../../Models/countries.js";

let allCountries = async (req,res,next)=>{
    try {
        let all = await countries.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
 export default allCountries