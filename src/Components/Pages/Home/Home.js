import React from 'react';
import HeadLine from '../HomePages/HeadLine';
import HomeBanner from '../HomePages/HomeBanner';
import CardsSlider from '../HomePages/CardsSlider';
import TaxCalculation from '../HomePages/TaxCalculation';
import WhatsNew from '../HomePages/WhatsNew';
import Security from '../HomePages/Security';
import FinancialEducation from '../HomePages/FinancialEducation';
import DeveloperPages from '../HomePages/DeveloperPages';
import NeedHelp from '../HomePages/NeedHelp';
import FinancialPlanning from '../HomePages/FinancialPlanning';
import useTitle from '../../../MyHooks/useTitle';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <HeadLine   />
            <HomeBanner />
            <CardsSlider />
            <TaxCalculation />
            <WhatsNew />
            <FinancialPlanning />
            <Security />
            <FinancialEducation />
            <DeveloperPages />
            <NeedHelp /> 
        </div>
    );
};

export default Home;