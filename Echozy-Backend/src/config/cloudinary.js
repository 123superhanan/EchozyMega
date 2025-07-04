import {v2 as cloudinary } from 'cloudinary'

const connectCloudinary =  async () =>{
    await cloudinary.config({
        cloud_name : process.env.CLOUDINARY_NAME,
        api_ket:process.env.CLOUDINARY_API_KEY,
        secret_key:process.env.CLOUDINARY_SECRET_KEY
    })
}
export default connectCloudinary