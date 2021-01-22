import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "I like cocktails"
            }, 
               {
                icon: <FaHiking/>,
                title: "free hiking",
                info: "I like hiking"
            },
               {
                icon: <FaShuttleVan/>,
                title: "free shuttle service",
                info: "I like shuttles"
            },
               {
                icon: <FaBeer/>,
                title: "free Jason",
                info: "I like Jason"
            }
        ]
    } 
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((service, idx) => {
                        return <article key={idx} className='service'>
                            <span> {service.icon} </span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>    
                    })}
                </div>
            </section>
        )
    }
}
