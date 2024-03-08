import { Schema, model } from "mongoose";
import { Name, Parents, Guardian, Student } from "./student.interface";

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: [true, "First name is required!"], minlength: 5, maxlength: 20 },
  middleName: { type: String },
  lastName: { type: String, required: [true, "Last name is required!"], minlength: 5, maxlength: 20 }
});

const parentsSchema = new Schema<Parents>({
  fatherName: { type: String, required: [true, "Father's name is required!"] },
  fatherOccupation: { type: String, required: [true, "Father's occupation is required!"] },
  fatherContactNo: { type: String, required: [true, "Father's contact number is required!"] },
  motherName: { type: String, required: [true, "Mother's name is required!"] },
  motherOccupation: { type: String, required: [true, "Mother's occupation is required!"] },
  motherContactNo: { type: String, required: [true, "Mother's contact number is required!"] }
});

const guardianSchema = new Schema<Guardian>({
  name: { type: String, required: [true, "Guardin's name is required!"] },
  occupation: { type: String, required: [true, "Guardin's occupation is required!"] },
  contactNo: { type: String, required: [true, "Guardian's contact number is required!"] }
});

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true },
  name: { type: nameSchema, required: true },
  gender: {
    type: String,
    enum: ["male", "famale", "other"],
    required: true
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
    ]
  },
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
  parents: { type: parentsSchema, required: true },
  guardian: { type: guardianSchema, required: true },
  avatar: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active"
  }
});

const StudentModel = model<Student>("student", studentSchema);

export { StudentModel };
