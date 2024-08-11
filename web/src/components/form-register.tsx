import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../styles/form.scss';

const schema = z
    .object({
        name: z
            .string()
            .min(4, { message: 'Name must be at least 4 characters long' })
            .max(12, { message: 'Name must be at most 12 characters long' })
            .regex(/\w+/, {
                message: 'Name must contains at least one letter',
            })
            .regex(/^[a-zA-Z]/, {
                message: 'Name must start with a letter',
            })
            .regex(/^\S+$/, {
                message: 'Name must not contain spaces',
            }),
        email: z.string().email({ message: 'Invalid email address' }),
        password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters long' })
            .regex(/\d+/, {
                message: 'Password must contains at least one number',
            })
            .regex(/[a-z]+/, {
                message: 'Password must contains at least one lowercase letter',
            })
            .regex(/[A-Z]+/, {
                message: 'Password must contains at least one uppercase letter',
            })
            .regex(/\W+/, {
                message:
                    'Password must contains at least one special character',
            })
            .regex(/^\S+$/, {
                message: 'Password must not contain spaces',
            }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

type Inputs = z.infer<typeof schema>;

type Field = {
    label: string;
    type: string;
    id: string;
    placeholder: string;
};

const regFields: Record<keyof Inputs, Field> = {
    name: {
        label: 'Name',
        type: 'text',
        id: 'name',
        placeholder: 'Enter your name',
    },
    email: {
        label: 'Email',
        type: 'email',
        id: 'email',
        placeholder: 'Enter your email',
    },
    password: {
        label: 'Password',
        type: 'password',
        id: 'password',
        placeholder: 'Enter your password',
    },
    confirmPassword: {
        label: 'Confirm password',
        type: 'password',
        id: 'confirm-password',
        placeholder: 'Confirm your password',
    },
};

export const RegisterForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Object.entries(regFields).map(([key, field]) => {
                const fieldKey = key as keyof Inputs;

                return (
                    <div key={key} className="form-group">
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder="..."
                            {...register(fieldKey)}
                        />
                        {errors[fieldKey] && (
                            <span className="error">
                                {errors[fieldKey]?.message}
                            </span>
                        )}
                    </div>
                );
            })}

            <button type="submit">Submit</button>
        </form>
    );
};
