import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';

const schema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
});

type Inputs = z.infer<typeof schema>;

function App() {
    const { register, handleSubmit } = useForm<Inputs>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: ''
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
