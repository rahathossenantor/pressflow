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
  id: { type: String },
  name: nameSchema,
  gender: ["male", "famale"],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: [
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
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
  parents: parentsSchema,
  guardian: guardianSchema,
  avatar: { type: String },
  isActive: ["active", "blocked"],
});

const Student = model<Student>("Student", studentSchema);
