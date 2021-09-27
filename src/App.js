import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const recommendations = {
    "Hip-hop🎙": [
      {
        album: "The Off-Season",
        link:
          "https://open.spotify.com/album/4JAvwK4APPArjIsOdGoJXX?autoplay=true",
        artist: "J. Cole",
        year: 2021,
        rating: 4.8
      },
      {
        album: "The Melodic Blue",
        link:
          "https://open.spotify.com/album/3r46DPIQeBQbjvjjV5mXGg?autoplay=true",
        artist: "Baby Keem",
        year: 2021,
        rating: 4.6
      },
      {
        album: "Revenge of the Dreamers III",
        link: "https://open.spotify.com/album/2n3quCZ0anEa46j2IveacI",
        artist: " Dreamville",
        year: 2020,
        rating: 4.5
      },
      {
        album: "Testing",
        link: "https://open.spotify.com/album/3MATDdrpHmQCmuOcozZjDa",
        artist: "A$AP Rocky",
        year: 2018,
        rating: 4
      },
      {
        album: "NOT ALL HEROES WEAR CAPES",
        link: "https://open.spotify.com/album/3IO8IPjwXuzPJnoaqkwYrj",
        artist: "Metro Boomin",
        year: 2018,
        rating: 5
      },

      {
        album: "Astroworld",
        link: "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I",
        artist: "Travis Scott",
        year: 2018,
        rating: 4
      },
      {
        album: "SR3MM",
        link:
          "https://open.spotify.com/album/4vLYreWxd2ptOAzPwTyBI3?autoplay=true",
        artist: "Rae Sremmurd",
        year: 2018,
        rating: 4.5
      },
      {
        album: "DAMN.",
        link: "https://open.spotify.com/album/0bLXUfNT34mna9aXq8ex68",
        artist: "Kendrick Lamar",
        year: 2017,
        rating: 4.5
      },
      {
        album: "Without Warning",
        link:
          "https://open.spotify.com/album/0MV1yCXcNNQBfwApqAVkH0?autoplay=true",
        artist: "21 Savage, Metro Boomin, Offset",
        year: 2017,
        rating: 5
      },
      {
        album: "All-Amerikkkan Bada$$",
        link:
          "https://open.spotify.com/album/2ZmDoyNYarmubD4vTfwh6g?autoplay=true",
        artist: "Joey Bada$$",
        year: 2017,
        rating: 4.7
      },
      {
        album: "Double or Nothing",
        link:
          "https://open.spotify.com/album/2jGYXB8sZathOM5zsQWI7J?autoplay=true",
        artist: "Big Sean, Metro Boomin",
        year: 2017,
        rating: 5
      },
      {
        album: "Savage Mode",
        link:
          "https://open.spotify.com/album/4I3EcXD4e3KcEoDJfFEZ5b?autoplay=true",
        artist: "21 Savage, Metro Boomin",
        year: 2016,
        rating: 4.8
      },
      {
        album: "At. Long. Last. ASAP",
        artist: "A$AP Rocky",
        link:
          "https://open.spotify.com/album/3arNdjotCvtiiLFfjKngMc?autoplay=true",
        year: 2015,
        rating: "5"
      },
      {
        album: "The Lost Boy",
        link:
          "https://open.spotify.com/album/6Pb7PMZtW0fuEM1lCGvCDu?autoplay=true",
        artist: "Cordae",
        year: 2015,
        rating: "4.8"
      }
    ],
    "Alt/indie 🎸": [
      {
        album: "Wild Heart",
        link:
          "https://open.spotify.com/album/14FGilar8X2PCvelbjX4tZ?autoplay=true",
        artist: "Current Joys",
        year: 2021,
        rating: 5
      },
      {
        album: "No Future",
        link:
          "https://open.spotify.com/album/14FGilar8X2PCvelbjX4tZ?autoplay=true",
        artist: "EDEN",
        year: 2020,
        rating: 4.5
      },

      {
        album: "The Slow Rush",
        link:
          "https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL?autoplay=true",
        artist: "Tame Impala",
        year: 2020,
        rating: 4.7
      },
      {
        album: "Room To Breathe",
        link:
          "https://open.spotify.com/album/04CTWwGzy7YGt4NLycCQcJ?autoplay=true",
        artist: "Low Hum",
        year: 2019,
        rating: 4.3
      },

      {
        album: "Moon Monsoon",
        link:
          "https://open.spotify.com/album/4ZYUwV9g7DEla7cOwq1eaq?autoplay=true",
        artist: "Moon Monsoon",
        year: 2019,
        rating: 4.7
      },
      {
        album: "Smooth Big Cat",
        link:
          "https://open.spotify.com/album/3vb4dMvsa3ZZb1smeZPOPA?autoplay=true",
        artist: "Dope Lemon",
        year: 2019,
        rating: 4.4
      },
      {
        album: "Foreplay",
        link:
          "https://open.spotify.com/album/4jaLT2amEyHRGz1EdGyvUy?autoplay=true",
        artist: "Mild Orange",
        year: 2018,
        rating: 5
      },
      {
        album: "A Different Age",
        link:
          "https://open.spotify.com/album/60XCXi2YJ0jNw72nIV2lYs?autoplay=true",
        artist: "Current Joys",
        year: 2018,
        rating: 4.5
      },
      {
        album: "Vertigo",
        link:
          "https://open.spotify.com/album/2Dbm63Nwx511E4HclnQto6?autoplay=true",
        artist: "EDEN",
        year: 2018,
        rating: 5
      },
      {
        album: "LIFE & LOVE",
        link:
          "https://open.spotify.com/album/4XUQIBFGgxMSlkMZzjNWpj?autoplay=true",
        artist: "Skinshape",
        year: 2017,
        rating: 4.5
      },
      {
        album: "Syre",
        link:
          "https://open.spotify.com/artist/0xOeVMOz2fVg5BJY3N6akT?autoplay=true",
        artist: "Jaden Smith",
        year: 2017,
        rating: 3.9
      },
      {
        album: "Currents",
        link:
          "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?autoplay=true",
        artist: "Tame Impala",
        year: 2015,
        rating: 4.9
      },
      {
        album: "Total Life Forever",
        link:
          "https://open.spotify.com/album/5Vtuv8sBTytGJ1YdYWfmko?autoplay=true",
        artist: "Foals",
        year: 2010,
        rating: 4.8
      },
      {
        album: "Favourite Worst Nightmare",
        link:
          "https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?autoplay=true",
        artist: "Arctic Monkeys",
        year: 2007,
        rating: 4.4
      }
    ],
    "R&B/Soul 🎺": [
      {
        album: "Nectar",
        link:
          "https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX?autoplay=true",
        artist: "Joji",
        year: 2020,
        rating: 4.5
      },
      {
        album: "Modus Vivendi",
        link:
          "https://open.spotify.com/album/6Q2rUMVAKj1DaDh3xB0IEU?autoplay=true",
        artist: "070 Shake",
        year: 2020,
        rating: 3.9
      },
      {
        album: '"Awaken, My Love!"',
        link:
          "https://open.spotify.com/album/4Carzsnpd6yvuHZ49I0oz8?autoplay=true",
        artist: "Childish Gambino",
        year: 2016,
        rating: 3.9
      },
      {
        album: "Say Less",
        link:
          "https://open.spotify.com/album/6BXDMsoy2zam0un1DTMp9U?autoplay=true",
        artist: "Roy Woods",
        year: 2017,
        rating: 4.5
      },
      {
        album: "Blonde",
        link:
          "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?autoplay=true",
        artist: "Frank Ocean",
        year: 2016,
        rating: 4.9
      },
      {
        album: "Beauty Behind the Madness",
        link:
          "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s?autoplay=true",
        artist: "The Weeknd",
        year: 2015,
        rating: 4
      },
      {
        album: "House of Balloons",
        link:
          "https://open.spotify.com/album/7zCODUHkfuRxsUjtuzNqbd?autoplay=true",
        artist: "The Weeknd",
        year: 2011,
        rating: 5
      },
      {
        album: "Channel Orange",
        link:
          "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8?autoplay=true",
        artist: "Frank Ocean",
        year: 2012,
        rating: 4.8
      }
    ],
    "Pop 🎹": [
      {
        album: "After Hours",
        link:
          "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj?autoplay=true",
        artist: "The Weeknd",
        year: 2020,
        rating: 4.8
      },
      {
        album: "Oncle Jazz",
        link:
          "https://open.spotify.com/album/4W4gNYa4tt3t8V6FmONWEK?autoplay=true",
        artist: "Men I Trust",
        year: 2019,
        rating: 4
      },
      {
        album: "Ballads 1",
        link:
          "https://open.spotify.com/album/34GQP3dILpyCN018y2k61L?autoplay=true",
        artist: "Joji",
        year: 2018,
        rating: 5
      },
      {
        album: "Harmless Melodies",
        link:
          "https://open.spotify.com/album/5CPwacWmIAaA5DLUq7EHUC?autoplay=true",
        artist: "Yellow Days",
        year: 2016,
        rating: 4.8
      },
      {
        album: "Plastic beach",
        link:
          "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8?autoplay=true",
        artist: "Gorillaz",
        year: 2010,
        rating: 4
      }
    ]
  };

  const [recommendation, setRecommendation] = useState([]);
  const [genre, setGenre] = useState("");
  const foot = document.querySelector("#foot");
  const clickhandler = function (item) {
    setRecommendation(recommendations[item]);
    setGenre(item);
    foot.style.display = "block";
  };

  return (
    <div className="App">
      <h1>genreZ</h1>
      <p>
        {" "}
        A music album recommendation app made using <i>React JS.</i> <br />
        Click on the tile to go to the album on Spotify.{" "}
      </p>
      <h2> Genres </h2>
      <hr />
      <div>
        {Object.keys(recommendations).map((item) => {
          return <button onClick={() => clickhandler(item)}>{item}</button>;
        })}
      </div>

      <div>
        {recommendation.length > 0 && (
          <p>
            Here are some recommendations for{" "}
            <i style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{genre}</i>{" "}
            Album:
          </p>
        )}
        <ul>
          {recommendation.map((item, idx) => {
            return (
              <React.Fragment>
                <li key={idx.album}>
                  <a id="spotifyLink" href={item.link}>
                    <div className="album"> {item.album} </div>
                    <div className="artist"> {item.artist} </div>
                    <div className="year"> {item.year}</div>
                    <div className="rating">rating: {item.rating}/5</div>
                  </a>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
