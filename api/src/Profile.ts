import { Schema, model } from 'mongoose';

const profileSchema = new Schema({
    "name": String,
    "id": String,
    "avatar": String,
    "bio": String
});

const Profile = model("Profile", profileSchema);

export default Profile;