import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number, required: true }, // seconds
  audioUrl: { type: String, required: true },
  coverArt: { type: String }, // optional
});

const songModel = mongoose.models.song || mongoose.model("song", songSchema);

export default songModel;


