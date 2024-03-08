import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validations";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student } = req.body;
        
        const { error } = studentValidationSchema.validate(student);
        if (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong!",
                error: error.details
            });
        };

        const response = await StudentServices.createStudentIntoDB(student);

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: response
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err
        });
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
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err
        });
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
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err
        });
    };
};

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
};
