const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener('click', e => {
    console.log('grandparent capture');
},
{capture: true}
)

grandparent.addEventListener('click', e => {
    console.log('grandparent bubble');
}
)

parent.addEventListener('click', e => {
    console.log('parent');
})

child.addEventListener('click', e => {
    console.log('child');
})

document.addEventListener('click', e => {
    console.log('document');
})