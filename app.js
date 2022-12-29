import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import { Student } from './model/studentSchema.js'
import { College } from './model/collegeSchema.js'
export const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// for api checking
app.get('/check', (req, res, next) => {
    res.status(200).json({
        message: "Working well"
    })
})

app.post('/ragister', async (req, res, next) => {
    try {
        const { fname, lname, Rollnumber, admissionDate, college } = req.body;
        const student = new Student({
            fname,
            lname,
            Rollnumber,
            admissionDate,
            college,
        })
        await student.save()
        res.status(200).json({
            success: true,
            message: "Student added success",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
});

app.get('/getcollege', async (req, res, next) => {
    const data = await College.find()
    res.status(200).json({
        success: true,
        college: data
    })
});
