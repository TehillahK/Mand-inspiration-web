import FeelingTwentyPic from '../presentation/assets/books/20at60.jpg'
import AmapianoPic from '../presentation/assets/books/Amapiano.PNG'
import LegendsPic from '../presentation/assets/books/lwd.jpeg'

const books=[
    {
        id:1,
        coverPic:FeelingTwentyPic,
        name:'Feeling 20 & 60',
        description:'Put description here',
        amazonLink:'http://twitter.com/saigowthamr',
        etsyLink:'',

    },
    {
        id:2,
        coverPic: AmapianoPic,
        name:'Amapiano',
        description:'Put description here',
        amazonLink:'',
        etsyLink:'',

    },
    {
        id:3,
        coverPic:LegendsPic ,
        name:'Legends with dreams: Edition one ',
        description:'Put description here',
        amazonLink:'',
        etsyLink:'',

    },
    {
        id:4,
        coverPic:'' ,
        name:'Victory vs. Purpose',
        description:'Put description here',
        amazonLink:'',
        etsyLink:'',

    }
]

export function getBooks() {
    return books;
}
