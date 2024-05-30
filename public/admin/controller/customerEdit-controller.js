import { customerService } from '../service/customer-service.js'

( async () => {
    const newUrl = new URL(window.location)
    const customerId = newUrl.searchParams.get('id')

    const inputName = document.querySelector('[data-name]')
    const inputEmail = document.querySelector('[data-email]')

    try {
        const data = await customerService.getCustomerById(customerId)
        inputName.value = data.name
        inputEmail.value = data.email
    }
    catch(error) {
        console.log(error)
        window.location.href = '/admin/pages/error.html'
    }

    const form = document.querySelector('[data-form]')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        try {
            await customerService.customerUpdate(customerId, inputName.value, inputEmail.value)
            window.location.href = '/admin/pages/update_success.html'
        }
        catch(error) {
            console.log(error)
            window.location.href = '/admin/pages/error.html'
        }
    })
})()
