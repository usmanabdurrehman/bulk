import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { Layout } from "../Layouts";
import styles from "../styles/WhatWeDealIn.module.css";
import { TextField, Button } from "@material-ui/core";
import {Container} from '../Components'

import axios from 'axios'

export default function Order() {
	return (
		<Layout home colorSchemeFooter={{backgroundColor:'#C2C1C7',color:'black',borderTop:'none'}}>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<div className={styles.heroContent}>
						<h1>What We Deal In</h1>
						<p>These are the custom products that we deal in</p>
					</div>
				</Container>
			</div>
			<Container>
			<div className={styles.completedOrders}>
				<div className={styles.capCategory}>
					<div><img src="/bulk bays orders/IMG-1863.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1859.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1860.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1866.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>P-Caps</h1>
					</div>
				</div>
				<div className={styles.badgeCategory}>
					<div><img src="/bulk bays orders/IMG-1864.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1893.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1896.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1898.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Metal Crafts</h1>
					</div>
				</div>
				<div className={styles.shirtCategory}>
					<div><img src="/bulk bays orders/IMG-1900.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1901.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1902.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1903.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Shirts</h1>
					</div>
				</div>
				<div className={styles.beltsCategory}>
					<div><img src="/bulk bays orders/IMG-1911.jpg"/></div>
					<div><img src="/bulk bays orders/4BE57A5D-6C8D-43F9-813D-8B6BE2363018.jpeg"/></div>
					<div><img src="/bulk bays orders/7EC8D481-7779-4706-9910-CA385D1BC7EF.jpeg"/></div>
					<div className={styles.hoverCover}>
						<h1>Belts</h1>
					</div>
				</div>
				<div className={styles.cordsCategory}>
					<div><img src="/bulk bays orders/0067CFA6-3371-4EEB-A120-F2A5A72233BD.jpeg"/></div>
					<div><img src="/bulk bays orders/74572627-B551-4BE1-A1AA-364510115096.jpeg"/></div>
					<div><img src="/bulk bays orders/IMG-1861.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1897.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Aiguillettes and cords</h1>
					</div>
				</div>
				<div className={styles.jerseyCategory}>
					<div><img src="/bulk bays orders/CEFEE046-4DD9-4F82-95F2-3C468E53DCA8.jpeg"/></div>
					<div><img src="/bulk bays orders/1DE3000E-F086-4E14-8508-F1722DAFC12F.jpeg"/></div>
					<div className={styles.hoverCover}>
						<h1>Jersey Pullover</h1>
					</div>
				</div>
				<div className={styles.embrioderyCategory}>
					<div><img src="/bulk bays orders/IMG-1864.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1905.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1915.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1916.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Embroidery patches</h1>
					</div>
				</div>
				<div className={styles.beretCapsCategory}>
					<div><img src="/bulk bays orders/IMG-1867.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1868.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1869.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1870.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Beret Caps</h1>
					</div>
				</div>
				<div className={styles.sportsKitsCategory}>
					<div><img src="/bulk bays orders/IMG-1854.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1855.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1856.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1857.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Sports Kits</h1>
					</div>
				</div>
				<div className={styles.socksCategory}>
					<div><img src="/bulk bays orders/IMG-1919.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1920.jpg"/></div>
					<div><img src="/bulk bays orders/IMG-1921.jpg"/></div>
					<div className={styles.hoverCover}>
						<h1>Socks</h1>
					</div>
				</div>
			</div>
			</Container>
		</Layout>
	);
}
