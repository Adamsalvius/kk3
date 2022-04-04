import React from "react";
import authState from "../stores/auth/atom";
import { Link, Link as RouterLink} from "react-router-dom";
/*  import { Link } from "@mui/material"; 
 import { Link } from "@mui/material";  */
import { useRecoilValue } from "recoil";

function Profile() {
	const { user } = useRecoilValue(authState);

	return (
		<>
			<div>
			
			<div>
				
						
					

							<h4>First name:</h4>
							<h2>{user.name.firstname}</h2>
						
							
							<h2>Surname:{user.name.lastname}</h2>
						
							
						
						
							<h3>Adress:
							
								{user.address.street}: {user.address.number}</h3>
								<h3>zipcode:{user.address.zipcode}</h3>
								<h3>city: {user.address.city}</h3>
						
							<h3>Phonenumber:
							{user.phone}</h3>
						
							<h3>Role:{user.role}</h3>
						
							{user.role === "admin" && (
				<Link component={RouterLink} to="/Admininfo">
					Secret Admin panel
				</Link>
			)}
			
		
	</div>
	</div>
		</>
	);
}

export default Profile;
