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
        console.log("Diite 4 error");
        return;
    }

    const creatLi = document.createElement("li");
    const creatLabel = document.createElement("label");
    const creatInputCheck = document.createElement("input");
    creatInputCheck.type = "checkbox"
    const creatParagraph = document.createElement("p");
    const creatBtnLixo = document.createElement("button");
    const creatImage = document.createElement("img");
    creatImage.src = "/assets/icons/Frame.svg";
    creatImage.alt = "Lixeira";

    creatParagraph.textContent = input.value;

    input.value = " ";
    input.focus();

    ul.prepend(creatLi);
    creatLi.append(creatLabel, creatBtnLixo);
    creatLabel.append(creatInputCheck, creatParagraph);
    creatBtnLixo.append(creatImage);

    creatLi.classList.add("li");
    creatLabel.classList.add("container-chek");
    creatInputCheck.classList.add("checkbox");
    creatParagraph.classList.add("paragraph");
    creatBtnLixo.classList.add("btn-lixo");
    creatImage.classList.add("imgLixo");

    creatBtnLixo.addEventListener("click", () => {
        creatLi.remove();
        alertDelete();

    })

    creatInputCheck.addEventListener("click", () => {
        creatLi.classList.toggle("updateCheck");
    })
});
