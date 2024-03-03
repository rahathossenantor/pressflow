import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
    const response = await StudentModel.create(student);
    return response;
};

export const StudentServices = {
    createStudentIntoDB,
};
