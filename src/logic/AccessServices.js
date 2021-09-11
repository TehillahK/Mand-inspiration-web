
const Services=[
    {
        id:1,
        imageUrl: 'https://images.pexels.com/photos/159778/books-reading-series-narnia-159778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name:'Publishing',
        description:'We print and guide self publishers as self publishing has become more popular'
    },
    {
        id:2,
        imageUrl: 'https://images.pexels.com/photos/6579275/pexels-photo-6579275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name:'Editing',
        description:`Copy editing,developmental editing,proof reading, manuscript critique`
    },
    {
        id:3,
        imageUrl:'https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name:'Mentoring',
        description:`We mentor not only writers but public speakers and editors`
    }
]
export function getServices() {
    return Services;
}
