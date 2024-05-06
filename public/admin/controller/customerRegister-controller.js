import { customerService } from '../service/customer-service.js'

const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
    event.preventDefault();
    const name = event.target.querySelector('[data-name]').value
    const email = event.target.querySelector('[data-email]').value

    customerService.customerRegister(name, email)
    .then( () => {
        window.location.href = '/admin/pages/customer_list.html'
    }
    )
});
