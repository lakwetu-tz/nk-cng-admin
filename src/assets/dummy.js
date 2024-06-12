import { FiDatabase, FiBarChart2, FiMapPin, FiUsers, FiTool, FiArchive, FiHelpCircle, FiSettings, FiDollarSign, FiLogOut } from "react-icons/fi";

import React from "react";
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
        href: "/map",
        name: "Map",
        icon: <FiMapPin size={18} />,
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
        name: "Loans",
        icon: <FiArchive size={18} />,
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
        href: "/billing",
        name: "Billing",
        icon: <FiDollarSign size={18} />
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
        phone: "+254712345678",
        ward: "Konondoni",
        city: "Dar",
        debt: "TZS 0.00",
        balance: "TZS 0.00",
        status: "Registered",

    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        phone: "+255712345678",
        ward: "Kijitonyama",
        city: "Dar",
        debt: "TZS 0.00",
        balance: "TZS 0.00",
        status: "Registered",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        phone: "+25573487438",
        ward: "Konondoni",
        city: "Dar",
        debt: "TZS 0.00",
        balance: "TZS 0.00",
        status: "Registered",
    },
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        phone: "+25572334342",
        ward: "Ubungo",
        city: "Dar",
        debt: "TZS 0.00",
        balance: "TZS 0.00",
        status: "Registered",
    },
    {
        avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        phone: "+25573487438",
        ward: "Mwananyamala",
        city: "Dar",
        debt: "TZS 0.00",
        balance: "TZS 0.00",
        status: "Unregistered",
    },
]


export const posts = [
    {   
        id: 1,
        title: "Ford",
        model: "mastang",
        desc: "20",
        img: "",
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
        title: "Azam Pay",
        desc: "Intergrate the platform with Azam-Pay",
        icon: azam,
                

        }, {
        title: "Mpesa",
        desc: "Intergrate the platform with vodacom M-pesa",
        icon: require('../assets/image/m-pesa.jpg'),

        }, {
        title: "Tigo Pesa",
        desc: "Intergrate the platform with Tigo-pesa",
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


export const report = [
    {
        title: 'Loans Over Time',
        desc: 'Monthly loan applications',
        type: 'line',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
            {
                name: 'Loans',
                data: [30, 40, 35, 50, 49, 60, 70],
            },
        ],
        options: {

        },
        colors: ['#72c053'],
    },
    {
        title: 'Loan Approvals',
        desc: 'Monthly loan approvals',
        type: 'bar',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
            {
                name: 'Approvals',
                data: [20, 30, 25, 40, 45, 50, 60],
            },
        ],
        options: {
            // Additional ApexCharts options
        },
    },
    {
        title: 'Loan Rejections',
        desc: 'Monthly loan rejections',
        type: 'area',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
            {
                name: 'Rejections',
                data: [5, 10, 15, 10, 20, 15, 10],
            },
        ],
        options: {
            // Additional ApexCharts options
        },
    },
    {
        title: 'Loan Types Distribution',
        desc: 'Distribution of different loan types',
        type: 'pie',
        categories: [],
        series: [40, 30, 20, 10],
        options: {
            labels: ['Personal Loans', 'Home Loans', 'Auto Loans', 'Education Loans'],
        },
    },
    {
        title: 'Loan Amount Range',
        desc: 'Distribution of loan amounts',
        type: 'donut',
        categories: [],
        series: [10, 25, 30, 20, 15],
        options: {
            labels: ['< $1000', '$1000 - $5000', '$5000 - $10000', '$10000 - $20000', '> $20000'],
        },
    },
    {
        title: 'Approval Rate by Region',
        desc: 'Regional loan approval rates',
        type: 'radialBar',
        categories: [],
        series: [80, 70, 60, 90],
        options: {
            labels: ['North', 'South', 'East', 'West'],
        },
    },
    {
        title: 'Loan Repayment Rate',
        desc: 'Monthly loan repayment rates',
        type: 'scatter',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
            {
                name: 'Repayment Rate',
                data: [
                    [1, 80],
                    [2, 85],
                    [3, 75],
                    [4, 90],
                    [5, 85],
                    [6, 95],
                    [7, 100],
                ],
            },
        ],
        options: {
            xaxis: {
                tickAmount: 7,
                labels: {
                    formatter: function (val) {
                        return val.toFixed(0);
                    },
                },
            },
            yaxis: {
                max: 100,
            },
        },
    },
    {
        title: 'Loans by Customer Age',
        desc: 'Loan distribution by customer age',
        type: 'heatmap',
        categories: ['<20', '20-30', '30-40', '40-50', '50-60', '>60'],
        series: [
            {
                name: 'Loans',
                data: [10, 30, 45, 35, 20, 15],
            },
        ],
        options: {
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    colorScale: {
                        ranges: [
                            {
                                from: 0,
                                to: 10,
                                color: '#00A100',
                                name: '0-10',
                            },
                            {
                                from: 11,
                                to: 20,
                                color: '#128FD9',
                                name: '11-20',
                            },
                            {
                                from: 21,
                                to: 30,
                                color: '#FFB200',
                                name: '21-30',
                            },
                            {
                                from: 31,
                                to: 40,
                                color: '#FF0000',
                                name: '31-40',
                            },
                        ],
                    },
                },
            },
        },
    },
];
