import Joi from "joi";

const nameValidationSchema = Joi.object({
    firstName: Joi.string().required().min(5).max(20).messages({
        'any.required': 'First name is required!',
        'string.empty': 'First name cannot be empty!',
        'string.min': 'First name must be at least {#limit} characters long!',
        'string.max': 'First name cannot be longer than {#limit} characters!'
    }),
    middleName: Joi.string(),
    lastName: Joi.string().required().min(5).max(20).messages({
        'any.required': 'Last name is required!',
        'string.empty': 'Last name cannot be empty!',
        'string.min': 'Last name must be at least {#limit} characters long!',
        'string.max': 'Last name cannot be longer than {#limit} characters!'
    })
});

const parentsValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        'any.required': "Father's name is required!",
        'string.empty': "Father's name cannot be empty!"
    }),
    fatherOccupation: Joi.string().required().messages({
        'any.required': "Father's occupation is required!",
        'string.empty': "Father's occupation cannot be empty!"
    }),
    fatherContactNo: Joi.string().required().messages({
        'any.required': "Father's contact number is required!",
        'string.empty': "Father's contact number cannot be empty!"
    }),
    motherName: Joi.string().required().messages({
        'any.required': "Mother's name is required!",
        'string.empty': "Mother's name cannot be empty!"
    }),
    motherOccupation: Joi.string().required().messages({
        'any.required': "Mother's occupation is required!",
        'string.empty': "Mother's occupation cannot be empty!"
    }),
    motherContactNo: Joi.string().required().messages({
        'any.required': "Mother's contact number is required!",
        'string.empty': "Mother's contact number cannot be empty!"
    })
});

const guardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': "Guardian's name is required!",
        'string.empty': "Guardian's name cannot be empty!"
    }),
    occupation: Joi.string().required().messages({
        'any.required': "Guardian's occupation is required!",
        'string.empty': "Guardian's occupation cannot be empty!"
    }),
    contactNo: Joi.string().required().messages({
        'any.required': "Guardian's contact number is required!",
        'string.empty': "Guardian's contact number cannot be empty!"
    })
});

const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
        'any.required': 'Student ID is required!',
        'string.empty': 'Student ID cannot be empty!'
    }),
    name: nameValidationSchema.required().messages({
        'any.required': 'Name is required!'
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        'any.required': 'Gender is required!',
        'any.only': 'Gender must be one of "male", "female", or "other"!'
    }),
    dateOfBirth: Joi.string().required().messages({
        'any.required': 'Date of birth is required!'
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required!',
        'string.email': 'Email must be a valid email address!'
    }),
    contactNo: Joi.string().required().messages({
        'any.required': 'Contact number is required!',
        'string.empty': 'Contact number cannot be empty!'
    }),
    emergencyContactNo: Joi.string().required().messages({
        'any.required': 'Emergency contact number is required!',
        'string.empty': 'Emergency contact number cannot be empty!'
    }),
    bloodGroup: Joi.string().valid(
        'A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
    ),
    presentAddress: Joi.string(),
    permanentAddress: Joi.string().required().messages({
        'any.required': 'Permanent address is required!',
        'string.empty': 'Permanent address cannot be empty!'
    }),
    parents: parentsValidationSchema.required().messages({
        'any.required': 'Parents information is required!'
    }),
    guardian: guardianValidationSchema.required().messages({
        'any.required': 'Guardian information is required!'
    }),
    avatar: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active')
});

export default studentValidationSchema;
