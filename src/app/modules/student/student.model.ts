import { Schema, model } from "mongoose";
import { TName, TParents, TGuardian, TStudent, TStudentModel, TStudentMethods } from "./student.interface";

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minlength: [2, "First name must be at least 2 characters long."],
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
    minlength: [2, "Last name must be at least 2 characters long."],
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

const parentsSchema = new Schema<TParents>({
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

const guardianSchema = new Schema<TGuardian>({
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

const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethods>({
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

studentSchema.methods.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

const Student = model<TStudent, TStudentModel>("student", studentSchema);

export { Student };
