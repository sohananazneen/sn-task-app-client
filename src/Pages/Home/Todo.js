import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
    const navigate = useNavigate();

    const navigateToCompletedTasks = id => {
        navigate(`/completedTasks`);
    }
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='flex justify-center my-12'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                <div className="flex items-center border-b border-pink-500 py-2">
                    <div className="flex justify-center">
                        <div>
                            <div className="form-check">
                                <input onClick={() => navigateToCompletedTasks()} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                            </div>
                        </div>
                    </div>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Title"  {...register("title", { required: true, maxLength: 20 })} />

                    <input className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default Todo;