import './style.css'
import { useEffect, useState } from "react";
import { Rating, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import axios from 'axios';

export default function Home() {
    let [index, setIndex] = useState(0)

    const [activity, setActivity] = useState([])
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [name, setName] = useState()
    
    const getData = async () => {
        const response = await axios.get("https://kidozanges.herokuapp.com/api/articles")

        setTitle(response.data[index].title)
        setDescription(response.data[index].description)
        setName(response.data[index].nickname);
        setActivity(response.data)
    
    }

    const handleLeft = () => {
        setIndex(--index)

        if (index < 0) {
            setIndex(activity.length - 1)
        }
    }

    const handleRight = () => {
        setIndex(++index)
        if (index > activity.length - 1) {
            setIndex(0)
        }
    }

    useEffect(() => {
        getData()
    }, [index])


    return (
        <div>

            <section id="slider">

                <div className="box--slider">
                    <div>
                    <Icon className="button-left" name='arrow alternate circle left outline' size='big' onClick={handleLeft} />
                    </div>
                    <div className="box--text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <span>{name}</span>
                    </div>
                    <div>
                        <Icon className="button-right" name='arrow alternate circle right outline' size='big' onClick={handleRight} />
                    </div>

                </div>



            </section>


            <main id="main">

                <section className="box-best--actives">
                    <div className="box-card" >
                        <NavLink className="div-nav" to="/detailactivity/3">
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
                                        tempora eos exercitationem tenetur ullam labore officia eaque iste repellendus illum ipsa omnis, quos illo earum ipsum minima veritatis.
                                    </p>
                                    <button>en savoir  +</button>
                                </div>
                            </article>


                        </NavLink>
                    </div>

                    <div className="box-card" >
                        <NavLink className="div-nav" to="/sqdqsdsqd">
                            <article className="article--main">
                                <div className="text">
                                    <h4>
                                        Titre de l'activité
                                    </h4>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Facere libero a, consequatur cupiditate at dolores provident earum adipisci,
                                        iusto vitae unde laudantium nobis labore natus delectus nemo alias officiis explicabo.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ea nostrum,
                                        tempora eos exercitationem tenetur ullam labore officia eaque iste repellendus illum ipsa omnis, quos illo earum ipsum minima veritatis.
                                    </p>
                                    <button>en savoir  +</button>
                                </div>

                                <div className="box--img--note">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.voR5IYjSALKRwo92e5gKPAHaEK&pid=Api&P=0&w=338&h=191" alt="" />

                                    <Rating className="star-rating" icon='star' defaultRating={3} maxRating={5} />
                                </div>

                            </article>
                        </NavLink>
                    </div>
                </section>
            </main>
        </div>


    )
}