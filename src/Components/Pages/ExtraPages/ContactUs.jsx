import React from 'react';
import NeedHelp from '../HomePages/NeedHelp';
import useTitle from '../../../MyHooks/useTitle';

const ContactUs = () => {
	useTitle('ContactUs');
	return (
		<div>
		<NeedHelp />		
			<div>
				<div className="py-10 bg-gray-900 text-gray-100">
					<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
						<div className="flex items-center justify-between">
							<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
							<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Hello Bank</a>
						</div>
						<div className="mt-3">
							<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline pt-6 pb-4">The Hello Team. Experts in banking products and services.</a>
							<p className="mt-2">Ready to give you a hand in urgent situations and for the most complex questions.
								Contact them by phone, email, Facebook or Twitter (no, not Tinder!)</p>
						</div>
						<p className="text-xl font-bold hover:underline pt-6 pb-4">Got a question about your online request for</p>
						<div className=" mt-4">
							
							<ul>
								<li>- a prepaid card or a credit card,</li>
								<li>- your mortgage,</li>
								<li>- your home insurance policy “Top Habitation”,</li>
								<li>- your arranged overdraft or</li>
								<li>- about the opening of your account?</li>

							</ul>

						</div>
						<p className="text-lg font-bold hover:underline py-6">Call the Hello Team from Monday to Friday from 9am to 5pm.</p>
						<p> <span className="text-xl font-bold hover:underline py-6">For all other questions,</span> you can contact the Hello Team from Monday to Friday from 7am to 10pm and Saturday from 9am to 5pm.</p>
					</div>
				</div>
			</div>		
		</div>
	);
};

export default ContactUs;