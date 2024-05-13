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

customerService.customerList()
.then(data => {
    data.forEach(element => {
        table.appendChild(createNewLine(element.name, element.email, element.id))
    })
})

table.addEventListener('click', event => {
    const clickedElement = event.target
    if(clickedElement.className === 'botao-simples botao-simples--excluir') {
        const line = clickedElement.closest('[data-id]')
        const id = line.dataset.id
        customerService.customerDelete(id)
        .then( () => {
            line.remove()
        })
    }
})
