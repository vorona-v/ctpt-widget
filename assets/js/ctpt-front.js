(function(ctpt) {
    ctpt("#ctpt-address").on('click', function() {
        ctpt('.ctpt-widget__search-title').hide();
        ctpt('.ctpt-widget__search-hint').hide();
        ctpt('.ctpt-widget__search-wrap').addClass('current');
        ctpt('.ctpt-widget__delivery-type').addClass('current');
        ctpt(this).closest('.ctpt-widget').addClass('second-step');
    });

    //Yandex map

    function init(){
        var myMap = new ymaps.Map("ctpt-map", {
            center: [55.76, 37.64],
            zoom: 7,
            controls: []
        });
    }

    ctpt('.ctpt-widget__tab-js .ctpt-widget__delivery-type__item').on('click', function(){
        let This = ctpt(this);
        let ThisType = This.attr('data-delivery-type');
        console.log('click')
        ctpt('.ctpt-widget__delivery-type').removeClass('current');

        ctpt('.ctpt-widget__delivery-button-wrap').addClass('current');
        ctpt('.ctpt-widget__sidebar').addClass('current');

        ctpt("#"+ThisType).addClass('current');

        ctpt('.ctpt-widget').removeClass('second-step');

        ctpt('.ctpt-widget__search-wrap').hide();
        ctpt('.ctpt-widget__map-search-wrap').show();

        ymaps.ready(init);
    })

    ctpt('.ctpt-widget__sidebar-button-back, .ctpt-widget__delivery-button').on('click', function(){
        ctpt('.ctpt-widget__delivery-button-wrap').removeClass('current');
        ctpt('.ctpt-widget__delivery-type').addClass('current');
        ctpt('.ctpt-widget__sidebar').removeClass('current');
        ctpt('.ctpt-widget__delivery-button').removeClass('current');

        ctpt('.ctpt-widget__search-wrap').show();
        ctpt('.ctpt-widget__map-search-wrap').hide();

    })

    ctpt('.ctpt-widget__panel-list-delivery .ctpt-widget__panel-content_list-item').on('click', function(){
        let This = ctpt(this);
        let AllItem = ctpt('.ctpt-widget__panel-list-delivery .ctpt-widget__panel-content_list-item');

        This.toggleClass('ctpt-widget__disabled');

        if (AllItem.filter('.ctpt-widget__disabled').length) {
            ctpt('.ctpt-widget__sidebar-button-setting-icon').addClass('current');
        }else {
            ctpt('.ctpt-widget__sidebar-button-setting-icon').removeClass('current');
        }
    })

    ctpt('.ctpt-widget__sidebar-button.ctpt-widget__sidebar-button-js').on('click', function(){
        let ThisButton = ctpt(this);
        let ButtonType = ThisButton.attr('data-button-type');
        let PanelWrap = ctpt('.ctpt-widget__panel');
        let AllButton = ctpt('.ctpt-widget__sidebar-button');
        let OtherButtons = AllButton.not(ThisButton);
        let PanelLists = ctpt('.ctpt-widget__panel-content-wrap');
        let Hint = ctpt('.ctpt-widget__sidebar-button__hint');

        Hint.removeClass('show');
        if (ctpt(window).width() < 991) {
            Hint.removeClass('show');
        }
        PanelLists.hide();
        OtherButtons.removeClass('current');

        ThisButton.toggleClass('current');

        ctpt("#"+ButtonType).show();

        if (ThisButton.hasClass('current')) {
            PanelWrap.addClass('open');
        } else {
            PanelWrap.removeClass('open');
        }
    })

    ctpt('.ctpt-widget__panel-list-points .ctpt-widget__panel-content_list-item').on('click', function(){
        let ThisItem = ctpt(this);
        let WidgetDetails = ctpt('.ctpt-widget__panel-details');
        let PanelLists = ThisItem.closest(ctpt('.ctpt-widget__panel-list'));
        console.log('ctpt-widget__panel-content_list-item');
        PanelLists.addClass('current');

        WidgetDetails.addClass('current');
    })

    ctpt('.ctpt-widget__panel-details .ctpt-widget__panel-details__back').on('click', function(){
        let WidgetDetails = ctpt('.ctpt-widget__panel-details');
        let PanelLists = ctpt('.ctpt-widget__panel-list');
        console.log('ctpt-widget__panel-details__back');
        PanelLists.removeClass('current');

        WidgetDetails.removeClass('current');
    })

    ctpt('.ctpt-widget__sidebar-button-checked').on('click', function (){
        let This = ctpt(this);

        This.toggleClass('current');
    })


    let timer;
    ctpt('.ctpt-widget__sidebar-button').on('mouseenter', function (){
        let This = ctpt(this);
        let ButtonType = This.attr('data-button-type');
        let Hint = ctpt('.ctpt-widget__sidebar-button__hint[data-button-type='+ButtonType+']');

        Hint.addClass('show');

        if (ctpt(window).width() < 991) {
            timer = setTimeout(function() {
                This.trigger('mouseleave');
            }, 3000);
        }

    })

    ctpt('.ctpt-widget__sidebar-button').on('mouseleave', function (){
        let This = ctpt(this);
        let ButtonType = This.attr('data-button-type');
        let Hint = ctpt('.ctpt-widget__sidebar-button__hint[data-button-type='+ButtonType+']');

        Hint.removeClass('show');

        clearTimeout(timer);
    })




    const SELECT = ctpt('.ctpt-widget__select');

    SELECT.on('click', '.ctpt-widget__select__head', function () {
        if (ctpt(this).hasClass('open')) {
            ctpt(this).removeClass('open');
            ctpt(this).next().fadeOut();
        } else {
            ctpt('.ctpt-widget__select__head').removeClass('open');
            ctpt('.ctpt-widget__select__list').fadeOut();
            ctpt(this).addClass('open');
            ctpt(this).next().fadeIn();
        }
    });

    SELECT.on('click', '.ctpt-widget__select__item', function () {
        ctpt('.ctpt-widget__select__head').removeClass('open');
        ctpt(this).parent().fadeOut();
        ctpt(this).parent().prev().text($(this).text());
        ctpt(this).parent().prev().prev().val($(this).text());
    });

    ctpt(document).click(function (e) {
        if (!ctpt(e.target).closest(SELECT).length) {
            ctpt('.ctpt-widget__select__head').removeClass('open');
            ctpt('.ctpt-widget__select__list').fadeOut();
        }
    });

    ctpt('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        console.log('modal')
        ctpt('.ctpt-widget__modal').toggleClass('is-visible');
    });
})(jQuery);