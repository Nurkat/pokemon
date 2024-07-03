let elList = document.querySelector(".pokemon-list")


function renderPokemon(arr,list){
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
<img src="${item.img}" alt="${item.name}" >
<div class="flex items-center justify-between">

<div>
<h2>${item.name}</h2>
<p>Type:${item.type[0]}</p>
</div>
<div class="flex items-center gap-[10px]">
<button class="p-[5px] rounded-[5px] border-[2px] border-slate-500 text-slate-500 bg-red-600 text-white">Like</button>
<button class="p-[5px] rounded-[5px] border-[2px] border-slate-500 text-slate-500 bg-gray-600 text-white">More</button>
</div>
</div>
        `
        elItem.className ="w-[250px] p-3 border-[10px] border-slate-400 rounded-[5px] flex flex-col justify-center"
        elList.append(elItem) 
    })
}
renderPokemon(pokemons,elList)
