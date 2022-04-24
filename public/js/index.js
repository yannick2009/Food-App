const deleted = document.querySelectorAll('a.delete')

deleted.forEach((deleted) => {
    deleted.addEventListener('click', function () {
        let id = this.dataset.delete
        fetch(`/api/receipts/${id}`, {
            method: 'DELETE',
        }).then(() => {
            //
            window.location.href = '/'
        })
    })
})
