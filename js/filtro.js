//selecionando todos os elementos
const filtroItem = document.querySelector(".itens");
const filtroImg = document.querySelectorAll(".image");


window.onload = () =>{ //uma vez carregado
    filtroItem.onclick = (selectedItem) =>{ //quando clicar no filtroitem
        if(selectedItem.target.classList.contains("item")){
            filtroItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filtroNome = selectedItem.target.getAttribute("data-name");
            filtroImg.forEach((image)=>{
                 let filtroImagens = image.getAttribute("data-name");
                
                if((filtroImagens == filtroNome) || filtroNome == "todos"){
                    image.classList.add("show");
                }else{
                  image.classList.add("hide");
                  image.classList.remove("show");  
                }
            });
        }
    }
}
















