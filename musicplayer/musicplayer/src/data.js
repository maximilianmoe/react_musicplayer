import {v4 as uuidv4} from 'uuid';

function chillHop() {
    return [
        {
            name: "Jazz Cabbage",
            artist: "Ian Ewing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10305"
        },
        {
            name: 'Lagoons',
            artist: 'Strehlow, Chris Mazuera',
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266"
        },
        {
            name: 'Sundew',
            artist: 'Delayde, Webmoms',
            id: uuidv4(),
            active: false,
            color: ['#F4A1DF','#693293'],
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7967",
        },
        {
            name: 'Hibiscus',
            artist: 'G Mills, Felty',
            id: uuidv4(),
            active: false,
            color: ['#1971B0','#D6935E'],
            cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8971"
        },
        {
            name: 'Vinho Verde',
            artist: 'Clap Cotton',
            id: uuidv4(),
            active: false,
            color: ['#7C9F5F','#1D2621'],
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9447"
        },
        {
            name: '5 am',
            artist: 'Ruck P, Shuko',
            id: uuidv4(),
            active: false,
            color: ['#D7B8C7','#4D588E'],
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10309"
        },
        {
            name: 'Cruisin',
            artist: 'Loop Schrauber, TRIBES',
            id: uuidv4(),
            active: false,
            color: ['#D7B8C7','#4D588E'],
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10321"
        }



    ]
}

export default chillHop;