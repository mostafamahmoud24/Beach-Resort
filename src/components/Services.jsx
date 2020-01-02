import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "FREE COCKTAILS",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, eveniet!"
      },
      {
        icon: <FaHiking />,
        title: "ENDLESS HIKING",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, eveniet!"
      },
      {
        icon: <FaShuttleVan />,
        title: "FREE SHUTTLE",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, eveniet!"
      },
      {
        icon: <FaBeer />,
        title: "STRONGEST BEER",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, eveniet!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
