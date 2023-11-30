import toastr from 'toastr';
import './/../../node_modules/toastr/build/toastr.css';
import './../../css/styles/toastr.css';

document.addEventListener('DOMContentLoaded', function () {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    document.getElementById('board-form-result-container')
        .addEventListener('click', function (event) {
            const card = event.target.closest('.mission-card');
            const missionName = card.querySelector('h4').textContent;

            if (event.target.tagName === 'BUTTON') {
                toastr.info('Accepted mission', missionName);
            }
        })
})