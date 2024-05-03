import { customerService } from '../service/customer-service.js'

const createNewLine = (name, email) => {
    const newLine = document.createElement('tr')
    const content = `
        <td class="td" data-td>${name}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../pages/customers_edit.html" class="botao-simples botao-simples--editar">Edit</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Delete</button></li>
                        </ul>
                    </td> 
                    `
    newLine.innerHTML = content
    return newLine
}

const table = document.querySelector('[data-table]')

customerService.customerList()
.then(data => {
        data.forEach(element => {
        table.appendChild(createNewLine(element.name, element.email))
})})
