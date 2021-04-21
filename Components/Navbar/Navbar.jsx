import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Container } from "../";

export default function Navbar({home,isLight}) {
	return (
		<div className={styles.navbar} style={{position:'relative',color:isLight?'white':'black',...(home && {position:'absolute',top:0,left:0,width:'100%',background:'transparent'})}}>
			<Container className={styles.navWrapper}>
				<div className={styles.logo}>
					<h2>
						<Link href="/">BulkBays</Link>
					</h2>
				</div>
				<div className={styles.nav}>
					<div>
						<Link href="/order">
							<p style={{color:isLight?'white':'black'}}>Place An Order</p>
						</Link>
					</div>
					<div>
						<Link href="/whatWeDealIn">
							<p style={{color:isLight?'white':'black'}}>What We Deal In</p>
						</Link>
					</div>
					<div>
						<Link href="/contact">
							<p style={{color:isLight?'white':'black'}}>Contact Us</p>
						</Link>
					</div>	
				</div>
				{home && <div className={styles.lineWrapper}><div className={styles.line} style={{backgroundColor:isLight?'white':'black'}}></div></div>}
			</Container>
		</div>
	);
}
