const navBtn = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');

navBtn.addEventListener('click', () => {
    navMenu.classList.add('is-active');
    menuClose.classList.add('is-active');
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('is-active');
    menuClose.classList.remove('is-active');
});

const premierList = [
    { flagPosition: '-34px -36px', date: 'сентябрь 2021', country: 'Аргентина' },
    { flagPosition: '0 60px', date: 'сентябрь 2021', country: 'Канада' },
    { flagPosition: '-102px -12px', date: 'сентябрь 2021', country: 'Украина' },
    { flagPosition: '-17px 0', date: '15 сентября 2021', country: 'Великобритания' },
    { flagPosition: '-51px -84px', date: '15 сентября 2021', country: '	Ирландия' },
    { flagPosition: '0 -84px', date: '15 сентября 2021', country: 'Франция' },
    { flagPosition: '-17px -12px', date: '16 сентября 2021', country: 'Нидерланды' },
    { flagPosition: '-51px -60px', date: '16 сентября 2021', country: 'Португалия' },
    { flagPosition: '-102px -12px', date: '16 сентября 2021', country: 'Украина' },
    { flagPosition: '0 -12px', date: '16 сентября 2021', country: 'Россия' },
    { flagPosition: '68px -48px', date: '16 сентября 2021', country: 'Сингапур' },
    { flagPosition: '-153px -36px', date: '16 сентября 2021', country: 'Словакия' },
    { flagPosition: '-51px -72px', date: '17 сентября 2021', country: 'Исландия' },
    { flagPosition: '-51px -12px', date: '17 сентября 2021', country: 'Польша' },
    { flagPosition: '-85px -48px', date: '	23 сентября 2021', country: 'Греция' },
    { flagPosition: '-17px -36px', date: '	23 сентября 2021', country: 'Италия' },
    { flagPosition: '204px -24px', date: '	24 сентября 2021', country: 'Литва' },
    { flagPosition: '0 0', date: '	24 сентября 2021', country: 'США' },
    { flagPosition: '-102px -84px', date: '	24 сентября 2021', country: 'Турция' },
    { flagPosition: '-17px -48px', date: '8 октября 2021', country: 'Испания' },
    { flagPosition: '0 -24px', date: '21 октября 2021', country: 'Германия' },
    { flagPosition: '0 -48px', date: '22 октября 2021', country: 'Швеция' },
];

function tableCreator() {
    let table = '';
    for (let i = 0; i < premierList.length; i++) {
        table += `<tr>
        <td class='flag' style='background-position:${premierList[i].flagPosition}'></td>
        <td>${premierList[i].date}</td>
        <td>${premierList[i].country}</td>
        </tr>`;
    }
    const tableElem = document.createElement('table');
    const premier = document.querySelector('.premier');
    premier.append(tableElem);
    tableElem.innerHTML = table;
}
tableCreator();