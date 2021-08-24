let col_slides = 3;

let  witdh =  $(window).width();

console.log(witdh);


if(witdh < 1024)
{

    col_slides =2;
}
if(witdh < 768)
{
    col_slides =1;
}
$(document).ready(function(){
    $('.slider-item').bxSlider({
        captions:true,
        controls:false,
        pager:true,
        moveSlides:3,
        slideWidth: 511,
        minSlides: col_slides,
        maxSlides: col_slides,
        auto:true,
        slideMargin:20,
        adaptiveHeight:true,
        responsive :true
    });
    $('.viewcar__slider').bxSlider({
        captions:true,
        controls:false,
        adaptiveHeight:true,
        responsive :true
    });
});







    $('.law__inner-body').each(function () {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function () {
    ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('active');
});
