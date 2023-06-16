import ResearchIcon from "../images/research.png"
import FlaskIcon from "../images/flask.png";
import DashboardIcon from "../images/dashboard.png";
import ValueIcon from "../images/value.png";



import handstand from "../images/HandStand.jpg"
import yoga from "../images/yoga.jpeg"
import kickboxingkids from "../images/kickboxingkids.jpeg"

import OmarAttia from "../images/OmarAttia.png"
import TarekAshour from "../images/TarekAshour.png"
import AhmedNassar from "../images/AhmedNassar.png"
import AliRaie from "../images/AliRaie.png"
import MarwanMohammed from "../images/MarwanMohammed.png"
import MarwanTarek from "../images/MarwanTarek.png"
import Maken from "../images/Maken.png"
import Yara from "../images/Yara.png"
import Ashash from "../images/Ashash.png"
import Reem from "../images/Reem.png"
import Haidy from "../images/HaidyAlsayed.png"
import SuhaibSalem from "../images/SuhaibSalem.png"
import AhmedGaber from "../images/AhmedGaber.png"




export const Trainers = [
    {
        id: 1,
        firstName: 'Tarek',
        lastName: 'Ashour',
        age: '30',
        bio: <p> <li>ACE Fitness</li> <li> Union of Sports Professions</li> <li>Gold's Gym Academy </li> <li>Egyptian Red Crescent</li></p>,
        photo: TarekAshour,
        pro: "FOUNDER & FITNESS TRAINER",
        link: '/ashour',
        years: '2021 - Present',
        ig: "https://www.instagram.com/tarek_asho0or/",
        certificates: {
            no: 7,
            start: 0,
            duration: 2,
        },
        experience: {
            no: new Date().getFullYear() - 2010,
            start: 0,
            duration: 2,
        },
        trainees: {
            no: 1300,
            start: 20,
            duration: 2
        }


    },
    {
        id: 2,
        firstName: 'Omar',
        lastName: 'Attia',
        age: '22',
        bio: <p><li>ACE Fitness</li>  <li>Egyptian Red Crescent</li></p>,

        photo: OmarAttia,
        pro: "FITNESS TRAINER",
        link: '/attia',
        years: '2021 - Present',
        ig: "https://www.instagram.com/omar_attia55/",
        certificates: {
            no: 2,
            start: 0,
            duration: 2,
        },
        experience: {
            no: new Date().getFullYear() - 2017,
            start: 0,
            duration: 2,
        },
        trainees: {
            no: 800,
            start: 730,
            duration: 2
        }



    },
    {
        id: 3,
        firstName: 'Haidy',
        lastName: 'Alsayed',
        age: '22',
        bio: <p><li>ISSA Fitness</li>  <li>Egyptian Red Crescent</li></p>,
        photo: Haidy,
        pro: "FITNESS TRAINER",
        link: '/haidy',
        years: '2021 - Present',
        ig: "https://www.instagram.com/haidyalsayed100/",
        certificates: {
            no: 2,
            start: 0,
            duration: 3,
        },
        experience: {
            no: new Date().getFullYear() - 2018,
            start: 0,
            duration: 3,
        },
        trainees: {
            no: 500,
            start: 450,
            duration: 3
        }


    },
    {
        id: 4,
        firstName: 'Ahmed',
        lastName: 'Nassar',
        age: '22',
        bio: <p><li>ISSA Fitness</li>  <li>Egyptian Red Crescent</li></p>,

        photo: AhmedNassar,
        pro: "FITNESS TRAINER",
        link: '/nassar',
        years: '2022 - Present',
        ig: "https://www.instagram.com/ahmeednassar/",

        certificates: {
            no: 2,
            start: 0,
            duration: 1,
        },
        experience: {
            no: new Date().getFullYear() - 2020,
            start: 0,
            duration: 1,
        },
        trainees: {
            no: 480,
            start: 420,
            duration: 3
        }

    },



    {

        id: 5,
        firstName: 'Abdelrahman',
        lastName: 'Maken',
        age: '22',
        bio: <p> <li>Egyptian Red Crescent</li></p>,

        photo: Maken,
        pro: "REHABILIATION SPORTS & INJURIES SPECIALIST",
        link: '/maken',
        years: '2021 - Present',
        ig: "https://www.instagram.com/abdelrahman_elmaken/",


        certificates: {
            no: 15,
            start: 0,
            duration: 1,
        },
        experience: {
            no: new Date().getFullYear() - 2013,
            start: 0,
            duration: 1,
        },
        trainees: {
            no: 1000,
            start: 930,
            duration: 2
        }

    },

    {

        id: 6,
        firstName: 'Ahmed',
        lastName: 'Gaber',
        age: '22',
        bio: <p><li>ISSA Fitness</li>  <li>Egyptian Red Crescent</li></p>,

        photo: AhmedGaber,
        pro: "FITNESS TRAINER",
        link: '/gaber',
        years: '2021 - Present',
        ig: "https://www.instagram.com/",


        certificates: {
            no: 2,
            start: 0,
            duration: 1,
        },
        experience: {
            no: new Date().getFullYear() - 2012,
            start: 0,
            duration: 1,
        },
        trainees: {
            no: 700,
            start: 630,
            duration: 2
        }
    }

]




