import React from 'react'
import { Route, Routes } from "react-router-dom"

import GetLoader from '../../common/GetLoader';
import Authenticator from '../../common/Authenticator';

const Error = React.lazy(() => import("../../common/Errors"))

const UserLayout = React.lazy(() => import("./components/layout"))
const LandingPage = React.lazy(() => import("./components/landingpage"))
const MYQuestion = React.lazy(() => import("./components/MYQuestion"))
const PinnedQuesinos = React.lazy(() => import("./components/MYQuestion"))
const QuestionDetails = React.lazy(() => import("./components/QuestionDetails"))
const MYAnswers = React.lazy(() => import("./components/MYAnswers"))
const AboutPage = React.lazy(() => import("./components/AboutUs"))
const LoginPage = React.lazy(() => import("./components/login"))
const SignupPage = React.lazy(() => import("./components/signup"))
const ForgotPassword = React.lazy(() => import("./components/forgotpassword"))

function UserRoutes() {
    return (
        <React.Suspense fallback={<GetLoader />}>
            <Routes>
                <Route path="/*" element={<UserLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='mytopics' element={<MYQuestion />} />
                    <Route path='myanswers' element={<MYAnswers />} />
                    <Route path='pinned' element={<PinnedQuesinos />} />
                    <Route path='question/:id' element={<QuestionDetails />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path="*" element={<Error />} />
                </Route>
                <Route path='/*' element={<Authenticator role={"customer"} Auth />}>
                    <Route path='forgotpassword' element={<ForgotPassword />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default UserRoutes