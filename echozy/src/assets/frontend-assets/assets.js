import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from '../landing-page/1989.png'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import song4 from  './song4.mp3'
import song5 from  './song5.mp3'
import timg1 from "../landing-page/1989.png"
import timg2 from "../landing-page/ff.png"
import timg3 from "../landing-page/tl.png"
import timg4 from "../landing-page/tp.png"
import timg5 from "../landing-page/wfo1.png"
import timg6 from "../landing-page/wfo.png"
export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 Pakistan",
        image: timg2,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#ffffff2d"
    },
    {   
        id:2,
        name: "Trending Pakistan",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "die with a smile",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "fortnight",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "expresso",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "thats so true",
        image: img4,
        file:song4,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "chihirio",
        image: img5,
        file:song5,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "FALSE",
        image: img14    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "but daddy i love him",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Cardigan",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]
export const taylorsData = [
  {
    id: 0,
    name: "Style",
    image: timg1,
    file: song1,
    desc: "1989 energy — sleek, timeless, and effortlessly cool.",
    duration: "3:51"
  },
  {
    id: 1,
    name: "Look What You Made Me Do",
    image: timg4,
    file: song2,
    desc: "Reputation strikes back — venomous and victorious.",
    duration: "3:31"
  },
  {
    id: 2,
    name: "Cruel Summer",
    image: timg3,
    file: song3,
    desc: "Lover’s anthem — glittery, urgent, and dangerously fun.",
    duration: "2:58"
  },
  {
    id: 3,
    name: "All Too Well (10 Min Version)",
    image: timg3,
    file: song1,
    desc: "A masterpiece from the vault — pain, poetry, perfection.",
    duration: "10:13"
  },
  {
    id: 4,
    name: "Anti-Hero",
    image: timg5,
    file: song2,
    desc: "Midnights confessional — brutal honesty in pop disguise.",
    duration: "3:20"
  },
  {
    id: 5,
    name: "Enchanted",
    image: timg6,
    file: song3,
    desc: "Speak Now magic — where fairy tales and heartbreak collide.",
    duration: "5:52"
  },
  {
    id: 6,
    name: "Blank Space",
    image: timg6,
    file: song1,
    desc: "The art of destruction — a pop classic with a bite.",
    duration: "3:51"
  },
  {
    id: 7,
    name: "You Belong With Me",
    image: timg6,
    file: song2,
    desc: "Fearless nostalgia — windows down, volume up.",
    duration: "3:52"
  }
];
