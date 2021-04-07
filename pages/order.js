import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { Layout } from "../Layouts";
import styles from "../styles/Order.module.css";
import { TextField, Button } from "@material-ui/core";

import axios from 'axios'

export default function Order() {

	let [submitDisabled,setSubmitDisabled] = useState(true)

	let [fields, setFields] = useState({
		color: "#61FF7E",
		description: "",
		quantity: "",
		image: "",
		imageUrl: "",
		name: "",
		email: "",
		phoneNo: "",
	});

	let imageOnChange = (e) => {
		if (e.target.files[0]) {
			let imgUrl = URL.createObjectURL(e.target.files[0]);
			setFields({ ...fields, image: e.target.files[0], imgUrl });
		}
	};

	let clickHandler = () => {

		let {color,description,quantity,image,name,email,phoneNo} = fields

		let formdata = new FormData()
		formdata.append('color',color)
		formdata.append('description',description)
		formdata.append('quantity',quantity)
		formdata.append('image',image)
		formdata.append('name',name)
		formdata.append('email',email)
		formdata.append('phoneNo',phoneNo)

		axios({
			url: "http://localhost:3000/api/submitInfo",
			method: "post",
			withCredentials: true,
			data: formdata,
		}).then((res) => {
			console.log(res.data)
		});
	};

	useEffect(() => {
		if(fields.color && fields.description && fields.quantity && fields.image && fields.name && fields.email && fields.phoneNo){
			setSubmitDisabled(false)
		}
		else{
			setSubmitDisabled(true)
		}
	}, [fields])

	return (
		<Layout container>
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
						;
					</div>
				</div>
				<h1>Personal Information</h1>
				<div className={styles.formGrid}>
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
								phoneNo: e.target.value,
							})
						}
						value={fields.phoneNo}
						label="Phone Number"
						className={styles.formInput}
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
		</Layout>
	);
}
