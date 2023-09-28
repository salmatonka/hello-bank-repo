import React from 'react';

const FinancialPlanning = () => {
    return (
        <section style={{backgroundColor:'#010313'}} className="py-6 bg-gray-800 dark:text-gray-50">
        <div className=" mx-auto p-4 sm:p-10">
            <div className="mb-16 space-y-4 text-center">
                <h1 className="text-4xl font-semibold leadi text-sky-400">Financial Planning</h1>

            </div>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                <div className="relative z-0 flex flex-col items-center p-8 border  border-pink-400 rounded-md bg-sky-300 hover:bg-pink-300">
                    <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-pink-400 dark:text-gray-900">Retirement</span>
                    <p className="my-6 text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">Retirement Planning</p>
                    <p>Our financial experts can help you plan for a comfortable retirement with strategies tailored to your unique financial situation.</p>

                </div>
                <div className="relative flex flex-col items-center p-8 border-2 rounded-md border-sky-400 bg-pink-300 hover:bg-sky-300">
                    <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-sky-400 dark:text-gray-900">Investment </span>

                    <p className="my-6 text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">Investment Planning</p>
                    <p>We can help you create an investment plan that meets your financial goals, whether you're saving for a down payment on a house or planning for a child's education.</p>

                </div>
                <div className="relative z-0 flex flex-col items-center p-8 border  border-pink-400 rounded-md bg-sky-300 hover:bg-pink-300">
                    <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-pink-400 dark:text-gray-900">Tax</span>

                    <p className="my-6 text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">Tax Planning</p>
                    <p>
                        Our tax experts can help you optimize your tax strategy, minimize your tax liability, and maximize your deductions.</p>

                </div>
            </div>
        </div>
    </section>
    );
};

export default FinancialPlanning;