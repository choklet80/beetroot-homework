
const el = $(`.accordion-item__title`) 

el.on('click', function(e) {
    $(this).parent('.accordion-item')
    .siblings('.accordion-item')
    .children('.accordion-item__content')
    .hide(300)

    const contentElement = $(this).siblings('.accordion-item__content')

    if(contentElement.css('display') === 'none'){
        contentElement.show(300)
    }
    else{
        contentElement.hide(300)
    }
})

$(window).on('click', function(e){
    if($(e.target).closest('.accordion-item').length === 0)
    {
        $('.accordion-item__content')
        .hide(300)
    }
})