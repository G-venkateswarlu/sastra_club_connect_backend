import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    description: { type: String, default: "", trim: true },
    photo: { type: String, default: "" },
    isApproved: { type: Boolean, default: false },

    clubCouncil: [
      {
        name: { type: String, required: true, trim: true },
        role: { type: String, required: true, trim: true },
        profilePic: { type: String, default: "" }
      }
    ]
  },
  { timestamps: true }
);

const Club = mongoose.model("Club", clubSchema);
export default Club;
