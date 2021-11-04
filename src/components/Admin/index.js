import './style.css'
import { Icon } from 'semantic-ui-react'

export default function Admin() {

    return (
        <main id="admin">
            <h1>Page Admin</h1>
            <div className="box-autho">
                <section className="box--admin activites">
                    <h3>Activites</h3>
                    <article className="box-activites">
                        <p>qsdqsd</p>
                        <div className="box-icon">
                            <Icon color="green" name='check circle' />
                            <Icon color="red"  name='close' />
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