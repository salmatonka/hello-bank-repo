import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (

        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-4xl dark:text-gray-600">
                    Ops ...! An Error Ocurred
                    </h2>

                    {
                        error && (
                            <>
                                <p className="text-2xl font-semibold md:text-3xl pb-6">{error?.statusText || error?.message}</p>
                                {/* <p className="text-2xl font-semibold md:text-3xl pb-6">{ error?.message}</p> */}
                                <p className="text-2xl font-semibold md:text-2xl pb-6">{error?.status}</p>
                            </>
                        )
                    }

                    <a rel="noopener noreferrer" href="/" className="px-8  py-3 font-semibold rounded bg-violet-400 dark:text-gray-900">Back to homepage</a>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;