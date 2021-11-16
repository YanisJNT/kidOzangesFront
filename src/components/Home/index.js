import './style.css'
import { useEffect, useState } from "react";
import { Rating, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import axios from 'axios';

export default function Home() {
    useEffect(() => {
        document.title = "Accueil"
     }, []);
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

    const [bestActivities, setbestActivities] = useState([])


    useEffect(() => {
        axios.get(`https://kidozanges.herokuapp.com/api/topratedactivities`)
            .then((response) => {
                
                setbestActivities(response.data)
                
            })
            .catch((error) => {
                console.error(error)
            })
    },[])
    
    


    return (
        <div>

            <section id="slider">
                <h2 className="body--title">
                    Pas envie de sortir?
                </h2>
                < p className = "body--text" >
                    Nous vous proposons ci-dessous quelques idées d'activités d'intérieur, pour les week-ends pluvieux!
                </p>
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
            < h2 className = "body--title" >
                Les activités les mieux notées actuellement: 
            </h2>
           { 
               bestActivities.map((data) => {
                   console.log(bestActivities)
                return(
                <div className="box-card"
                     key={data.activity_id}
                >
               
                <NavLink className="div-nav" to={`/detailactivity/${data.activity_id}`}>
                    <article className="article--main">
                        <div className="text">
                            <h4>
                                {data.title}
                            </h4>
                            <p>
                                {data.description}
                            </p>
                            <button className="article--button">En savoir plus</button>
                        </div>

                        <div className="box--img--note">
                            <img src={data.url} alt="" width="500" height="300" />

                            <p>Note moyenne: {data.moyenne}/5</p>
                        </div>

                    </article>
                </NavLink>
            </div>
                )
            })

        }

            </main>
        </div>


    )
}