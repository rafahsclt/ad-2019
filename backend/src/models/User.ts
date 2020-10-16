import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    giftTip1: {type: String },
    giftTip2: {type: String },
    isChosen: {type: Boolean , default: false},
    nameSF: {type: String },
    gift1SF: {type: String },
    gift2SF: {type: String }
})

export default mongoose.model('User', UserSchema)