import React, { useState } from 'react';

const TaxCalculation = () => {

	
	return (
		<section className="p-6 bg-gray-900 dark:text-gray-100">
			<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">

				<div className="w-full px-6 py-14 rounded-md sm:px-12 md:px-16 xl:col-span-3 dark:bg-gray-900">
					<h1 className='text-4xl text-center font-bold text-gray-700 pb-6'>Tax Calculation</h1>

					<form
						// onSubmit={handleSubmit}
						novalidate="" action="" className="self-stretch space-y-3">
						<div>
							<label for="salary" className="text-sm sr-only">Your Salary</label>
							<input name="salary" id="salary" type="number" placeholder="Enter Your Salary (more than 1 Lac)" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700  bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300  hover:text-gray-100" />
						</div>
						<button type="submit" className="w-full py-2 font-semibold rounded  bg-gradient-to-r  from-pink-400 to-sky-400  text-gray-700"> Calculate</button>
						<div>
							<label for="result" className="text-sm sr-only">Email address</label>
							<input name="result" placeholder='Your Result' id="result" type="text" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700  bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300  hover:text-gray-100" />
						</div>

					</form>
				</div>

				<img src="https://js.pencdn.cz/acimage/w600-h330/431658.jpg" alt="" className="object-cover w-full pt-12  xl:col-span-2 dark:bg-gray-500" />
			</div>
		</section>
	);
};

export default TaxCalculation;