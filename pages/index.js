import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Line } from "../Components";
import { Layout } from "../Layouts";
import Link from 'next/link'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Home() {
	return (
		<Layout>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<h1>Your all in one stop for ordering custom items</h1>
					<Link href="/order"><button className={styles.orderHere}><p>Order here</p>  <ArrowForwardIosIcon className={styles.arrowIcon}/></button></Link>
				</Container>
			</div>
			<Container>
				<div className={styles.ourServices}>
					<h1 className={styles.centerText}>Our Services</h1>
					<Line />
					<div className={styles.ourServicesWrapper}>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<img src="/services/custom order.jpg" />
							<h2>Custom Products</h2>
							<p>You can get customized products in Bulks</p>
						</div>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<img src="/services/fast delivery.jpg" />
							<h2>Services</h2>
							<p>
								We provide excellent services for your Business
								without any hassle
							</p>
						</div>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<img src="/services/high quality.jpg" />
							<h2>Quality products</h2>
							<p>
								Making sure that the customers are provided with
								quality products{" "}
							</p>
						</div>
					</div>
				</div>

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

				<div className={styles.testimonials}>
					<h1 className={styles.centerText}>
						What My Client Have To Say
					</h1>
					<Line />
					<div className={styles.testimonialsWrapper}>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<p>
								"Very good service. The quality of the products
								was good and the packaging was outstanding.
								Apart from that, the service was good as well."
							</p>
							<p>Adam Jerard, Designer</p>
						</div>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<p>
								"I am a businessman and thats why I needs to
								order products in bulk quantities. This was a
								very hard task previously but it can be seen
								that with the passage of time the work has
								become easier through Bulkbays.com"
							</p>
							<p> Shahbaz Waseem Malik, Manager</p>
						</div>
						<div>
							<div className={styles.hoverLineTop}></div>
							<div className={styles.hoverLineBottom}></div>
							<p>
								"They have excellent customer service and it is
								the customer service that makes them stand out
								from the crowd. The quality of the products are
								also far beyond expectations"
							</p>
							<p> Raja jazib Ali, Support</p>
						</div>
					</div>
				</div>
			</Container>

			<div className={styles.brandsWorkedWith}>
				<h1 className={styles.centerText}>Brands I Have Worked With</h1>
				<Line />
				<div className={styles.brandsWorkedWithWrapper}>
					<div className={styles.brandsWorkedWithGrid}>
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<div>
								<img
									src={`/brands worked/${item}.png`}
									alt=""
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<Container>
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
