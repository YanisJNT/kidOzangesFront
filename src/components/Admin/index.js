import './style.css'
import { Icon } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from "axios";
export default function Admin() {


    const [activity, setActivity] = useState(" ")

    const token = localStorage.getItem("token");


    useEffect(() => {
        axios.get("https://kidozanges.herokuapp.com/admin", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setActivity(response.data.activity)
            })
            .catch((error) => {
                console.error(error)
            })
    },[token])

    console.log(activity)

    return (
        <main id="admin">
            <h1>Page Admin</h1>
            <nav>
                <a href="/">Activites</a>
                <a href="/">Commentaires</a>
            </nav>
            <div className="box-autho">
                <section className="box--admin activites">
                    <h3>Activites</h3>
                    <article className="box-activites">
                        <div className="box-text">
                            <h4>qsdqsdsqd</h4>
                            <p>qsdqsdqsdqsd</p>
                        </div>
                        <div className="box-icon">
                            <Icon color="green" name='check circle' />
                            <Icon color="red" name='close' />
                        </div>
                    </article>
                </section>

                <section className="box--admin comment">
                    <h3>Commentaire report</h3>
                    <div></div>
                </section>
            </div>
        </main>
    )
}