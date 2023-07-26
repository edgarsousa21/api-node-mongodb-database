import mongoose from 'mongoose'


async function connectDatabase() {
    await mongoose
        .connect(
            'mongodb+srv://edgarraphaeldesousa:xe7RW2GPNdNR2Bym@cluster0.7gskavr.mongodb.net/?retryWrites=true&w=majority'
        )
}

export default connectDatabase