export const Staff = [
    {
        id: 1,
        firstName: 'Ali',
        lastName: 'Raie',
        age: '30',
        bio: '',
        photo: AliRaie

    },
    {
        id: 2,
        firstName: 'Marwan',
        lastName: 'Mohammed',
        age: '22',
        bio: '',
        photo: MarwanMohammed

    },
    {
        id: 3,
        firstName: 'Ashash',
        lastName: 'Mohammed',
        age: '22',
        bio: '',
        photo: Ashash

    }, {
        id: 4,
        firstName: 'Reem',
        lastName: 'Mohammed',
        age: '22',
        bio: '',
        photo: Reem

    },


]

export const ladiesCard = [
    {
        id: 1,
        class: 'c-general',
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Month',
        number: '1',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Sun, Tue, Thu',
            visitHours: '9AM - 12PM',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '1',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '2',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '3',
            freeze: 'Freeze',
            freezeNo: 'None',
            freezeClass: " grey"
        },
        price: '699',
        buttonclass: "button-c-white"

    },
    {
        id: 2,

        class: 'c-general',
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Months',
        number: '3',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Sun, Tue, Thu',
            visitHours: '9AM - 12PM',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '2',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '2',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '6',
            freeze: 'Freeze',
            freezeNo: '2 weeks',
            freezeClass: ""


        },
        price: '1649',
        buttonclass: "button-c-white"

    },


    {
        id: 3,

        class: 'c-general',
        status: "subs-status green",
        statustext: "MOST SELLING!",
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Months',
        number: '6',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Sun, Tue, Thu',
            visitHours: '9AM - 12PM',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '3',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '3',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '10',
            freeze: 'Freeze',
            freezeNo: '1 month',
            freezeClass: ""
        },
        price: '2499',
        buttonclass: "button-c-white"

    },

    {
        id: 4,
        class: 'c-general c-recommended',
        status: "subs-status red",
        statustext: "BEST DEAL!",
        headerclass: "c-title-green",
        detailsclass: "card-details ",
        title: 'Year',
        number: '1',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Sun, Tue, Thu',
            visitHours: '9AM - 12PM',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '4',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '15',
            freeze: 'Freeze',
            freezeNo: '2 months',
            freezeClass: ""
        },
        price: '3499',
        buttonclass: "button-c-black"
    },


]

