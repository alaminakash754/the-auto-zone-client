import { Link, useNavigate } from "react-router-dom";
import { AutoZoneContext } from "../../providers/UserProvider";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Signup = () => {
    const [signUpError, setSignUpError] = useState('');
    const [successSignUp, setSuccessSignUp] = useState('')

    const navigate = useNavigate();
    const { createUser, logOut } = useContext(AutoZoneContext);

    const handleSignUp = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        setSignUpError('');
        setSuccessSignUp('');

        if (password.length < 6) {
            setSignUpError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be more than six character',

            }));

            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be one capital letter',

            }));

            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>\s]/.test(password)) {
            setSignUpError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be one capital letter',
            }));

            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = {email};
                fetch(' http://localhost:5000/user',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                e.target.reset();
                setSuccessSignUp(Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                }))
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated')
                    })
                    .catch(error => {
                        console.error(error)
                    });
                logOut();
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-gray-400 mb-3">SignUp Here now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p>Already have an account? <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                        </div>
                        {
                            signUpError && <p className="text-red-700">{signUpError}</p>
                        }
                        {
                            successSignUp && <p className="text-green-700">{successSignUp}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;