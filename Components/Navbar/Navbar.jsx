import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Container } from "../";

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Container className={styles.navWrapper}>
				<div className={styles.logo}>
					<h2>
						<Link href="/">BulkBays</Link>
					</h2>
				</div>
				<div className={styles.nav}>
					<div>
						<Link href="/order">
							<p>Place an order</p>
						</Link>
					</div>
					<div>
						<Link href="/contact">
							<p>Contact Us</p>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}
