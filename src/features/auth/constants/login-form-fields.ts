import { FormFieldType } from "@/shared/types/form-field-type";
import { rules } from "@/shared/utils/rules";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

export const loginFormFields = [
    {
        name: 'email',
        label: 'Email',
        type: FormFieldType.Input,
        placeholder: 'Enter your email',
        icon: MdOutlineEmail,
        rules: [
            {
                required: true,
                message: 'Please enter your email',
            },
            rules.email,
        ],

    },
    {
        name: 'password',
        label: 'Mật khẩu',
        type: FormFieldType.InputPassword,
        placeholder: 'Enter your password',
        icon: MdLockOutline,
        rules: [
            {
                required: true,
                message: 'Please enter your password',
            },
            rules.password,
        ],
    },
];