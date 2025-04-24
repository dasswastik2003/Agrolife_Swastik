$(function () {
    $('.Menu').hide()
    // $('.toggle-btn').show()

    $('.toggle-btn').click(function () {
        $('.Menu').show(2000)
        // $('.Menu').css({element.style:'block'})
        $('.toggle-btn').click(function () {
            $('.Menu').hide(2000)
            $('.navbar-toggler').show()
        })
    })
})