const cloudinary = require("cloudinary").v2
const cloud_name = process.env.CLOUD_NAME
const api_secret = process.env.API_SECRET
const api_key = process.env.API_KEY

cloudinary.config({cloud_name, api_secret, api_key})

exports.upload_image = async(imagePath, userId)=>{
    const profile = await cloudinary.uploader.upload(imagePath,{
        public_id: userId + Date.now(),
        folder:"pakwan"
    })
    return profile.secure_url
}