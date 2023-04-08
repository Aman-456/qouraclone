import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router';

function Authenticator({ role, Auth }) {
    const navigate = useNavigate()
    const profile = useSelector(state => state.profile)
    const { pathname } = useLocation()
    useLayoutEffect(() => {
        if (role === "user") {
            if (Auth && profile?.id) {
                navigate("/")
            }
            else if (!profile?.id) {
                if (!pathname.includes("login") && !pathname.includes("forgot") && !pathname.includes("signup"))
                    navigate("/login")
            }
        }

        if (role === "admin") {
            if (Auth && profile?.id) {
                navigate("/")
            }
            else if (!profile?.id) {
                if (!pathname.includes("login") && !pathname.includes("forgot") && !pathname.includes("signup"))
                    navigate("/login")
            }
        }
    }, [pathname, role, navigate, profile, Auth])
    return <Outlet />
}

export default Authenticator