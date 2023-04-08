import React from 'react'
import { Route, Routes } from "react-router-dom"

import Authenticator from '../../common/Authenticator';
import GetLoader from '../../common/GetLoader';


const QuestionDetails = React.lazy(() => import("./components/QuestionDetails"))
const ForgotPassword = React.lazy(() => import("./components/forgotpassword"))
const PinnedQuesinos = React.lazy(() => import("./components/MYQuestion"))
const PostQuestion = React.lazy(() => import("./components/PostQuestion"))
const LandingPage = React.lazy(() => import("./components/landingpage"))
const ViewProfile = React.lazy(() => import("./components/ViewProfile"))
const MYQuestion = React.lazy(() => import("./components/MYQuestion"))
const SearchPage = React.lazy(() => import("./components/SearchPage"))
const MYAnswers = React.lazy(() => import("./components/MYAnswers"))
const AboutPage = React.lazy(() => import("./components/AboutUs"))
const LoginPage = React.lazy(() => import("./components/login"))
const UserLayout = React.lazy(() => import("./components/layout"))
const SignupPage = React.lazy(() => import("./components/signup"))
const Profile = React.lazy(() => import("./components/Profile"))
const Error = React.lazy(() => import("../../common/Errors"))

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
                    <Route path='addquestion' element={<PostQuestion />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='user/:id' element={<ViewProfile />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='search/:query' element={<SearchPage />} />
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