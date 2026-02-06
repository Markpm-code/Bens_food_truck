// document.addEventListener('DOMContentLoaded', function () {
//     const myModal = new bootstrap.Modal(document.getElementById('newProductModal'));
//     myModal.show();
// });

document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('newProductModal');
    const myModal = new bootstrap.Modal(modalElement);

    // Show modal after 40 seconds
    setTimeout(() => {
        myModal.show();

        // Hide modal after 20 seconds
        setTimeout(() => {
            myModal.hide();
        }, 10000);

    }, 40000);
});