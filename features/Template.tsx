import Head from 'next/head'
import Image from 'next/image'
import AirportCodes from '../features/AirportCodes'
import styles from '../styles/Home.module.css'

export type TemplateProps = {
	children: React.ReactNode;
	title?: string;
	description?: string;
}

export default function Template(props: TemplateProps) {

	const {
		title,
		description
	} = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>{title || 'VatKan'}</title>
				<meta name="description" content={description || 'Cheat sheet for Vatsim ground control'} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{props.children}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					VatKan by Kerkness
				</a>
			</footer>
		</div>
	)
}
