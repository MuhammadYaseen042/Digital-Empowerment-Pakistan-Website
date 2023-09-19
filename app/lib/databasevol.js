import React from 'react'
import * as mongoose from 'mongoose';


const schema = new mongoose.Schema({
    postfor: String,
    name: String,
    email: String,
    phone: String,
    gender: String,
    fbLink: String,
    instaLink: String,
    linkedinLink: String,
    region: String,
    institute: String,
    field: String,
    year: String,
    experience: String,
    skills: Array
});
const userVol1 = mongoose.models.Volunteers || mongoose.model('Volunteers', schema);
export default async function mongodb(e) {

    const addData = async () => {
        console.log(e)

        const data = [];
        for (const pair of e.entries()) {
            data.push(pair[1]);
        }

        let skills = data.slice(13, data.length);
        try {
            const url = `mongodb+srv://test:${process.env.DB_PSWD}@digitalpak.yl8cbcq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
            await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('Connected to MongoDB Atlas')
            const user1 = new userVol1({
                name: data[1],
                email: data[2],
                phone: data[3],
                gender: data[4],
                fbLink: data[9],
                instaLink: data[10],
                linkedinLink: data[11],
                region: data[8],
                institute: data[5],
                field: data[6],
                year: data[7],
                experience: data[12],
                skills: skills
            });
            await user1.save()
            console.log('inserted data into database');
        }
        catch (err) {
            console.error(err)
        }

    }
    await addData()
}