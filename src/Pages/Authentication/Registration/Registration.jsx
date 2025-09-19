import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Logo from '../../../Components/Logo/Logo';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-xl shadow-lg">
                <div className='mb-10'>
                    <Logo></Logo>
                </div>
                <p>Register with profest</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your name
                        </label>
                        <input
                            id='name'
                            type="text"
                            {...register('name', {
                                required: 'Enter your name',
                                message: 'Must enter name'
                            })}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Entered value does not match email format',
                                },
                            })}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must have at least 6 characters',
                                },
                            })}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p>Already have any acoount? <Link to='/login'>Login</Link></p>
                <div>
                    <button className='btn w-full'><FcGoogle size={20} />Register with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;