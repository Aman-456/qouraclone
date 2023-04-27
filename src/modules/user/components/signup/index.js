/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import { endpoints } from '../../../../config/endpoints'
import { POSTFORMDATA, POSTREQUEST } from '../../../../config/requests'
import { hideLoader, showLoader } from '../../../../Store/Features/LoaderSlice'
import { useDispatch } from 'react-redux'

function SingupPage() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [img, setimg] = useState(null)
    const [imgShow, setImgShow] = useState(null)
    const dispatch = useDispatch()

    const file = (e) => {
        const file = e.target.files[0]
        const pattern = file.type.substring(0, 5) === "image"
        if (pattern) {
            setimg(file);
            setImgShow(URL.createObjectURL(file))
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid file!',
                text: "Please select image file only!!!",
                showCancelButton: true,
                showConfirmButton: false
            })
        }
    }
    function handlesubmit(e) {
        e.preventDefault()
        if (
            (email === "" || email === null) &&
            (password === "" || password === null)
            && name === ""
        ) {
            return null
        }
        else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            if (password.length >= 8 && /[0-9]/.test(password) && /[&._-]/.test(password)) {
                request();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Weak password!',
                    text: "Please use a strong password!!!",
                    showConfirmButton: true
                })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email!',
                text: "Please user a valid email!!!",
                showConfirmButton: true
            })
        }

    }
    const request = async () => {
        // signup request
        try {
            const values = {
                name,
                email,
                password,
            }
            var data;
            const func = () => dispatch(hideLoader())
            dispatch(showLoader())
            if (img || imgShow) {
                const formdata = new FormData();
                for (const key in values)
                    formdata.append(key, values[key]);
                formdata.append("image", img)
                data = await POSTFORMDATA(endpoints.signupWithImage, formdata)
            }
            else {
                data = await POSTREQUEST(endpoints.signup, values)
            }
            func()
            if (data?.type === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Success!',
                    showConfirmButton: true
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: data?.result || 'Signup Error!',
                    showConfirmButton: true
                })

            }
        }
        catch (e) {
            console.log(e);
            Swal.fire({
                icon: 'error',
                title: data?.result || 'Signup Error!',
                showConfirmButton: true
            })
        }
    }
    useEffect(() => {
        return () => reset()
    }, [])
    const reset = () => {
        setName(null)
        setEmail(null)
        setPassword(null)
        setimg(null)
        setImgShow(null)
    }
    return (
        <div className={`LoginSignUpPage`}>
            <div className={` infoDiv signup `}>
                <motion.form
                    initial={{ x: -1000 }}
                    transition={{ duration: .5 }}
                    animate={{ x: 0 }}
                    onSubmit={e => { e.preventDefault(); handlesubmit() }}
                >
                    <div className={'tagDiv'}>
                        <h1
                            style={{
                                fontSize: "2rem",
                                fontWeight: 600,
                                textTransform: "capitalize"
                            }}
                        >Sign Up
                            <span
                                style={{
                                    fontSize: ".9rem",
                                    marginLeft: ".5rem",
                                    color: "var(--secondary)"
                                }}
                            >
                                \  <Link to={"/"}>Go Home</Link>
                            </span>
                        </h1>
                        <p>A place to share knowledge and connect</p>
                    </div>
                    <div className={'textCenter'}>Sigup with Email</div>
                    <div className={'inputArea'}>
                        <h4>Name*</h4>
                        <input
                            className='shadow1'
                            type="text"
                            autoComplete='on'
                            placeholder='testuser'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={'inputArea'}>
                        <h4>Email*</h4>
                        <input
                            className='shadow1'
                            type="text"
                            autoComplete='off'
                            placeholder='mail@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={'inputArea'}>
                        <h4>Password*</h4>
                        <input
                            className='shadow1'
                            type="password"
                            autoComplete='on'
                            placeholder='abcdef1.'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={`inputArea file`}>
                        <h4>Profile Image</h4>
                        <input
                            className='shadow1'
                            type="file"
                            name='file'
                            onChange={file}
                            id="img"
                            style={{ display: "none" }}
                            accept="image/*" />
                        {!imgShow && <label htmlFor="img">Upload img</label>}
                        {img && <img src={imgShow} alt="img" />}
                        {
                            imgShow &&
                            <label
                                htmlFor="img"
                                style={{
                                    padding: "0",
                                    border: "none",
                                    background: "var(--primary)",
                                    color: "white",
                                    width: "70px",
                                    margin: "auto"
                                }}
                            >Edit
                            </label>
                        }
                    </div>
                    <div className={'inputArea'}>
                        <button className="btn" onClick={(e) => handlesubmit(e)}>Sign Up</button>
                    </div>

                    <div className={`inputArea link `}>
                        <p>Already have an account?  <Link to="/login">login</Link></p>
                    </div>
                </motion.form>
            </div >

        </div >
    )
}

export default SingupPage