import { customerService } from '../service/customer-service.js'

const form = document.querySelector('[data-form]')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
        const name = event.target.querySelector('[data-name]').value
        const email = event.target.querySelector('[data-email]').value

        await customerService.customerRegister(name, email)
        window.location.href = '/admin/pages/register_success.html'
    }
    catch (error) {
        console.log(error)
        window.location.href = "/admin/pages/error.html"
    }
})
