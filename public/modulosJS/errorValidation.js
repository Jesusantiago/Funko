export const titleError = document.getElementsByClassName("validationText");

for (const x of titleError) {
    x.addEventListener("click", (e) => {

        if(e.target.className == "closeError"){
            x.style.display = "none"
        }
    })
}
