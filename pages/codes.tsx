import React from "react";
import Template from '../features/Template';
import AirportCodes from "../features/AirportCodes";
import styles from '../styles/Home.module.css'


export default function Codes() {
    return <Template>
        <main>
            <h1 className={styles.title}>
                Aviation Codes
            </h1>

            <p className={styles.description}>
                Find airport ICAO and Airline Callsigns
            </p>

            <AirportCodes />

        </main>

    </Template>

}