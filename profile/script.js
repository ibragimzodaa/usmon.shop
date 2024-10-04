let box = document.querySelector(".box")

function getInfo(data) {
    let info = JSON.parse(localStorage.getItem('infoProducts'));

    let divs = document.createElement('div');
    let div = document.createElement('div');
    div.innerHTML = `
 <h1>${info.company}</h1>
 `
    let div1 = document.createElement("div")
    div1.innerHTML = `
 <h3>${ "$ " + info.price}</h3>
 `
    div1.classList.add("div")
    let div2 = document.createElement("div")
    div2.innerHTML = `
 <img class="div2" src="${info.image}">
 `
 let div3 = document.createElement("div")
 div3.innerHTML = `
 <p class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium soluta, sint officia cumque, officiis cupiditate quisquam labore molestias, quo beatae quos. Velit atque repellat labore! Eos rerum earum doloremque quam!
    Non quaerat sunt debitis ad, officiis ratione voluptatem at distinctio, asperiores ullam rerum dolores sequi! Fugiat a aliquid nisi pariatur quibusdam, dicta laborum veniam, sapiente iusto vitae, earum ratione necessitatibus!
    Consequuntur reiciendis velit laborum ducimus hic cumque optio corrupti! Nemo, laborum quasi repellendus esse suscipit commodi accusamus dolore dolorum ullam cum, perspiciatis natus dolores iusto aliquam consequuntur at quo eos?
    Velit, quaerat? Natus fugiat expedita impedit fugit. Dolorem distinctio beatae incidunt maiores blanditiis quas aperiam veniam cumque eveniet nostrum dolor fugiat aliquid unde atque, ipsam aliquam tempora optio mollitia illum?
   </p>
 `
  div2.classList.add("div2")
  divs.append(div, div1,div3)
  divs.classList.add("divs")

    box.append(div2,divs)
}
getInfo()

console.log();

