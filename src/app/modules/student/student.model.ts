import { Schema, model } from "mongoose";
import { Name, Parents, Guardian, Student } from "./student.interface";

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const parentsSchema = new Schema<Parents>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true },
  name: { type: nameSchema, required: true },
  gender: {
    type: String,
    enum: ["male", "famale", "other"],
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: [
      "A",
      "B",
      "AB",
      "O",
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-",
    ],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
  parents: { type: parentsSchema, required: true },
  guardian: { type: guardianSchema, required: true },
  avatar: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

const StudentModel = model<Student>("student", studentSchema);

export { StudentModel };