export const mixedCard = [
    {
        id: 1,
        class: 'c-general',
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Month',
        number: '1',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: '',
            durationValue: '',
        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '1',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '3',
            freeze: 'Freeze',
            freezeNo: 'None',
            freezeClass: " grey"
        },
        price: '1199',
        buttonclass: "button-c-white"

    },
    {
        id: 2,

        class: 'c-general',
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Months',
        number: '3',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: '',
            durationValue: '',
        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '2',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '6',
            freeze: 'Freeze',
            freezeNo: '2 weeks',
            freezeClass: ""


        },
        price: '2699',
        buttonclass: "button-c-white"

    },


    {
        id: 3,

        class: 'c-general',
        status: "subs-status green",
        statustext: "MOST SELLING!",
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Months',
        number: '6',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: '',
            durationValue: '',
        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '1',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '10',
            freeze: 'Freeze',
            freezeNo: '1 month',
            freezeClass: ""
        },
        price: '3799',
        buttonclass: "button-c-white"

    },

    {
        id: 4,
        class: 'c-general ',
        status: "",
        statustext: "",
        headerclass: "",
        detailsclass: "card-details black",
        title: 'Year',
        number: '1',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: '',
            durationValue: '',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '4',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '15',
            freeze: 'Freeze',
            freezeNo: '2 months',
            freezeClass: ""
        },
        price: '4899',
        buttonclass: "button-c-white"
    },
    {
        id: 5,
        class: 'c-general c-recommended',
        status: "subs-status red",
        statustext: "1 YEAR + 2 MONTHS FREE!",
        headerclass: "c-title-green",
        detailsclass: "card-details ",
        title: 'Gold',
        number: '',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: 'Duration',
            durationValue: '14 Months',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '4',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '4',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '15',
            freeze: 'Freeze',
            freezeNo: '2 months',
            freezeClass: ""
        },
        price: '5799',
        buttonclass: "button-c-black"
    },
    {
        id: 6,
        class: 'c-general c-recommended',
        status: "subs-status red",
        statustext: "32 PRIVATE SESSIONS!",
        headerclass: "c-title-green",
        detailsclass: "card-details ",
        title: 'Premium',
        number: '',
        numberClass: 'roboto',
        visits: {
            classTitles: "c-details-visit-hours thin",
            classNumbers: "c-details-visit-hours-no",
            visitDays: 'Everyday*',
            visitHours: '6AM - 12AM',
            duration: 'Duration',
            durationValue: '1 Year',

        },
        services: {
            classTitles: "c-details-services thin",
            classNumbers: "c-details-services-no",
            inbody: 'Inbody + Assesment',
            inbodyNo: '4',
            privateSessions: 'Private Sessions',
            privateSessionsNo: '32',
            classes: 'Classes',
            classesNo: '4',
            invitations: 'Invitations',
            invitationsNo: '15',
            freeze: 'Freeze',
            freezeNo: '2 months',
            freezeClass: ""
        },
        price: '6499',
        buttonclass: "button-c-black"
    },

]


export const processes = [
    {
        id: 'process-1',
        icon: ResearchIcon,
        description: <h4 className="process-desc">ANALYSE YOUR<br />GOALS</h4>,

    },
    {
        id: 'process-2',
        icon: FlaskIcon,
        description: <h4 className="process-desc">WORK HARD ON<br />IT</h4>,

    },
    {
        id: 'process-3',
        icon: DashboardIcon,
        description: <h4 className="process-desc">IMPROVE YOU<br />ON BASIS</h4>
        ,

    },
    {
        id: 'process-4',
        icon: ValueIcon,
        description: <h4 className="process-desc">ACHIEVE YOUR<br />DESTINY</h4>,
    }
]

export const members = [
    {
        id: 1,
        firstName: 'Yara',
        lastName: 'Qenawy',
        age: '20',
        opinion: < p > This is the best place I’ve trained in so far! <br /> The community here is amazing.</p >,
        pp: Yara,
        since: 2021

    },

    {
        id: 2,
        firstName: 'Marwan',
        lastName: 'Tarek',
        age: '20',
        opinion: < p > The best place to train in and the best coaches <br /> to train with!</p >,
        pp: MarwanTarek,
        since: 2021

    },

    {
        id: 3,
        firstName: 'Suhaib',
        lastName: 'Salem',
        age: '20',
        opinion: < p > The best gym experience I can ever have.<br /> Thanks to the Evolution team!</p >,
        pp: SuhaibSalem,
        since: 2021


    }
]


export const Classes = [
    {
        id: 1,
        title: "Handstand",
        day: 'Wednesday',
        startTime: '9PM',
        endTime: '10PM',
        question: "Handstand",
        photo: handstand,
        advantages: [
            "Reverses the blood supply which helps in blood purification.",
            "Increases concentration and focus.",
            "Improves balance.",
            "Relaxes the nervous system. ",
            "Strengthens immunity. ",
            "Improves bowel movement. ",
            "Checks breathlessness.",
            "Improves skin."
        ],
    },
    {
        id: 2,
        title: "YOGA",
        day: 'Wednesday',
        startTime: '8PM',
        endTime: '9PM',
        question: "Yoga",
        photo: yoga,
        advantages: [
            "supports stress management.",
            "improves mental health.",
            "mindfulness.",
            "helps in losing weight.",
            "controls an individual's mind, body and soul."
        ],
    },
    {
        id: 3,
        title: "kickboxing",
        day: 'Wednesday',
        startTime: '9PM',
        endTime: '10PM',
        question: "Kickboxing",
        photo: kickboxingkids,
        advantages: [
            "strengthens and tones your legs, arms, glutes, back, and core.",
            "improves cardiovascular health.",
            "helps in weight loss.",
            "helps in gaining confidence.",
            "causes better sleep.",
        ],
    },





]






