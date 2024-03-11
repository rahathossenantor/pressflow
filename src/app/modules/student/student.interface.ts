import { Model } from "mongoose";

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TParents = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

type TBloodGroup =
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

export type TStudent = {
  id: string;
  password: string;
  name: TName;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: TBloodGroup;
  presentAddress?: string;
  permanentAddress: string;
  parents: TParents;
  guardian: TGuardian;
  avatar?: string;
  isActive: "active" | "blocked";
};

export type TStudentMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExist(id: string): Promise<TStudent | null>;
};

export type TStudentModel = Model<TStudent, Record<string, never>, TStudentMethods>;
