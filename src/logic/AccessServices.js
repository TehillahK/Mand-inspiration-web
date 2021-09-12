import PublishingImage from '../presentation/assets/publishing-services.jpg'
import EditingImage from '../presentation/assets/editing-services.jpg'
import MentoringImage from '../presentation/assets/mentoring-service.jpg'
import EditingServiceImage from '../presentation/assets/editing-alt.jpg'
const Services=[
    {
        id:1,
        imageUrl: PublishingImage,
        menuImg:EditingServiceImage,
        name:'Publishing',
        description:'We print and guide self publishers as self publishing has become more popular'
    },
    {
        id:2,
        imageUrl: EditingImage,
        menuImg:EditingServiceImage,
        name:'Editing',
        description:`Copy editing,developmental editing,proof reading, manuscript critique`
    },
    {
        id:3,
        imageUrl:MentoringImage,
        menuImg:EditingServiceImage,
        name:'Mentoring',
        description:`We mentor not only writers but public speakers and editors`
    }
]
export function getServices() {
    return Services;
}
