import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
    const response = await StudentModel.create(student);
    return response;
};

const getAllStudentsFromDB = async () => {
    const response = await StudentModel.find();
    return response;
};

const getSingleStudentFromDB = async (id: string) => {
    const response = await StudentModel.findOne({ id });
    return response;
};

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
};
