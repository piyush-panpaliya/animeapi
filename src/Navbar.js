import React,{useState} from 'react'
import {Box,TextField,Button,Typography,Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {POST} from './api.js'

const Navbar = ({children}) => {
	const [state, setState] = useState("")
	const navigate = useNavigate();
	const  change=(tabno)=> {
		navigate("/"+tabno);
	}

	const submit =async(e)=>{
		e.preventDefault();
		const body = {case:"search",search:state };
        try {
            const res = await POST("getanimelist",body);
            console.log(res);
            navigate("/anime/"+res[0].id);
            setState("");
        } catch (err) {
            console.error(err);
        }
	}

	return (
		<Box sx={{bgcolor:"#0b0a0f"}} >
			<Grid conatiner sx={{bgcolor:"orange",width:"100vw",height:"7vh",display:"flex",alignItems:"center"}}>
				<Grid item xs={2.9} md={6.9} sx={{width:"45%",ml:1}}>
					<Typography variant="h4">Aniverse</Typography>
				</Grid>
				<Grid item xs={4} md={4} sx={{width:"10%",display:"flex"}} onClick={()=>change("home")}>
					<Typography variant="h5" sx={{mr:1}}onClick={()=>change("home")}>Home </Typography>
					<Typography variant="h5"> | </Typography>
					<Typography sx={{ml:1}}onClick={()=>change("fun")} variant="h5"> Fun</Typography>
				</Grid>
				<Grid item xs={3} md={3} sx={{display:"flex"}}>
					<form onSubmit={submit}>
						<TextField
					        label="Search Anime"
					        type="search"
					        variant="filled"
					        size="small"
					        value={state}
					        onChange={(e)=>setState(e.target.value)}
					        
					    />
					    <Button type="submit" variant="contained" sx={{width:"45px",height:"45px"}}>
						  1
						</Button>
					</form>
				</Grid>
			</Grid>
			{children}
		</Box>
	)
}

export default Navbar;