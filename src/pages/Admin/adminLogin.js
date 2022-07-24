import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { admin_login } from '../../redux/actions/adminActions'

const AdminLogin = ({ history }) => {
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const adminAuth = useSelector((state) => state.adminAuth)
	const { loading, adminDetail } = adminAuth

	const redirect = '/admin/dashboard'

	const ViewHandler = () => {
		let pass = document.getElementById('password')
		let view = document.getElementById('view')
		const type = pass.getAttribute('type') === 'password' ? 'text' : 'password'
		pass.setAttribute('type', type)

		// toggle the eye / eye slash icon
		view.classList.toggle('fa-eye-slash')
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(admin_login(email, password))
	}

	useEffect(() => {
		if (adminDetail) {
			history.push(redirect)
		}
	}, [history, redirect, adminDetail])

	return (
		<section id='bg-blue'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-6'>
						<div className='header-div'>
							<div className='header-div2'>
								<img src={Logo} alt='company logo' className='img-logo' />
								<p>Bridge Order</p>
							</div>
						</div>

						<div className='body-div'>
							<div>
								<h5 className='text-center text-white mb-5'>ADMIN LOGIN</h5>
								<form onSubmit={submitHandler}>
									<input
										type='email'
										placeholder='Email'
										className='form-control mb-3'
										onChange={(e) => setEmail(e.target.value)}
									/>
									<input
										type='password'
										id='password'
										placeholder='Password'
										className='form-control mb-5'
										onChange={(e) => setPassword(e.target.value)}
									/>
									<i
										className='fa fa-eye form-icon'
										id='view'
										onClick={ViewHandler}
									></i>

									<button
										type='submit'
										className='btn form-control btn-primary mb-3'
									>
										LOG IN{' '}
										{loading && <i className='fas fa-spinner fa-spin'></i>}
									</button>

									<div className='text-center mb-3'>
										<Link className='text-white link' to='/forgot-password'>
											Forgot My Password
										</Link>
									</div>

									<div className='sublinks mt-4'>
										<Link to='#'>Terms of use | </Link>
										<Link to='#'>Privacy policy | </Link>
										<Link to='#'>Contact us</Link>
									</div>
								</form>
							</div>
						</div>

						<div className='text-center foot'>
							<p>Powered by The Bridge Hospitality Consult</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AdminLogin
