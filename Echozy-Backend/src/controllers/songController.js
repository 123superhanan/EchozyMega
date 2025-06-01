import {v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js';


const addSong = async ( req,res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.body.audio[0];
        const imageFile = req.body.image[0];
        const audioUpload= await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"}); 
        const ImageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"}); 
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
        const songData = {
            name,
            desc,
            album,
            image : ImageUpload.secure_url,
            file : audioUpload.secure_url,
            duration
        }

        const  song  = songModel(songData);
        await song.save();

        res.json({success:true,message:"song added"});
    } catch (error) {
        res.json({success:false,message:"not added"});
    }
}
const ListSong = async (req,res) => {

}
export {addSong, ListSong} 