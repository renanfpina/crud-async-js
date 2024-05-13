import { customerService } from '../service/customer-service.js'

const newUrl = new URL(window.location)
const customerId = newUrl.searchParams.get('id')

const inputName = document.querySelector('[data-name]')
const inputEmail = document.querySelector('[data-email]')

customerService.getCustomerById(customerId)
    .then(data => {
        inputName.value = data.name
        inputEmail.value = data.email
    })

const form = document.querySelector('[data-form]')
form.addEventListener('submit', event => {
    event.preventDefault()
    // const name = event.target.querySelector('[data-name]').value
    // const email = event.target.querySelector('[data-email]').value

    customerService.customerUpdate(customerId, inputName.value, inputEmail.value)
        .then(() => {
            window.location.href = '/admin/pages/update_success.html'
        })
})
