import { customerService } from '../service/customer-service.js'

const createNewLine = (name, email, id) => {
    const newLine = document.createElement('tr')
    const content = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../pages/customer_edit.html?id=${id}" class="botao-simples botao-simples--editar">Edit</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Delete</button></li>
            </ul>
        </td> 
    `
    newLine.innerHTML = content
    newLine.dataset.id = id
    return newLine
}

const table = document.querySelector('[data-table]')
table.addEventListener('click', async (event) => {
    const clickedElement = event.target
    if(clickedElement.className === 'botao-simples botao-simples--excluir') {
        try {
            const line = clickedElement.closest('[data-id]')
            const id = line.dataset.id
            await customerService.customerDelete(id)
            line.remove()
        }
        catch(error) {
            console.log(error)
            window.location.href="../pages/error.html"
        }
    }
})

const renderlist = async () => {
    try {
        const customerList = await customerService.customerList()
        customerList.forEach(element => {
            table.appendChild(createNewLine(element.name, element.email, element.id))
        })
    }
    catch(error){
        console.log(error)
        window.location.href="../pages/error.html"
    }
}

renderlist()
