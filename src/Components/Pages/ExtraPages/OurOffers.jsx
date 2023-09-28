import React from 'react';
import useTitle from '../../../MyHooks/useTitle';

const OurOffers = () => {
	useTitle('OurOffers');
    return (
        <div>
			<div className="bg-gray-700 py-14 text-gray-100">
				<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
					<div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
						<img src="https://i.ibb.co/p1B3f7g/compte-epargne-plus-desktop1-1584x529.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
						<div className="p-6 space-y-2 lg:col-span-5 ">
							<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">The Savings Account Plus</h3>
							<span className="text-xs dark:text-gray-400">February 19, 2023</span>
							<p>
								A regulated savings account from BNP Paribas Fortis to save up to €100,000 with an attractive return</p>
						</div>
					</div>
					<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/sbGwPFV/free-all-in-header-illu.png" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">THE ALL-INCLUSIVE FREE PAYMENT ACCOUNT</h3>
								<span className="text-xs dark:text-gray-400">January 21, 2023</span>
								<p>All-inclusive : the payment account*, the contactless debit card, the app and all the innovative payment methods
									Free : Opening, management, follow up and use in</p>
							</div>
						</div>
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/6JZDfDG/hello-credit-card.jpg" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Hello bank! credit card</h3>
								<span className="text-xs dark:text-gray-400">January 22, 2023</span>
								<p>An international payment and withdrawal credit card with a free refund period and a purchase protection insurance included.</p>
							</div>
						</div>
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/PYx30St/payconiq.jpg" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">PAYCONIQ BY BANCONTACT</h3>
								<span className="text-xs dark:text-gray-400">January 23, 2023</span>
								<p>Repay your friends and get paid back easily.
									Pay online or in shops.
									Use the convenient features in your daily life.</p>
							</div>
						</div>
						<div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/W2r4tr4/Saving-Account-corp.jpg" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">SAVINGS ACCOUNT PLUS</h3>
								<span className="text-xs dark:text-gray-400">January 24, 2023</span>
								<p>Save up to €100,000 with an attractive return.Your savings remain available.
									Click below to read the essential information for savers and find out everything you need to know about this regulated savings account</p>
							</div>
						</div>
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/9c2g9My/instalment-loan.jpg" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">INSTALMENT LOANS</h3>
								<span className="text-xs dark:text-gray-400">January 25, 2023</span>
								<p>
									A car, motor, bike or personal project at an attractive rate?
									Tailor-made and adapted to your needs?
									Warning, borrowing money costs mone</p>
							</div>
						</div>
						<div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/kcPhCzx/hello-home.jpg" alt='' />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">TOP HABITATION HOME INSURANCE</h3>
								<span className="text-xs dark:text-gray-400">January 26, 2021</span>
								<p>
									A home insurance policy from AG Insurance that protects you against damage caused by fire, water..</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
    );
};

export default OurOffers;