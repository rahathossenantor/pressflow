import { Schema, model } from "mongoose";
import { Name, Parents, Guardian, Student } from "./student.interface";

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minlength: [5, "First name must be at least 5 characters long."],
    maxlength: [20, "First name cannot exceed 20 characters."],
    validate: {
      validator: (fName: string) => {
        const splittedName = fName.trim().split(" ");
        const capitalizedName = splittedName.map(word => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
        const userName = capitalizedName.join(" ");
        return userName === fName;
      },
      message: props => `${props.value} is not a valid format!`
    }
  },
  middleName: {
    type: String,
    maxlength: [20, "Middle name cannot exceed 20 characters."]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minlength: [5, "Last name must be at least 5 characters long."],
    maxlength: [20, "Last name cannot exceed 20 characters."],
    validate: {
      validator: (lName: string) => {
        const splittedName = lName.trim().split(" ");
        const capitalizedName = splittedName.map(word => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
        const userName = capitalizedName.join(" ");
        return userName === lName;
      },
      message: props => `${props.value} is not a valid format!`
    }
  }
});

const parentsSchema = new Schema<Parents>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required!"]
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required!"]
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required!"]
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required!"]
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required!"]
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required!"]
  }
});

const guardianSchema = new Schema<Guardian>({
  name: {
    type: String,
    required: [true, "Guardian's name is required!"]
  },
  occupation: {
    type: String,
    required: [true, "Guardian's occupation is required!"]
  },
  contactNo: {
    type: String,
    required: [true, "Guardian's contact number is required!"]
  }
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: nameSchema,
    required: [true, "Student name is required!"]
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Gender is required!"]
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"]
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required!"]
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required!"]
  },
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
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required!"]
  },
  parents: {
    type: parentsSchema,
    required: [true, "Parent's information is required!"]
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian's information is required!"]
  },
  avatar: {
    type: String
  },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active"
  }
});

const StudentModel = model<Student>("student", studentSchema);

export { StudentModel };
