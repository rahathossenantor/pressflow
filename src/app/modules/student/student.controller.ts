import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;
        const response = await StudentServices.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: response
        });
    } catch (err) {
        console.log(err);
    };
};

export const StudentControllers = {
    createStudent
};
