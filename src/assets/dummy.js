

import React from "react";
import { FiSettings, FiBarChart2, FiUsers, FiDollarSign, FiTool, FiHelpCircle, FiLogOut, FiDatabase } from "react-icons/fi";

const image1 = require('./image/1.jpg')
const image2 = require('./image/2.jpg')
const image3 = require('./image/3.jpg')
const image4 = require('./image/4.jpg')
const image5 = require('./image/5.jpg')

const azam = require('../assets/image/azam-pesa.png')
// export const logo = require('../assets/image/logo.png')

export const navigation = [
    {
        href: "/",
        name: "Overview",
        icon: <FiDatabase size={18} />,
    },
    {
        href: "/report",
        name: "Report",
        icon: <FiBarChart2 size={18} />,
    },
    {
        href: "/user",
        name: "User",
        icon: <FiUsers size={18} />,
    },
    {
        href: "/vehicles",
        name: "Vehicles",
        icon: <FiTool size={18} />,
    },
    {
        href: "/payment",
        name: "Payment",
        icon: <FiDollarSign size={18} />,
    }
];



export const navsFooter = [
    {
        href: "/help",
        name: "Help",
        icon: <FiHelpCircle size={18} />
    },
    {
        href: "/settings",
        name: "Settings",
        icon: <FiSettings size={18} />
    },
    {
        href: "/logout",
        name: "Logout",
        icon: <FiLogOut size={18}/>
    },
];


export const tableItems = [
    {
        avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Liam James",
        email: "liamjames@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Software engineer",
        salary: "$100K"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Product designer",
        salary: "$90K"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Front-end developer",
        salary: "$80K"
    },
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Laravel engineer",
        salary: "$120K"
    },
    {
        avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        phone_nimber: "+1 (555) 000-000",
        position: "Open source manager",
        salary: "$75K"
    },
]


export const posts = [
    {   
        id: 1,
        title: "Ford",
        model: "mastang",
        desc: "20",
        img: image1,
        authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        authorName: "Sidi dev",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 2,
        title: "Toyota",
        model: "Nivara",
        desc: "12",
        img: image2,
        authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        authorName: "Micheal",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 3,
        title: "Toyata",
        model: "Hilux",
        desc: "9",
        img: image3,
        authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
        authorName: "Luis",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 4,
        title: "Suzuki",
        model: "Rav4",
        desc: "1",
        img: image4,
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 5,
        title: "Ford",
        model: "mastang",
        desc: "20",
        img: image1,
        authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        authorName: "Sidi dev",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 6,
        title: "Toyota",
        model: "Nivara",
        desc: "12",
        img: image2,
        authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        authorName: "Micheal",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 7,
        title: "Toyata",
        model: "Hilux",
        desc: "9",
        img: image3,
        authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
        authorName: "Luis",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        id: 11,
        title: "Suzuki",
        model: "Rav4",
        desc: "1",
        img: image4,
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
]

export const integrations = [
    {
        title: "Azama",
        desc: "Ut enim ad minim veniam",
        icon: azam,
                

        }, {
        title: "Github",
        desc: "Ut enim ad minim veniam",
        icon: require('../assets/image/m-pesa.jpg'),

        }, {
        title: "Discord",
        desc: "Ut enim ad minim veniam",
        icon: require('../assets/image/tigo-pesa.png'),
        },
]



export const transactions = [
    {
        id: "TX001",
        user: "John Doe",
        type: "Loan Issued",
        date: "2023-05-01",
        amount: 50000,
    },
    {
        id: "TX002",
        user: "Jane Smith",
        type: "Loan Returned",
        date: "2023-05-15",
        amount: 25000,
    },
    {
        id: "TX003",
        user: "Michael Johnson",
        type: "Loan Denied",
        date: "2023-05-20",
        amount: 75000,
    }
]
