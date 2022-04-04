import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authState from "../stores/auth/atom";

function Register() {
	const setAuth = useSetRecoilState(authState);
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
		name: {
			firstname: "",
			lastname: "",
		},
		address: {
			city: "Orebro",
			street: "Singelbacken",
			zipcode: "16542",
			number: 28,
		},
		phone: "+47621884329",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://k4backend.osuka.dev/users", user)
			.then((response) => {
				axios
					.post("https://k4backend.osuka.dev/auth/login", {
						username: response.data.username,
						password: response.data.password,
					})
					.then((response) => {
						axios
							.get(
								`https://k4backend.osuka.dev/users/${response.data.userId}`
							)
							.then((userData) => {
								setAuth({
									user: userData.data,
									token: response.data.token,
								});
								navigate("/profile");
							});
					});
			});
	};
	return (
		<>
			<form
				
				onSubmit={handleSubmit}
				component="form"
				
			>
				
					<input
					placeholder="Firstname"
						required
						/* label="First name" */
						value={user.name.firstname}
						onChange={(e) =>
							setUser({
								...user,
								name: {
									...user.name,
									firstname: e.target.value,
								},
							})
						}
					/>
			
				
					<input
						placeholder="lastname"
						required
					/* 	label="Lastname" */
						value={user.name.lastname}
						onChange={(e) =>
							setUser({
								...user,
								name: {
									...user.name,
									lastname: e.target.value,
								},
							})
						}
					/>
				
					<input
						required
						/* label="Email" */
						type="email"
						placeholder="email"
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, email: e.target.value })
						}
					/>
				
					<input
					placeholder="Username"
						required
						label="Username"
						value={user.username}
						onChange={(e) =>
							setUser({ ...user, username: e.target.value })
						}
					/>
				
					<input
					placeholder="Password"
						required
						label="Password"
						type="password"
						value={user.password}
						onChange={(e) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
			

				<button type="submit">Register</button>
			</form>
		</>
	);
}

export default Register;
