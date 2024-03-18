import ckad from '../assets/achievements/ckad.svg'
import golang from '../assets/achievements/golang.svg'
import java from '../assets/achievements/java.svg'
import entrepreneurship from '../assets/achievements/entrepreneurship.svg'
import associate from '../assets/achievements/associate.png'
import professional from '../assets/achievements/professional.png'
import expert from '../assets/achievements/expert.png'

export const achievementData = {
    bio1 : "As a software engineer with a Master's degree in Computer Science, I have a wealth of knowledge and experience in software engineering. I have worked tirelessly to hone my skills and stay up-to-date with the latest advancements in technology, as evidenced by my numerous certifications.",
    bio2: "With my extensive experience and dedication to excellence, I can be a true asset to any organization. I inspire and guide the team to success, and consistently deliver high-quality results on every project I undertake.",
    // Oracle java, Go, Kubernetes, Mongo, Docker, ES, Entrepreneurship, 
    achievements : [
        {
            id : 1,
            title : 'Android Enterprise Associate',
            details : 'Fundamentals of Android Enterprise | Basics of Zero-touch and Android Security | Use cases and success stories of Android Enterprise',
            date : 'November 1, 2023',
            field : 'EnterpriseMobility',
            url : 'https://androidenterprise.exceedlms.com/student/award/ZZY2tErXNfkDnFnUmjDxQUhe',
            image : associate
        },
        {
            id : 2,
            title : 'Android Enterprise Professional',
            details : 'Underpinnings of Android Enterprise | Best practices for deployment | Android security and privacy',
            date : 'November 2, 2023',
            field : 'EnterpriseMobility',
            url : 'https://androidenterprise.exceedlms.com/student/award/4Y2gCTwGQWR1ZcZXuxnRED3d',
            image : professional
        },
        {
            id : 3,
            title : 'Android Enterprise Expert',
            details : 'Implementation and deployment process of Android devices using Android Enterprise | Methods to help in guiding customers through troubleshooting',
            date : 'November 13, 2023',
            field : 'EnterpriseMobility',
            url : 'https://androidenterprise.exceedlms.com/student/award/m4n8nL65WT4283BDxUDtb3XC',
            image : expert
        },
        {
            id : 4,
            title : 'CKAD: Certified Kubernetes Application Developer',
            details : 'Configuration, Multi-Container Pods, Observability, Pod Design, Services & Networking, State Persistence.',
            date : 'January 27, 2021 - 2024',
            field : 'DevOps',
            url : 'https://www.credly.com/badges/f4bf87b8-9606-4e35-ac32-0b0caeffc067',
            image : ckad
        },
        {
            id : 5,
            title : 'Programming with Google Go',
            details : 'This specialization introduces the Go programming language from Google and provides learners with an overview of Go\'s special features.',
            date : 'October 21, 2020',
            field : 'Development',
            url : 'https://www.coursera.org/account/accomplishments/specialization/56SL497H3QPS',
            image: golang
        },
        
        {
            id : 6,
            title : 'Entrepreneurship Specialization',
            details : 'The conception, design, organization, and management of new enterprises.',
            date : 'October 7, 2020',
            field : 'Entrepreneurship',
            url : 'https://www.coursera.org/account/accomplishments/specialization/RQTKV9PWPEBK',
            image: entrepreneurship
        },

        {
            id : 7,
            title : 'Oracle Certified Professional',
            details : 'Experience using the Java programming language, understands the basic syntax and structure of the Java programming language and can create Java technology applications that run on server and desktop systems.',
            date : 'September 19, 2015',
            field : 'Development',
            url : 'https://www.credly.com/badges/16cd5f2d-bca7-418f-ae8e-29796ffa0acd',
            image: java
        },
    ]
}