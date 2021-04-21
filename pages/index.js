import {useState} from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Line, FlipCard } from "../Components";
import { Layout } from "../Layouts";
import Link from "next/link";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {

	return (
		<Layout
			home
			colorSchemeFooter={{
				backgroundColor: "#50111E",
				color: "white",
				borderTop: "none",
			}}
		>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<div className={styles.heroContent}>
						<h1>Your all in one stop for ordering custom items</h1>
						<Link href="/order">
							<button className={styles.orderHere}>
								<p>Order here</p>{" "}
								<ArrowForwardIosIcon
									className={styles.arrowIcon}
								/>
							</button>
						</Link>
					</div>
				</Container>
			</div>
			<Container>
				<div className={styles.ourServices}>
					<h1 className={styles.centerText}>Our Services</h1>
					<Line />
					<div className={styles.ourServicesWrapper}>
						<FlipCard
							image="/services/custom order.jpg"
							header="Custom Products"
							description="You can get customized products in Bulks"
						/>
						<FlipCard
							image="/services/fast delivery.jpg"
							header="Services"
							description="We provide excellent services for your Business
								without any hassle"
						/>
						<FlipCard
							image="/services/high quality.jpg"
							header="Quality products"
							description="Making sure that the customers are provided with
								quality products"
						/>
					</div>
				</div>
			</Container>
			<div className={styles.counterSection}>
				<Container className={styles.counterGrid}>
					<div>
						<h1>
							<CountUp start={0} end={20} duration={3}>
								{({ countUpRef, start }) => (
									<VisibilitySensor
										onChange={start}
										delayedCall
									>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</h1>{" "}
						<p>Orders active</p>
					</div>
					<div>
						<h1>
							<CountUp start={0} end={203} duration={3}>
								{({ countUpRef, start }) => (
									<VisibilitySensor
										onChange={start}
										delayedCall
									>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</h1>{" "}
						<p>Orders delivered</p>
					</div>
					<div>
						<h1>
							<CountUp start={0} end={305} duration={3}>
								{({ countUpRef, start }) => (
									<VisibilitySensor
										onChange={start}
										delayedCall
									>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</h1>{" "}
						<p>Queries resolved</p>
					</div>
				</Container>
			</div>
			<Container>
				<div className={styles.deliveredOrders}>
					<h1 className={styles.centerText}>Delivered Orders</h1>
					<Line />
					<div className={styles.deliveredOrdersWrapper}>
						<div>
							<img src="/orders completed/t-shirts.jpg" alt="" />
						</div>
						<div>
							<img
								src="/orders completed/dress-shirts.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="/orders completed/hand-crafts.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="/orders completed/cotton-strings.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="/orders completed/neon-signs.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="/orders completed/embriodery.png"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className={styles.about}>
					<div className={styles.aboutWrapper}>
						<h1 className={styles.centerText}>About Me</h1>
						<Line />
						<h3>Hi, My Name is Ahmed Khawaja</h3>
						<p>
							I am a young entrepreneur who is working in this
							field for years. It was about time that I start my
							own venture and bring innovation to the field of
							customized products. I am willing to create anything
							according to the sample image and some general
							specifications.
						</p>
						<p>
							{" "}
							My aim is to change this industry and bring innovate
							products for business owners at a very reasonable
							rate. I am keen on providing amazing products to the
							people and making sure that they get 100% value for
							their money. I would love to provide fast delivery,
							Good price, excellent quality and upto the par
							customer service.
						</p>
					</div>
				</div>
			</Container>
		</Layout>
	);
}
