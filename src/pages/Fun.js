import React,{useState} from 'react'
import {Box,Button,Paper,Grid,TextField,Stack} from '@mui/material'
const rga = require("../../node_modules/random-gif-api")

const Fun = () => {
	const [link, setlink] = useState({anime:"",quote:"",character:""})
	const [img, setimg] = useState("")
	const click= async()=>{
        try {
            const res = await(await fetch("https://animechan.vercel.app/api/random")).json();
            setlink(res);
            console.log(res);
        } catch (err) {
            console.error(err);
        }

	}
	const clicki= async()=>{
        try {
            const res = await rga.kiss();
            setimg(res);
            console.log(res);
        } catch (err) {
            console.error(err);
        }

	}
	return (
		<Box sx={{height:"90vh" ,bgcolor:"#0b0a0f",mt:2,overflowX:"hidden"}} >
			<Grid container spacing={8}>
				<Grid item xs={12}  md={6}>			
					<Paper elevation={3} sx={{height:"75vh",borderRadius:2,bgcolor:"transparent",border:"30px",mt:15,width:"90%",ml:3}}>
						<Stack sx={{width:"450px"}}>
							<Box sx={{height:"150px",bgcolor:"white",width:"100%",p:1}}><h4>{link.quote}</h4></Box>
						    <TextField
						        id="standard-search"
						        variant="outlined"
						        size="medium"
						        sx={{width:"104%",my:4,bgcolor:"white"}}
						        value={link.anime+" | "+link.character}
						    />
					   		<Button  onClick={()=>click()} variant="contained" size="medium" sx={{ml:13,width:"200px",bgcolor:"#3500D3"}}>get</Button>
						</Stack>
					</Paper>
				</Grid>
				<Grid item xs={26} md={6}>
					<h2>Gif</h2>
					<Paper elevation={3} sx={{height:"60vh",borderRadius:2,bgcolor:"#18191a",mx:5,mt:4}}>
						<img alt="gif" src={img} width="100%" />
					</Paper>
					<Button  onClick={()=>clicki()} variant="contained" size="medium" sx={{mt:5,ml:"200px",width:"90px",bgcolor:"#3500D3"}}>get</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Fun