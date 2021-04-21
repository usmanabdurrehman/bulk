import React, { useState, useEffect } from "react";
import { Navbar, Footer, Containe, Chat } from "../Components";
import styles from "./Layout.module.css";
import { Fab, Popover } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

import Router from 'next/router';

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Layout({
	container,
	children,
	home,
	isLight,
	colorSchemeFooter,
}) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	useEffect(() => {
		return () => {
			localStorage.removeItem("messages")
		};
	},[])

	return (
		<div className={styles.layout}>
			<Navbar home={home} isLight={isLight} />
			<div
				className={styles.layoutContainer}
				style={{ padding: home ? "0" : "30px 0" }}
			>
				{container ? (
					<Container>{children}</Container>
				) : (
					<>{children}</>
				)}
			</div>
			<Footer colorSchemeFooter={colorSchemeFooter} />
			<Fab className={styles.fab}>
				<EmailIcon className={styles.icon} onClick={handleClick} />
			</Fab>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
			>
				<Chat/>
			</Popover>
		</div>
	);
}
