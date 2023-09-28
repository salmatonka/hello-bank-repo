import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Components/Shares/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Register from "../Components/Form/Register";
import LogIn from "../Components/Form/LogIn";
import DashboardLayout from "../Layouts/DashboardLayout";
import AccountInfo from "../Components/Dashboard/AccountInfo/AccountInfo";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import AccountDetails from "../Components/Pages/Details/AccountDetails";
import CardDetails from "../Components/Pages/Details/CardDetails";
import LoanDetails from "../Components/Pages/Details/LoanDetails";
import AccountsForm from "../Components/Pages/OpenForms/AccountsForm";
import AccountsProfile from "../Components/Pages/UserProfiles/AccountsProfile";
import MyAccount from "../Components/Pages/MyUsers/MyAccount/MyAccount";
import OpenAccountDetails from "../Components/Dashboard/SingleDetails/OpenAccountDetails";
import MyDeposit from "../Components/Pages/MyUsers/MyAccount/MyDeposit";

import MyCard from "../Components/Pages/MyUsers/MyCard/MyCard";
import MyLoan from "../Components/Pages/MyUsers/MyLoan/MyLoan";
import CardRequest from "../Components/Dashboard/AllRequests/CardRequest/CardRequest";
import LoanRequest from "../Components/Dashboard/AllRequests/LoanRequest/LoanRequest";
import UserCardRequest from "../Components/Dashboard/AllRequests/CardRequest/UserCardRequest";
import UserLoanRequest from "../Components/Dashboard/AllRequests/LoanRequest/UserLoanRequest";
import DepositRequest from "../Components/Dashboard/AllRequests/DepositRequest/DepositRequest";
import LoanDeposit from "../Components/Pages/MyUsers/MyLoan/LoanDeposit";
import DebtRepay from "../Components/Pages/MyUsers/DebtRepay/DebtRepay";
import MoneyTransfer from "../Components/Pages/MyUsers/MoneyTransfer/MoneyTransfer";
import ContactUs from "../Components/Pages/ExtraPages/ContactUs";
import OurOffers from "../Components/Pages/ExtraPages/OurOffers";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
              }, 
              {
                path: '/accountDetails/:accountType',
                element: <AccountDetails />
              },
              {
                path: '/cardDetails/:cardType',
                element: <CardDetails/>
              },
              {
                path: '/loanDetails/:loanType',
                element: <LoanDetails />
              },
              {
                path: '/accountsForm',
                element: <AccountsForm />
              },
              {
                path: '/accountsProfile',
                element: <AccountsProfile />
              },
              {
                path: '/myAccount',
                element: <MyAccount />
              },
              {
                path: '/myDeposit/:id',
                element: <MyDeposit />
              },
              {
                path: '/moneyTransfer/:id',
                element: <MoneyTransfer />
              },
              {
                path: '/myCard',
                element: <MyCard />
              },
              {
                path: '/cardRequest/:id',
                element: <CardRequest />
              },
              {
                path: '/myLoan',
                element: <MyLoan />
              },
              {
                path: '/loanDeposit/:id',
                element: <LoanDeposit />
              },
              {
                path: '/loanRequest/:id',
                element: <LoanRequest />
              },
              {
                path: '/debtRepay/:id',
                element: <DebtRepay />
              },
              {
                path: '/contactUs',
                element: <ContactUs />
              },
              {
                path: '/ourOffers',
                element: <OurOffers />
              },
              // {
              //   path: '/blog',
              //   element: <Blog />
              // },
              {
                path: '/logIn',
                element: <LogIn />
              },
               {
                path: '/register',
                element: <Register />
              },
        ]       
    },
    {
      path: "/dashboard",
      errorElement: <ErrorPage />,
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard',
          element: <AccountInfo />
        },
        {
          path: '/dashboard/openAccountDetails/:id',
          element: <OpenAccountDetails />
        },
        {
          path: '/dashboard/depositRequest',
          element: <DepositRequest />
        },
        {
          path: "/dashboard/userCardRequest",
          element: <UserCardRequest />,
        },
        {
          path: "/dashboard/userLoanRequest",
          element: <UserLoanRequest />,
        },
        {
          path: "/dashboard/allUsers",
          element: <AllUsers />,
        },
      ]
    }

])
export default routes;