import React, { useState, useEffect } from "react";
import { Layout } from "../Layouts";

import styles from "../styles/Contact.module.css";

import { TextField, Button, CircularProgress} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import {Container} from '../Components'

import axios from 'axios'

export default function Contact() {
	let [fields, setFields] = useState({
		name: "",
		email: "",
		phoneNo: "",
		description: "",
	});

	const [isLoading,setIsLoading] = useState(false)

	let clickHandler = () => {
		setIsLoading(true)
		let {
			name,
			email,
			phoneNo,
			description,
		} = fields;
		axios({
			url: "https://bulk.vercel.app/api/contact",
			method: "post",
			withCredentials: true,
			data: fields,
		}).then((res) => {
			setIsLoading(false)
			console.log(res.data);
		});
	};

	return (
		<Layout home colorSchemeFooter={{backgroundColor:'#FDA94E',color:'black',borderTop:'none'}}>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<div className={styles.heroContent}>
						<h1>Contact Us</h1>
						<p>We reply within 24 business hours</p>
					</div>
				</Container>
			</div>
			<Container>
			<div className={styles.contactForm}>
				<div>
					<img src="/ContactUs.png" alt="" className={styles.contactImage}/>
				</div>
				<div className={styles.contactFields}>
				<h1>Contact Us</h1>
				<TextField
					onChange={(e) =>
						setFields({
							...fields,
							name: e.target.value,
						})
					}
					value={fields.name}
					label="Name"
					className={styles.formInput}
					fullWidth
					variant="outlined"
				/>
				<TextField
					onChange={(e) =>
						setFields({
							...fields,
							phoneNo: e.target.value,
						})
					}
					value={fields.phoneNo}
					label="Phone Number"
					className={styles.formInput}
					fullWidth
					variant="outlined"
				/>
				<TextField
					onChange={(e) =>
						setFields({
							...fields,
							email: e.target.value,
						})
					}
					value={fields.email}
					label="Email"
					className={styles.formInput}
					fullWidth
					variant="outlined"
				/>
				<TextField
					onChange={(e) =>
						setFields({
							...fields,
							description: e.target.value,
						})
					}
					value={fields.description}
					label="Your Message"
					multiline
					rows={4}
					className={styles.formInput}
					fullWidth
					variant="outlined"
				/>
				<Button
					onClick={clickHandler}
					fullWidth
					className={styles.submitBtn}
				>
					{isLoading ? <CircularProgress size={20} color='#000000'/> : <div className={styles.buttonText}><p>Send</p> <SendIcon className={styles.sendIcon}/></div>}
				</Button>
			</div>
			</div>
			</Container>
		</Layout>
	);
}
