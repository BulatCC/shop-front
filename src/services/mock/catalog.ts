const jacketsCatalog = [
    {
        id: '1',
        link: '1',
        img: '/img/woman-jacket-1',
        title: 'Jacket',
        price: '120'
    },
    {
        id: '2',
        link: '2',
        img: '/img/woman-jacket-2',
        title: 'Jacket',
        price: '140'
    },
    {
        id: '3',
        link: '3',
        img: '/img/woman-jacket-3',
        title: 'Jacket',
        price: '90'
    },
    {
        id: '4',
        link: '4',
        img: '/img/woman-jacket-4',
        title: 'Jacket',
        price: '160'
    },
    {
        id: '5',
        link: '5',
        img: '/img/woman-jacket-5',
        title: 'Jacket',
        price: '80'
    },
    {
        id: '6',
        link: '6',
        img: '/img/woman-jacket-6',
        title: 'Jacket',
        price: '99'
    },
    {
        id: '7',
        link: '7',
        img: '/img/woman-jacket-7',
        title: 'Jacket',
        price: '44'
    },
    {
        id: '8',
        link: '8',
        img: '/img/woman-jacket-8',
        title: 'Jacket',
        price: '85'
    },
    {
        id: '9',
        link: '9',
        img: '/img/woman-jacket-9',
        title: 'Jacket',
        price: '300'
    }
];

export const getCatalogData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(jacketsCatalog);
        }, 1000);
    })
);
