let nodemailer = require("nodemailer");
let multer = require("multer");
let nextConnect = require('next-connect');

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null,  process.cwd() + "/public/uploads");
	},
	filename: function(req, file, cb) {
		let [filename, ext] = file.originalname.split(".");
		req.filename = `${Date.now()}.${ext}`;
		cb(null, req.filename);
	},
});

var upload = multer({ storage: storage });

const apiRoute = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.any())

apiRoute.post((req, res) => {

	let { color, description, quantity, name, email, phoneNo } = req.body;

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
		subject: "Order Placement",
		html: `	<h2>An order has been placed by ${name}</h2>
				<h3>Order Information</h3>
				<img src="cid:image"><br/>
				<b>Description: </b>${description}<br/>
			   	<b>Quantity: </b>${quantity}<br/>
			   	<b>Color(in hex): </b>${color}<br/>

			   	<h3> Profile Information</h3>
				<b>Name: </b>${name}<br/>
			   	<b>Email: </b>${email}<br/>
			   	<b>Phone Number: </b>${phoneNo}<br/>`,
		attachments: [
			{
				filename: req.filename,
				path: process.cwd() + "/public/uploads/" + req.filename,
				cid: "image",
			},
		],
	};

	var customerMailOptions = {
		from: "usmanselenbad@gmail.com",
		to: email,
		subject: "Order Placement",
		html: `	<h2>Congrats your order has been placed with the following description</h2>
				<h3>Order Information</h3>
				<img src="cid:image"><br/>
				<b>Description: </b>${description}<br/>
			   	<b>Quantity: </b>${quantity}<br/>
			   	<b>Color(in hex): </b>${color}<br/>

			   	<h3> Profile Information</h3>
				<b>Name: </b>${name}<br/>
			   	<b>Email: </b>${email}<br/>
			   	<b>Phone Number: </b>${phoneNo}<br/>`,
		attachments: [
			{
				filename: req.filename,
				path: process.cwd() + "/public/uploads/" + req.filename,
				cid: "image",
			},
		],
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
})

export default apiRoute

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};