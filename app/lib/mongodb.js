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
const userDir = mongoose.models.Directors || mongoose.model('Directors', schema);
const schema1 = new mongoose.Schema({
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
const userAmb = mongoose.models.Ambassador || mongoose.model('Ambassador', schema1);
export default async function mongodb(e) {

    const addData = async () => {
        console.log(e)

        const data = [];
        for (const pair of e.entries()) {
            data.push(pair[1]);
            // console.log(pair[1])
        }

        let skills = data.slice(14, data.length);
        try {
            const url = `mongodb+srv://test:${process.env.DB_PSWD}@digitalpak.yl8cbcq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
            await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('Connected to MongoDB Atlas')
            if (data[1] === 'director') {
                const user1 = new userDir({
                    postfor: data[1],
                    name: data[2],
                    email: data[3],
                    phone: data[4],
                    gender: data[5],
                    fbLink: data[10],
                    instaLink: data[11],
                    linkedinLink: data[12],
                    region: data[9],
                    institute: data[6],
                    field: data[7],
                    year: data[8],
                    experience: data[13],
                    skills: skills
                });
                await user1.save()
                console.log('inserted data into database');
            }
            else {
                const user1 = new userAmb({
                    postfor: data[1],
                    name: data[2],
                    email: data[3],
                    phone: data[4],
                    gender: data[5],
                    fbLink: data[10],
                    instaLink: data[11],
                    linkedinLink: data[12],
                    region: data[9],
                    institute: data[6],
                    field: data[7],
                    year: data[8],
                    experience: data[13],
                    skills: skills
                });
                await user1.save()
                console.log('inserted data into database');
            }


            // console.log('Unable to connect to MongoDB Atlas');
            // console.error(err);


        }
        catch (err) {
            console.error(err)
        }

    }
    await addData()
}