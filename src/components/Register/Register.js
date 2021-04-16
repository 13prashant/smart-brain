import { useState } from 'react'

const Register = ({ routeChange, loadUser }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnRegister = () => {
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, email, password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    routeChange('home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80 center">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={handleOnRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="Register"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <a
                                onClick={() => routeChange('signin')}
                                href="#0" className="f6 link dim black db"
                            >Sign In</a>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Register
