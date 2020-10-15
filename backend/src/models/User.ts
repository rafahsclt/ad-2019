import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    giftTips: [String],
    isChosen: Boolean,
    yourSecretFriend: String
})

export default mongoose.model('User', UserSchema)