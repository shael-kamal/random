let cats =
[
    {
        breed: 'Abyssian',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/abyssinian-1-.jpg"
    },
    
    {
        breed: 'Bobtail',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/american-bobtail-1-.jpg"
    },

    {
        breed: 'Balinese',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/balinese-1-.jpg"
    },

    {
        breed: 'Bengal Cat',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/bengal-1-.jpg"
    },
    {
        breed: 'Birman',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/birman-1-.jpg"
    },
    {
        breed: 'Burmese',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/burmese-1-.jpg"
    },
    {
        breed: 'Chartreux',
        img: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/chartreux-1-.jpg"
    }
];

let catBtn = document.querySelector('.btn');
let catDiv = document.querySelector('.cat-div');

let i = 0;

catBtn.addEventListener('click', ()=>{
    
    if (i===cats.length-1){
        i=0;
    }else {
        i++
    }
    catDiv.innerHTML = `<figure>
                <img src=${cats[i].img} class='cat-img'>
                <figcaption>${cats[i].breed}</figcaption>
            </figure>`

    
        
})

