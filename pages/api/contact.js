let nodemailer = require("nodemailer");
let multer = require("multer");

export default async function handler(req, res) {
	let { name, email, phoneNo, description } = req.body;

	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "usmanselenbad@gmail.com",
			pass: "CRAZY@@44",
		},
	});

	var myMailOptions = {
		from: "usmanselenbad@gmail.com",
		to: "usmanselenbad@gmail.com",
		subject: "Customer Query",
		html: `	<b>Name: </b>${name}<br/>
			   	<b>Email: </b>${email}<br/>
			   	<b>Phone Number: </b>${phoneNo}<br/>
			   	<b>Message: </b>${description}`,
	};

	var customerMailOptions = {
		from: "usmanselenbad@gmail.com",
		to: email,
		subject: "Your Query",
		html: `	<b> Your Query has been sent. We will contact you within 1 business day for the addressal.</b>
				<b>Name: </b>${name}<br/>
			   	<b>Email: </b>${email}<br/>
			   	<b>Phone Number: </b>${phoneNo}<br/>
			   	<b>Message: </b>${description}`,
	};

	transporter.sendMail(myMailOptions, function(error, info) {
		if (error) {
			res.json({
				status: false,
				msg: "An unexpected problem occured",
				error,
			});
		} else {
			transporter.sendMail(customerMailOptions, function(error, info) {
				if (error) {
					res.json({
						status: false,
						msg: "An unexpected problem occured",
						error,
					});
				} else {
					res.json({
						status: true,
						msg: "Your Order has been placed",
						info,
					});
				}
			});
			res.json({ status: true, msg: "Your Order has been placed", info });
		}
	});
}
