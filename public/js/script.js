$(document).ready()
{


    $('.label-list input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%' // optional
    });

    $('.insta-img').masonry({
        itemSelector: '.img-item',
        fitWidth: true,
        columnWidth: '.img-item'
    });



    $('.time').wickedpicker({
        twentyFour: true
    }).val('');



    $('.input-services').click(function(){
        $('.label-list').css({'display':'block'});
    });
    $(document).mouseup(function (e){
        var div = $(".label-list");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.hide();
        }
    });

    $.datepicker.setDefaults({
        showOtherMonths: true,
        minDate: 0,
        dateFormat:'d MM yy',
        dayNamesShort: ["Пон", "Вто", "Сре", "Чет", "Пят", "Суб", "Вос"],
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        buttonImageOnly: true,
        buttonImage: "calendar.gif",
        buttonText: "Calendar"
    });

    $( ".date").datepicker();



    function phoneHolder() {
        $('.phone').each(function() {
            var placeholder = $(this).val();
            $(this).mask("+38(999) 999-99-99");
            $(this).bind('blur', function() {
                if ($(this).val() === '') {
                    $(this).val(placeholder);
                }
            });
            $(this).val(placeholder);
        });
    };
    phoneHolder();


    (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field--nao' ) ).forEach( function( inputEl ) {
            // in case the input is already filled..
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
            }

            // events:
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
            }
        }
    })();


    if ( $('.owl-carousel').length )
    {
        $('.main-slider').owlCarousel({
            margin: 10,
            nav: true,
            dots: true,
            navText: ["<img src='img/Arrow.svg'>","<img src='img/Arrow_right.svg'>"],
            responsive:{
                0: {
                    items: 1
                }

            }
        });
        $('.services-slider').owlCarousel({
            margin: 20,
            dots: true,
            nav: true,
            navText: ["<img src='img/Arrow.svg'>","<img src='img/Arrow_right.svg'>"],
            responsive:{
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                996: {
                    items: 4
                }

            }
        });
        $('.team-slider').owlCarousel({
            animateOut: 'fadeOut',
            margin: 10,
            dots: true,
            nav: true,
            navText: ["<img src='img/Arrow.svg'>","<img src='img/Arrow_right.svg'>"],
            responsive:{
                0: {
                    items: 1
                }
            }
        })
    }


    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(50.4370825,30.511816),
            zoom: 16,
            zoomControl: false,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#cec7b0"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#ededed"
                        },
                        {
                            "lightness": -10
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f3f3f3"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ededed"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 0
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ededed"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f3f3f3"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#a0a0a0"
                        },
                        {
                            "lightness": 30
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                }
            ]
        };

        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['bellagio', 'bellagio kyiv', '0931234567', 'undefined', 'bellagio.com', 50.437042501729216, 30.513985490876735, './img/map.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
            if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
            if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            link = '';     }
    }
        //потом надо поставить значения для карты: телефоны ,описание и тд
}

