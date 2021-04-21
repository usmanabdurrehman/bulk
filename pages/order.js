import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { Layout } from "../Layouts";
import styles from "../styles/Order.module.css";
import { TextField, Button } from "@material-ui/core";
import {Container} from '../Components'

import axios from 'axios'

export default function Order() {

	let [submitDisabled,setSubmitDisabled] = useState(true)

	let [fields, setFields] = useState({
		color: "#0e305d",
		description: "",
		quantity: "",
		image: "",
		imageUrl: "",
		name: "",
		email: "",
		phoneNo: "",
		address:""
	});

	let imageOnChange = (e) => {
		if (e.target.files[0]) {
			let imgUrl = URL.createObjectURL(e.target.files[0]);
			setFields({ ...fields, image: e.target.files[0], imgUrl });
		}
	};

	let clickHandler = () => {

		let {color,description,quantity,image,name,email,phoneNo,address} = fields

		let formdata = new FormData()
		formdata.append('color',color)
		formdata.append('description',description)
		formdata.append('quantity',quantity)
		formdata.append('image',image)
		formdata.append('name',name)
		formdata.append('address',address)
		formdata.append('email',email)
		formdata.append('phoneNo',phoneNo)

		axios({
			url: "https://bulk.vercel.app/api/submitInfo",
			method: "post",
			withCredentials: true,
			data: formdata,
		}).then((res) => {
			console.log(res.data)
		});
	};

	useEffect(() => {
		if(fields.color && fields.description && fields.quantity && fields.image && fields.name && fields.address && fields.email){
			setSubmitDisabled(false)
		}
		else{
			setSubmitDisabled(true)
		}
	}, [fields])

	return (
		<Layout home isLight colorSchemeFooter={{backgroundColor:'#181713',color:'white',borderTop:'none'}}>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<div className={styles.heroContent}>
						<h1>Place An Order</h1>
						<p>We try to deliver as soon as possible</p>
					</div>
				</Container>
			</div>
			<Container>
			<div className={styles.orderForm}>
				<h1>Order Details</h1>
				<div className={styles.formGrid}>
					<div className={styles.profileImageWrapper}>
						<div className={styles.fileWrapper}>
							<input
								type="file"
								id={styles.image}
								onChange={imageOnChange}
							/>
							<label for={styles.image}>
								<img
									src={
										fields.imgUrl
											? fields.imgUrl
											: "/default.jpg"
									}
								/>
							</label>
						</div>
					</div>
					<div>
						<div>
							<TextField
								onChange={(e) =>
									setFields({
										...fields,
										description: e.target.value,
									})
								}
								value={fields.description}
								label="Description"
								multiline
								rows={4}
								className={styles.formInput}
								fullWidth
								variant="outlined"
								required
							/>
							<TextField
								onChange={(e) =>
									setFields({
										...fields,
										quantity: parseInt(e.target.value),
									})
								}
								value={fields.quantity}
								label="Quantity"
								className={styles.formInput}
								type="number"
								fullWidth
								variant="outlined"
								required
							/>
						</div>
					</div>
					<div>
						<SketchPicker
							color={fields.color}
							onChangeComplete={(color) => {
								setFields({ ...fields, color: color.hex });
							}}
						/>
					</div>
				</div>
				<h1>Personal Information</h1>
				<div className={styles.personalInfoGrid}>
					<TextField
						onChange={(e) =>
							setFields({
								...fields,
								name: e.target.value,
							})
						}
						value={fields.name}
						label="Name"
						fullWidth
						variant="outlined"
						required
					/>
					<TextField
						onChange={(e) =>
							setFields({
								...fields,
								address: e.target.value,
							})
						}
						value={fields.address}
						label="Address"
						fullWidth
						variant="outlined"
						required
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
						fullWidth
						variant="outlined"
						required
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
						fullWidth
						variant="outlined"
					/>
				</div>
				<Button
					onClick={clickHandler}
					fullWidth
					className={styles.submitBtn}
					disabled = {submitDisabled}
				>
					Submit
				</Button>
			</div>
			</Container>
		</Layout>
	);
}
