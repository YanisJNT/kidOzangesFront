import './style.css'
import { Rating } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Header() {


    return (
        <main id="main">
            <article className="article--main">
                <h2>Pas envie de sortir ?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure quibusdam,
                    dolorem adipisci quae ratione unde, dolor, dolores repudiandae sunt blanditiis
                    autem ipsam necessitatibus pariatur incidunt! Omnis perspiciatis animi illum?
                </p>
            </article>


            <section className="box-best--actives">

                <div className="box-card" >
                    <NavLink className="div-nav" to="/sqdqsdsqd">
                        <article className="article--main">
                            <div className="box--img--note">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191" alt="" />

                                <Rating className="star-rating" icon='star' defaultRating={3} maxRating={5} />
                            </div>


                            <div className="text">
                                <h4>
                                    Titre de l'activité
                                </h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Facere libero a, consequatur cupiditate at dolores provident earum adipisci,
                                    iusto vitae unde laudantium nobis labore natus delectus nemo alias officiis explicabo.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ea nostrum,
                                    tempora eos exercitationem tenetur ullam labore officia eaque iste repellendus illum ipsa omnis, quos illo earum ipsum minima veritatis.</p>
                            </div>

                        </article>
                    </NavLink>
                </div>

                <div className="box-card" >
                    <NavLink className="div-nav" to="/sqdqsdsqd">
                        <article className="article--main">
                            <div className="box--img--note">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191" alt="" />

                                <Rating className="star-rating" icon='star' defaultRating={3} maxRating={5} />
                            </div>


                            <div className="text">
                                <h4>
                                    Titre de l'activité
                                </h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Facere libero a, consequatur cupiditate at dolores provident earum adipisci,
                                    iusto vitae unde laudantium nobis labore natus delectus nemo alias officiis explicabo.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ea nostrum,
                                    tempora eos exercitationem tenetur ullam labore officia eaque iste repellendus illum ipsa omnis, quos illo earum ipsum minima veritatis.</p>
                            </div>

                        </article>
                    </NavLink>
                </div>
            </section>
        </main>
    )
}