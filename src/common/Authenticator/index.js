import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router';

function Authenticator({ role, Auth }) {
    const navigate = useNavigate()
    const profile = useSelector(state => state.profile.profile)
    const { pathname } = useLocation()
    useEffect(() => {
        if (role === "user") {
            if (Auth && profile?._id) {
                navigate("/")
            }
            else if (!profile?._id) {
                if (!pathname.includes("login") && !pathname.includes("forgot") && !pathname.includes("signup"))
                    navigate("/login")
            }
        }

        if (role === "admin") {
            if (Auth && profile?._id) {
                navigate("/")
            }
            else if (!profile?.id) {
                if (!pathname.includes("login") && !pathname.includes("forgot") && !pathname.includes("signup"))
                    navigate("/login")
            }
        }
    }, [pathname, role, navigate, profile?._id, Auth, profile?.id])
    return <Outlet />
}

export default Authenticator