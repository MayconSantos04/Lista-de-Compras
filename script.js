const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");
const btnLixo = document.querySelector(".btn-lixo");
const span = document.querySelector(".container-warning");
const modifyCheck = document.querySelector(".updateCheck");

function alertDelete() {
    span.classList.remove("hidden");

    span.addEventListener("click", () => {
        span.classList.add("hidden");
    });

    setTimeout(() => {
        span.classList.add("hidden");
    }, 5000);
}

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value.trim().length < 4) {
        console.log("Digite 4 error");
        return;
    }

    // 1. Criar os elementos
    const creatLi = document.createElement("li");
    const creatLabel = document.createElement("label");
    const creatInputCheck = document.createElement("input");
    creatInputCheck.type = "checkbox";
    const creatParagraph = document.createElement("p");
    const creatBtnLixo = document.createElement("button");
    const creatImage = document.createElement("img");
    
    // 2. Configurar os atributos e conteúdo
    creatImage.src = "assets/icons/Frame.svg";
    creatImage.alt = "Lixeira";
    creatParagraph.textContent = input.value;

    // 3. ADICIONAR AS CLASSES PRIMEIRO (Correção aqui)
    creatLi.classList.add("li");
    creatLabel.classList.add("container-chek");
    creatInputCheck.classList.add("checkbox");
    creatParagraph.classList.add("paragraph");
    creatBtnLixo.classList.add("btn-lixo");
    creatImage.classList.add("imgLixo");

    // 4. Montar a estrutura (append) depois de estilizado
    creatBtnLixo.append(creatImage);
    creatLabel.append(creatInputCheck, creatParagraph);
    creatLi.append(creatLabel, creatBtnLixo);
    ul.prepend(creatLi);

    // 5. Limpar o input
    input.value = ""; // Removido o espaço em branco interno
    input.focus();

    // 6. Eventos dos novos elementos
    creatBtnLixo.addEventListener("click", () => {
        creatLi.remove();
        alertDelete();
    });

    creatInputCheck.addEventListener("click", () => {
        creatLi.classList.toggle("updateCheck");
    });
});
