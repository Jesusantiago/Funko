const btnAddItem = document.getElementById("btnAddItem").addEventListener("click", (e) =>{
    // e.preventDefault();//ELIMINAR NO RECARDA LA PAGINA
    createModal()
    console.log("clickAddEve")
})

const modalAdd = document.getElementById("mainModal")
//div padre del modal

const fragment = document.createDocumentFragment()
//fragment

const modal = document.createElement("article")
//el codigo a incrustar

modal.innerHTML = `
<h2 class="add__title">CREAR NUEVO ITEM</h2>

<form class="add__form">

    <label class="add__form_label categoria" >Categoría
        <select class="add__form_input" id="categoryAdd">
            <option required>HARRY POTTER</option>
            <option required>START WARS</option>
            <option required>POKEMON</option>      
        </select>
    </label>
    
    <label class="add__form_label licencia" >Licencia:
        <select class="add__form_input" id="licenseAdd">
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>
    </label>
    
    <label class="add__form_label name" >Nombre del producto:
        <input type="text" class="add__form_input" placeholder="Kakashi Hatake Shippuden Saga" id="nameAdd">
    </label>
    
    <label class="add__form_label message">
        <textarea class="add__form_input" placeholder="Descripción del producto" id="descriptionAdd"></textarea>
    </label>
    
    <label class="add__form_label sku">SKU:
        <input type="text" class="add__form_input" size="7" placeholder="SSK111AB001" id="skuAdd">
    </label>
    
    <label class="add__form_label price">Precio:
        <input type="text" class="add__form_input" placeholder="$0.0000,00" size="7" id="priceAdd">
    </label>
    
    <label class="add__form_label stock">Stock:
        <input type="text" class="add__form_input" placeholder="0" size="1" id="stockAdd">
    </label>
    
    <label class="add__form_label descuentos">Descuento:
        <input type="text" class="add__form_input" placeholder="0%" size="5" id="discountAdd">
    </label>
    
    <label class="add__form_label cuotas">Cuotas:
        <select class="add__form_input" id="quotasAdd">
            <option required>0% de descuento</option>
            <option required>10% de descuento</option>
            <option required>20% de descuento</option>      
            <option required>30% de descuento</option>      
            <option required>40% de descuento</option>      
            <option required>50% de descuento</option>      
            <option required>60% de descuento</option>      
            <option required>70% de descuento</option>      
            <option required>80% de descuento</option>      
            <option required>90% de descuento</option>      
            <option required>100% de descuento</option>      
        </select>
    </label>

    <label class="add__form_label image">Imágenes:
        <input type="file" accept="image/png, image/jpeg" class="add_form_input image" id="imageAdd" multiple="multiple" >
    </label>

    <input type="button" class="add__from_input"  value="Agregar Producto" id="btnADD">

    <input type="button" class="add__from_input" value="Limpiar" id="btnClear">
    
    
</form>
`

const createModal = ()=>{
    modalAdd.classList.replace("main__modal-none", "main__modal")
    modal.classList.add("main__add")
    fragment.appendChild(modal)
    mainModal.appendChild(fragment)

clearFooter()


console.log("modal")
}

export const clearFooter = ()=>{
    const footer = document.getElementById("footerAdd");
    //el footer va a desaparecer
    footer.classList.toggle("footer", "footer_none")
    footer.classList.toggle("footer__login")
    
}


