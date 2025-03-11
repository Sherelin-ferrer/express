import story from "../../Models/Story.js";

let allStories = async (req,res,next)=>{
    try {
        let all = await story.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
 export default allStories