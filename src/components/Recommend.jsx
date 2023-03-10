import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/idanrehills.jpeg";
import Destination2 from "../assets/ikogosisprings.jpeg";
import Destination3 from "../assets/lacampagne.jpeg";
import Destination4 from "../assets/lekkiconservation.jpeg";
import Destination5 from "../assets/obuducattle.jpeg";
import Destination6 from "../assets/whispering palms.jpeg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Idanre Hills",
      subTitle:
        "The Idanre hill is well-known for its landscape. Its wide variety on cultural sites as 'Owa's Palace', shrines, The Old Court, Belfry, Agbooogun footprint, thunder water (Omi Apaara) and burial grounds have since brought the location fame and the nation's nomination for the UNESCO World Heritage Site shortlist.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Ikogosi Warm Spring",
      subTitle:
        "The Ikogosi Warm Springs is a tourist attraction located at Ikogosi, a town in Ekiti State, southwestern Nigeria.[1] Flowing abreast the warm spring is another cold spring which meets the warm spring at a confluence, each maintaining its thermal properties.[2] These attributes make the spring a tourist attraction in Nigeria.[3] Research suggested that the warm spring has a temperature of about 70°C at the source and 37°C at the confluence",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "La Campagne Resort",
      subTitle:
        "La Campagne Tropicana Beach Resort, is an African themed beach with lagoon and forest resort located in Lagos Nigeria. With over 65 acres of palm-fringed ..",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Lekki Conservatin  Centre",
      subTitle:
        "Lekki Conservation Centre in Nigeria is a nature reserve in Lagos, one of the most visited tourist attractions in Nigeria. It features a 401-metre-long canopy walkway, the longest in Africa. It includes a picnic haven, sports courts and other facilities to entertain visitors when not on the walks.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Obudu Cattle Ranch",
      subTitle:
        " Obudu Mountain Resort also known as Obudu Cattle Ranch is one of Africa’s finest and most interesting and spectacular tourist destinations. Obudu Mountain Resort is located in the highlands and deep tropical forests of Cross River State with a temperate climate at about 45 miles from the border with Cameroon.",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Whispering Palms",
      subTitle:
        "Whispering Palms is a resort under refreshed management offering a lagoon escape from city life with your choice each day of relaxation, fun or adventure.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
