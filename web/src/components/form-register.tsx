import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../styles/form.scss';

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

type Inputs = z.infer<typeof schema>;

export const RegisterForm: FC = () => {
    const { register, handleSubmit } = useForm<Inputs>({
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
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register('name')} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email')} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')} />

            <button type="submit">Submit</button>
        </form>
    );
};
