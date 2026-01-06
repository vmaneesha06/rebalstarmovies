const movies = [{
        id: 1,
        title: "Eeswar",
        year: 2002,
        screenTime: "2h 40m",
        poster: "images/Eeswar_film_poster.jpg",
        description: "A young man fights against injustice in society.",
        trailer: "https://youtu.be/gTA9ghC4ehs?si=C0rqjzfyGrxXDXfg"
    },
    {
        id: 2,
        title: "Raghavendra",
        year: 2003,
        screenTime: "2h 05m",
        poster: "images/raghavendra movie poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/3v31aqqLa9Y?si=NBc6nbX7QjHd7iRu"
    },
    {
        id: 3,
        title: "Varsham",
        year: 2004,
        screenTime: "2h 45m",
        poster: "images/Varsham_2004_poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/f8wRhgAIiMc?si=RAxEoDXsyQG9sYR4"
    },
    {
        id: 4,
        title: "Adavi Ramudu",
        year: 2004,
        screenTime: "2h 45m",
        poster: "images/adaviramudu movie poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/SZ0wGzc3Spg?si=WPo9YIW7QEXRS7Wp"
    },
    {
        id: 5,
        title: "Chakram",
        year: 2005,
        screenTime: "2h 45m",
        poster: "images/chakram movie poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/nKFfPERyyZw?si=_A5OYvGiXUNcsqc0"
    },
    {
        id: 6,
        title: "Chatrapathi",
        year: 2005,
        screenTime: "2h 45m",
        poster: "images/chatrapathi.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/gBkL9foQxBk?si=0lZncR5uYZpfuk8m"
    },
    {
        id: 7,
        title: "Pournami",
        year: 2006,
        screenTime: "2h 45m",
        poster: "images/Paurnami_poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/Tnn2E_SsGOs?si=o8tU6MlvA_XarcRf"
    },
    {
        id: 8,
        title: "Yogi",
        year: 2007,
        screenTime: "2h 45m",
        poster: "images/Yogi.movie poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/maT6WQG22WI?si=HfRf8U4tOyVBNkaq"
    },
    {
        id: 9,
        title: "Munna",
        year: 2007,
        screenTime: "2h 45m",
        poster: "images/munna poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/ZGhCyBCBrWs?si=4neoQKi5y88uoG7d"
    },
    {
        id: 10,
        title: "Bujjigadu",
        year: 2008,
        screenTime: "2h 45m",
        poster: "images/bujjigadu poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/h0dybrN-8Ys?si=SngYqY2o1AwMqsVV"
    },
    {
        id: 11,
        title: "Billa",
        year: 2009,
        screenTime: "2h 45m",
        poster: "images/billa poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/3ige8xsvwsA?si=Pyu-fDIAxO_OLTvd"
    },
    {
        id: 12,
        title: "Ek Niranjan",
        year: 2009,
        screenTime: "2h 45m",
        poster: "images/ekniranjan poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/f9SIFownXUk?si=h7S0XIllaofLY8mH"
    },
    {
        id: 13,
        title: "Darling",
        year: 2010,
        screenTime: "2h 45m",
        poster: "images/darling poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/azgPYXHogQA?si=E96zcFdXaV7RgZuE"
    },
    {
        id: 14,
        title: "Mr.Prefect",
        year: 2011,
        screenTime: "2h 45m",
        poster: "images/mrperfect poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/KAcOQ5gvSC8?si=OQoKWOTJWW3GOQCS"
    },
    {
        id: 15,
        title: "Rebel",
        year: 2012,
        screenTime: "2h 45m",
        poster: "images/rebel-movie-poster.webp",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/nf1OpDXnrCc?si=8HKPB65bsmeN0q7z"
    },
    {
        id: 16,
        title: "Mirchi",
        year: 2013,
        screenTime: "2h 45m",
        poster: "images/mirchi poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://youtu.be/Tpwu8WVtG-s?si=aC1kRtB4fv55MoOU"
    },
    {
        id: 17,
        title: "Baahubali:The Beginning",
        year: 2015,
        screenTime: "2h 45m",
        poster: "images/baahubali1 poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI"
    },
    {
        id: 18,
        title: "Baahubali 2:The conclusion",
        year: 2017,
        screenTime: "2h 45m",
        poster: "images/baahubali2 poster.webp",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=G62HrubdD6o"
    },
    {
        id: 19,
        title: "Sahoo",
        year: 2019,
        screenTime: "2h 45m",
        poster: "images/saaho poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=mNgh3nn8a8Q"
    },
    {
        id: 20,
        title: "Radhe shyam",
        year: 2022,
        screenTime: "2h 45m",
        poster: "images/radheshyam poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=ZAP6q_Zv-4g"
    },
    {
        id: 21,
        title: "Adipurush",
        year: 2023,
        screenTime: "2h 45m",
        poster: "images/adipurush-movie-poster.webp",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=scNmYjoR-qM"
    },
    {
        id: 22,
        title: "Salaar:Part 1-Ceasefire",
        year: 2023,
        screenTime: "2h 45m",
        poster: "images/salaar poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=bUR_FKt7Iso"
    },
    {
        id: 23,
        title: "Kalki 2898 AD",
        year: 2024,
        screenTime: "2h 45m",
        poster: "images/kalki poster.jpg",
        description: "A man takes revenge after losing his family.",
        trailer: "https://www.youtube.com/watch?v=kQDd1AhGIHk"
    },
    {
        id: 24,
        title: "Rajasaab",
        year: 2026,
        screenTime: "2h 45m",
        poster: "images/rajasaab.jpeg",
        description: "The Raja Saab is an upcoming romantic horror-comedy directed by Maruthi and stars Prabhas in a fun and entertaining role. The film is expected to present Prabhas in a lighter, youthful avatar after several intense action films. The story is said to revolve around a royal setting mixed with romance, comedy, and supernatural elements. Humor plays an important role alongside suspense and fantasy. Prabhas’s character is expected to balance charm, fear, and heroism. The film aims to entertain family and youth audiences alike. Romantic moments are blended with spooky situations for comic effect. Visuals and set design are expected to reflect a royal and mysterious atmosphere. Music is expected to add freshness and fun to the narrative. The Raja Saab is anticipated for showing Prabhas in a different and refreshing genre.",
        trailer: "https://youtu.be/E08GZ3pFlnk?si=7z36bfKF2g1reg1b"
    },
    {
        id: 25,
        title: "Spirit",
        year: 2026,
        screenTime: "2h 45m",
        poster: "images/spirit.jpeg",
        description: "Spirit is an upcoming action drama that marks Prabhas’s collaboration with director Sandeep Reddy Vanga. The film is expected to present Prabhas in a raw, intense, and aggressive avatar unlike his recent roles. Spirit is rumored to focus on a powerful character driven by strong emotions and inner conflict. The story is expected to explore themes such as anger, identity, justice, and personal transformation. Prabhas’s role is said to be bold and performance-oriented. The narrative is expected to be dark and emotionally intense. High-voltage action sequences are likely to play a major role. The film aims to show the psychological depth of the protagonist. Music and background score are expected to enhance the intensity. Spirit is highly anticipated due to the director’s distinct storytelling style. The movie is expected to redefine Prabhas’s on-screen image. Spirit is one of the most awaited films in Prabhas’s career.",
        trailer: "https://youtu.be/VCGVPiD4BP0?si=i2in3n3Lr7HM3rcK"
    }
];

const container = document.getElementById("movieContainer");
const searchInput = document.getElementById("search");

function renderMovies(list) {
    container.innerHTML = "";
    list.forEach(movie => {
        container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}">
        <div class="info">
          <h3>${movie.title}</h3>
          <p>${movie.year}</p>
          <a href="movie.html?id=${movie.id}">▶ View Details</a>
        </div>
      </div>
    `;
    });
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    renderMovies(movies.filter(m => m.title.toLowerCase().includes(value)));
});

renderMovies(movies);