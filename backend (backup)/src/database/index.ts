import mongoose from 'mongoose'

export default mongoose.connect("mongodb://localhost:27017/ad-2019", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})