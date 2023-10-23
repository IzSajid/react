import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';
import DefinationSearch from '../components/DefinationSearch';

export default function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);

    const { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //const url = 'https://httpstat.us/500';
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                if(!response.ok) {
                    setError(true);
                    throw Error('Something went wrong!');
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.length > 0 && data[0].meanings) {
                    setWord(data[0].meanings);
                } else {
                    setNotFound(true);
                }
            })
            .catch((e) => {
                console.log(e.message);
                setError(true);
            });
    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <div className='text-center'>
                    <Link className='no-underline text-blue-500 hover:text-blue-700'
                        to='/dictionary'>
                        Go back to Dictionary
                    </Link>
                </div>
            </>
        );
    }
    if(error === true){
        return (
            <>
                <h1 className='text-center text-2xl font-bold text-red-500'>
                    Something went wrong!
                </h1>
                <div className='text-center'>
                    <Link className='no-underline text-blue-500 hover:text-blue-700'
                        to='/dictionary'>
                        Go back to Dictionary
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='px-3'>
                {word ? (
                    <>
                        <h1 className='text-2xl font-bold mb-4'>Here is a definition:</h1>
                        {word.map((meaning) => {
                            return (
                                <p key={uuidv4()} className='mb-2'>
                                    <span className='font-bold'>{meaning.partOfSpeech}: </span>
                                    {meaning.definitions[0].definition}
                                </p>
                            );
                        })}
                        <div className='w-1/4'>
                            <DefinationSearch/>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
}