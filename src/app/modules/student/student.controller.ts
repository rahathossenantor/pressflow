import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import zodStudentValidationSchema from "./student.zod.validation";
// import studentValidationSchema from "./student.joi.validations";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student } = req.body;

        // validating student data using joi
        // const { error, value: validStudent } = studentValidationSchema.validate(student);
        // if (error) {
        //     res.status(500).json({
        //         success: false,
        //         message: "Something went wrong!",
        //         error: error.details
        //     });
        // };

        // validating student data using zod
        const validStudent = zodStudentValidationSchema.parse(student);

        const dbResponse = await StudentServices.createStudentIntoDB(validStudent);

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: dbResponse
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
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
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
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
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err
        });
    };
};

const deleteStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const dbResponse = await StudentServices.deleteStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: "Student retrived successfully",
            data: dbResponse
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err
        });
    };
};

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent
};
