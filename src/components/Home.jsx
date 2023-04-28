import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TechMoon</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className='home2'>
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est ducimus possimus temporibus, minima ipsam saepe suscipit ratione neque similique tenetur vero sunt explicabo. Iste eligendi eius distinctio repudiandae velit!
                Eum voluptate pariatur minus, saepe quis odit placeat. Iste, maiores velit nihil dignissimos, distinctio sed enim aspernatur consequuntur eveniet tempora animi corporis ipsum sit neque temporibus! Praesentium ut optio ab?
                Error quibusdam qui, officiis possimus nostrum vero sint dolorum amet temporibus velit ad eum, cupiditate vitae placeat minima eveniet expedita aperiam corporis doloribus sunt sit voluptatum? Libero culpa nostrum suscipit.
                </p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay: "1s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  )
}

export default Home