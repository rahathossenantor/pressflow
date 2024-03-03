import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body?.student;
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

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Students retrived successfully",
            data: students
        });
    } catch (err) {
        console.log(err);
    };
};

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const student = await StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: "Student retrived successfully",
            data: student
        });
    } catch (err) {
        console.log(err);
    };
};

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
};
