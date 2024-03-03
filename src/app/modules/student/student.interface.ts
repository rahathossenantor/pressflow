export type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Parents = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type Guardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

type BloodGroup =
  | "A"
  | "B"
  | "AB"
  | "O"
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type Student = {
  id: string;
  name: Name;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: BloodGroup;
  presentAddress?: string;
  permanentAddress?: string;
  parents: Parents;
  guardian: Guardian;
  avatar?: string;
  isActive: "active" | "blocked";
};
