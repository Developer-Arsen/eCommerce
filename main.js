$(document).ready(function () {
    var docTitle = document.title; // amen script@ ir ejum ashxatelu hamar popoxakani mej stanal eji anun@

    //////////   Price range   //////////

    if (docTitle === "Home | Core-Systems" || docTitle === "Products | Core-Systems" ||
        docTitle === "Product details | Core-Systems") {
        // For price range
        $("#id_pricerange").slider({
            id: "id_pricerange",
            min: 0,
            max: 600,
            range: true,
            step: 5,
            value: [250, 450]
        });
    }

    //////////___Price range___//////////

    //////////   Bootstrap carousels   //////////

    if (docTitle === "Home | Core-Systems") {
        // Carousels
        $('#id_carousel1').bsTouchSlider();
    }


    if (docTitle === "Home | Core-Systems" || docTitle === "Product details | Core-Systems") {
        // Carousels
        $('#id_carousel2').bsTouchSlider();
    }

    //////////___Bootstrap carousels___//////////


    //////////   Button to top   //////////

    var oldScrollPosition = $(window).scrollTop(),
        savedScrollPosition;

    $("#id_to_top").on("click", "a", function (event) {
        event.preventDefault();
        savedScrollPosition = $(window).scrollTop();
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        $("#id_to_previous_scroll").addClass("custom_show");
    });

    $("#id_to_previous_scroll").on("click", "a", function (event) {
        $('body,html').animate({
            scrollTop: savedScrollPosition
        }, 1500);
        $("#id_to_previous_scroll").removeClass("custom_show");
    });

    $(document).on("scroll", "", function () {
        var newScrollPosition = $(window).scrollTop();
        if (newScrollPosition > oldScrollPosition) {
            $("#id_to_previous_scroll").removeClass("custom_show");
        }
        oldScrollPosition = newScrollPosition;
    });

    //////////___Button to top___//////////

    //////////   Navbar on scroll, Modal_viewpicture body height on resize   //////////

    // Navbari chisht scroll-i chap@ poxel 480-ic cacr width unecox deviceneri vra
    var w = window.innerWidth;
    if (w > 991) {
        $('#myNavbar').attr('data-offset-top', '121');
    } else if (w <= 991 && w > 480) {
        $('#myNavbar').attr('data-offset-top', '160');
    } else if (w <= 480 && w > 393) {
        $('#myNavbar').attr('data-offset-top', '193');
    } else {
        $('#myNavbar').attr('data-offset-top', '212');
    }

    // resize aneluc dynamic poxel
    $(window).resize(function () {
        var w = window.innerWidth;
        if (w > 991) {
            $('#myNavbar').attr('data-offset-top', '121');
        } else if (w <= 991 && w > 480) {
            $('#myNavbar').attr('data-offset-top', '160');
        } else if (w <= 480 && w > 393) {
            $('#myNavbar').attr('data-offset-top', '193');
        } else {
            $('#myNavbar').attr('data-offset-top', '212');
        }

        // modal viewpicture-i body-i height@ poxel resize aneluc (product_details.html)
        var modalBodyHeight = document.documentElement.clientHeight - $("#id_modal_viewpicture_header").outerHeight() -
            $("#id_modal_viewpicture_footer").outerHeight() - 40;
        $("#id_modal_viewpicture_body").height(modalBodyHeight);
    });

    //////////___Navbar on scroll, Modal_viewpicture body height on resize___//////////

    //////////   Login and Register modal   //////////

    // If clicked on login, open modal "login" tab opened, else
    // if clicked on register, open modal "register" tab opened
    $(".login_register").on("click", "", function (e) {
        e.preventDefault();
        $('#id_modalloginregister').modal({});
        if (this.id === "id_login_button") {
            $("#id_login_header").addClass("active");
            $("#id_register_header").removeClass("active");

            $("#id_login_tab").addClass("active in");
            $("#id_register_tab").removeClass("active in");
        } else if (this.id === "id_register_button") {
            $("#id_login_header").removeClass("active");
            $("#id_register_header").addClass("active");

            $("#id_login_tab").removeClass("active in");
            $("#id_register_tab").addClass("active in");
        }
    });

    // Change tabs (in modal)
    $('#id_login_register_menu').on("click", "a", function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    //////////___Login and Register modal___//////////

    //////////   Product details   //////////

    if (docTitle === "Product details | Core-Systems") {

        ////   On Quantity change   ////

        var productDetailQuantity = $('#id_product_details_quantity');

        // Input aneluc toxel miayn tver@
        $(productDetailQuantity).on("input", "", function () {
            if ($(this).val() !== "") {
                $(this).val($(this).val().replace(/[^\d]/g, ""));
                if ($(this).val() === "0") {
                    $(this).val("");
                } else if (+$(this).val() > 99) {
                    do {
                        $(this).val($(this).val().substring(0, $(this).val().length - 1));
                    } while (+$(this).val() > 99);
                }
            }
        });

        // Inputic heracneluc ete datark e, sarqi 1
        $(productDetailQuantity).on("blur", "", function () {
            if ($(this).val() === "") {
                $(this).val("1");
            }
        });

        ////___On Quantity change___////

        ////   Zoom on picture hover   ////

        // disable on mobile devices
        var currentImage = $("#id_viewcurrentproduct img");
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $(currentImage).ezPlus({
                zIndex: 2,
                cursor: 'pointer'
            });
        }

        ////___Zoom on picture hover___////

        ////   Owl carousel   ////

        var owlCarouselProductImages = $("#id_owl_carousel_product_images"),
            currentImageSrc = currentImage.attr('src'),
            allImagesInCarousel = $($(owlCarouselProductImages).html()).clone(),
            items_In_page_carousel = $("#id_owl_carousel_product_images .item"),
            items_In_modal_carousel = [];


        // Owlcarousel on page
        owlCarouselProductImages.owlCarousel({
            loop: false,
            dots: false,
            nav: true,
            mouseDrag: false,
            slideBy: 2,
            navContainer: '#id_owl_nav_controls',
            navElement: 'a',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3
                },
                320: {
                    items: 3
                },
                480: {
                    items: 4
                },
                560: {
                    items: 5
                },
                768: {
                    items: 3
                }
            }
        });

        // owl carouseli arajin elementin talis e sev border

        $(items_In_page_carousel[0]).addClass(" border_black");
        var selectedImage = $(".border_black");
        var selectedImageInmodal, currentImageSrcInModal;

        //  mouseover & select  //

        $(owlCarouselProductImages).on("mouseover", ".item", function () {
            currentImage.attr("src", $(this.firstChild).attr('src'));
            $(this.firstChild).attr('src');
        });

        $(owlCarouselProductImages).on("click", ".item", function () {
            $(selectedImage).removeClass("border_black");
            selectedImage = $(this);
            $(selectedImage).addClass("border_black");
            currentImageSrc = currentImage.attr('src');
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                $(currentImage).ezPlus({
                    zIndex: 2,
                    cursor: 'pointer'
                });
            }
        });

        $(owlCarouselProductImages).on("mouseout", ".item", function () {
            currentImage.attr("src", currentImageSrc);
        });

        //__mouseover & select__//

        ///  image view modal  ///

        var modalOneTimeOpened = false,
            owlCarouselInModal = $('#id_owl_carousel_in_modal'),
            modalViewpciture = $("#id_modalviewpicture");

        // Currentimage-i vra click aneluc
        $(currentImage).on("click", "", function () {
            $(modalViewpciture).modal({});
            $("#id_modaltitle").text($("#id_productname").text());
            $('#id_modalviewpicture_currentimage').attr("src", currentImageSrc);

            // ete voch mi angam chi bacvel, stexcel owlcarousel
            if (modalOneTimeOpened === false) {
                modalOneTimeOpened = true;
                owlCarouselInModal.html(allImagesInCarousel);
                owlCarouselInModal.owlCarousel({
                    loop: false,
                    dots: false,
                    nav: true,
                    mouseDrag: false,
                    slideBy: 2,
                    navContainer: '#id_owl_in_modal_nav_controls',
                    navElement: 'a',
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    margin: 20,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        320: {
                            items: 3
                        },
                        480: {
                            items: 4
                        },
                        560: {
                            items: 5
                        },
                        768: {
                            items: 10
                        }
                    }
                });
            }

            items_In_modal_carousel = $("#id_owl_carousel_in_modal .item");

            // ayn owl-i element@, vor@ ejum sev borderov e, modali owl-i hamapatasxan elementi vra arhestakan
            // click anel, vorpeszi nuynpes darna sev borderov ev modali ej@ tertel ayd elementi vra
            var tempindex1 = getElementIndexByClassname(items_In_page_carousel, "border_black");
            $(items_In_modal_carousel[tempindex1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [tempindex1 - 1, 1, true]);

            // hide current image nav controls in modal
            if (items_In_modal_carousel.length === 1) {
                $(modalViewpictureNavLeft).addClass("hide");
                $(modalViewpictureNavRight).addClass("hide")
            } else {
                var tempIndex2 = getElementIndexByClassname(items_In_modal_carousel, "border_black");
                if (tempIndex2 <= 0) {
                    $(modalViewpictureNavLeft).addClass("off");
                    $(modalViewpictureNavRight).removeClass("off");
                } else if (tempIndex2 >= items_In_modal_carousel.length - 1) {
                    $(modalViewpictureNavRight).addClass("off");
                    $(modalViewpictureNavLeft).removeClass("off");
                } else {
                    $(modalViewpictureNavLeft).removeClass("off");
                    $(modalViewpictureNavRight).removeClass("off");
                }
            }
        });

        // owlcarousel@ refresh lineluc modali body-i height@ poxel
        $(owlCarouselInModal).on('refreshed.owl.carousel', function () {
            var modalBodyHeight = document.documentElement.clientHeight - $("#id_modal_viewpicture_header").outerHeight() -
                $("#id_modal_viewpicture_footer").outerHeight() - 40;
            $("#id_modal_viewpicture_body").height(modalBodyHeight);
        });

        //  mouseover & select in modal //

        var currentImageInModal = $("#id_modalviewpicture_currentimage");

        $(owlCarouselInModal).on("mouseover", ".item", function () {
            currentImageInModal.attr("src", $(this.firstChild).attr('src'));
            $(this.firstChild).attr('src');
        });

        $(owlCarouselInModal).on("click", ".item", function () {
            $(selectedImageInmodal).removeClass("border_black");
            selectedImageInmodal = $(this);
            $(selectedImageInmodal).addClass("border_black");
            currentImageSrcInModal = $(this.firstChild).attr("src");
            currentImageInModal.attr("src", currentImageSrcInModal);

            // poxel slaqneri vichak@, ete petq e
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            if (currentIndex <= 0) {
                $(modalViewpictureNavLeft).addClass("off");
                $(modalViewpictureNavRight).removeClass("off");
            } else if (currentIndex >= items_In_modal_carousel.length - 1) {
                $(modalViewpictureNavRight).addClass("off");
                $(modalViewpictureNavLeft).removeClass("off");
            } else {
                $(modalViewpictureNavLeft).removeClass("off");
                $(modalViewpictureNavRight).removeClass("off");
            }
        });

        $(owlCarouselInModal).on("mouseout", ".item", function () {
            currentImageInModal.attr("src", currentImageSrcInModal);
        });

        //__mouseover & select in modal__//

        //  current image nav controls in modal  //

        var modalViewpictureNavLeft = $("#id_modal_viewpicture_nav_left"),
            modalViewpictureNavRight = $("#id_modal_viewpicture_nav_right");

        // dzax buttonin sexmeluc
        $(modalViewpictureNavLeft).on("click", "", function () {
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            $(items_In_modal_carousel[currentIndex - 1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [currentIndex - 2, 700, true]);

            $(modalViewpictureNavRight).removeClass("off");
            if (currentIndex <= 1) {
                $(modalViewpictureNavLeft).addClass("off");
            } else {
                $(modalViewpictureNavLeft).removeClass("off");
            }
        });

        // aj buttonin sexmeluc
        $(modalViewpictureNavRight).on("click", "", function () {
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            $(items_In_modal_carousel[currentIndex + 1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [currentIndex, 700, true]);

            $(modalViewpictureNavLeft).removeClass("off");
            if (currentIndex > items_In_modal_carousel.length - 3) {
                $(modalViewpictureNavRight).addClass("off");
            } else {
                $(modalViewpictureNavRight).removeClass("off");
            }
        });


        // keyboard-i aj u dzax arrowner@ sexmeluc
        $(document).on("keydown", "", function (e) {
            if ($(modalViewpciture[0]).hasClass("in") === true) {
                switch (e.originalEvent.key) {
                    case "ArrowLeft":
                        modalViewpictureNavLeft.trigger("click");
                        break;
                    case "ArrowRight":
                        modalViewpictureNavRight.trigger("click");
                        break;
                }
            }
        });

        // touch-i aj u dzax aneluc
        new Swipe(document.getElementById("id_modal_viewpicture_body"), function (event, direction) {
            event.preventDefault();
            switch (direction) {
                case "left":
                    modalViewpictureNavRight.trigger("click");
                    break;
                case "right":
                    modalViewpictureNavLeft.trigger("click");
                    break;
            }
        });

        //__current image nav controls in modal__//

        ///__image view modal__///
    }

    //////////___Product details___//////////

    //////////   Paginations   //////////

    if (docTitle === "Products | Core-Systems") {
        // Paginations in "products.html"
        // pagenumber_right elementi naxord "a"-i id-ic vercnenq verjin eji hamar@
        var maxPageNumber = +$("#id_pagenumber_right").parent().prev().children(":first").attr('id').replace(/^\D+/g, ''),
            currentPageNumber = 1;
        $('#id_pagination').on("click", "a", function (e) {
            e.preventDefault();
            if (this.id === "id_pagenumber_left") {
                if (currentPageNumber !== 1) {
                    currentPageNumber--;
                    $("#id_pagenumber_" + currentPageNumber).tab('show');
                }
            } else if (this.id === "id_pagenumber_right") {
                if (currentPageNumber !== maxPageNumber) {
                    currentPageNumber++;
                    $("#id_pagenumber_" + currentPageNumber).tab('show');
                }
            } else {
                $(this).tab('show');
                currentPageNumber = +this.id.replace(/^\D+/g, ''); // id-ic vercnenq eji hamar@
            }
        });
    }

    //////////___Paginations___//////////

    //////////   Cart   //////////

    if (docTitle === "Chart | IT-TALENTS") {

        ////   Cart Quantity and Total Price   ////

        //   Cart Total Price (on page load) //

        var cartUnitPrice = $('.cart_unit_price'),
            cartTotalPrice = $('.cart_total_price'),
            cartQuantityInput = $(".cart_quantity_input"),
            totalAmount = $("#id_total_amount"),
            totalAmountValue = 0;

        for (var i = 0; i < cartTotalPrice.length - 1; i++) {
            $(cartTotalPrice[i]).text("$" + ($(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val()));
            totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
        }
        $(totalAmount).text("$" + totalAmountValue);
        //__Cart Total Price (on page load)__//

        //  On Quantity change  //

        var flagInputEmptyBlur = false;
        // Input aneluc toxel miayn tver@, chtoxel 99-ic avel lini
        $(cartQuantityInput).on("input", "", function () {
            if ($(this).val() !== "") {
                $(this).val(+$(this).val().replace(/[^\d]/g, ""));
                if ($(this).val() === "0") {
                    $(this).val("");
                } else if (+$(this).val() > 99) {
                    do {
                        $(this).val($(this).val().substring(0, $(this).val().length - 1));
                    } while (+$(this).val() > 99);
                }
            }
            // total-@ poxel
            var totalPrice = "$" + +$(this).parent().prev().text().replace(/[^\d]/g, "") *
                +$(this).val();
            $(this).parent().next().children(":first").text(totalPrice);
            $("#id_pagenumber_right").parent().prev().children(":first").attr('id');
            // total amount-@ poxel
            totalAmountValue = 0;
            for (var i = 0; i < cartTotalPrice.length - 1; i++) {
                totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
            }
            $(totalAmount).text("$" + totalAmountValue);
        });

        // Inputic heracneluc ete datark e, sarqi 1
        $(cartQuantityInput).on("blur", "", function () {
            if ($(this).val() === "") {
                $(this).val("1");
                flagInputEmptyBlur = true;
            }
            // total-@ poxel
            var totalPrice = "$" + +$(this).parent().prev().text().replace(/[^\d]/g, "") *
                +$(this).parent().children(":nth-child(2)").val();
            $(this).parent().next().children(":first").text(totalPrice);
            // total amount-@ poxel
            totalAmountValue = 0;
            for (var i = 0; i < cartTotalPrice.length - 1; i++) {
                totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
            }
            $(totalAmount).text("$" + totalAmountValue);
        });

        // Plus aneluc avelacnel mek hatov, chtoxel 99-ic avel lini
        $('.cart_quantity_plus').on("click", "", function () {
            let prior_value = $(this).next().val();
            console.log(prior_value);
            if (flagInputEmptyBlur === true) {
                flagInputEmptyBlur = false;
            }

            if ($(this).prev().val() < 99) {
                $(this).prev()[0].value++;
                console.log($(this).prev()[0].value, prior_value);

            }
            if(prior_value == $(this).prev()[0].value ){
                console.log( $(this).prev()[0].value,prior_value);
                $(this).attr('disabled',true);
            }
           // if(prior_value != $(this).prev()[0].value)  {
           //  $(this).attr('disabled',false);
           //  console.log('a');
           //
           //          }
                    //
            // alert('sorry but this is max qunatitiy of this product')

            // total-@ poxel
            var totalPrice = "$" + +$(this).parent().prev().find('p').text().replace(/[^\d]/g, "") *
                +$(this).prev().val();
            $(this).parent().next().children(":first").text(totalPrice);
            // total amount-@ poxel
            totalAmountValue = 0;
            for (var i = 0; i < cartTotalPrice.length - 1; i++) {
                totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
            }
            $(totalAmount).text("$" + totalAmountValue);
        });

        // Minus aneluc stugel, ete 1 che, apa 1-ov pakasacnel
        $('.cart_quantity_minus').on("click", "", function () {
        
            let prior_value =  $(this).parent().children(":last-child")[0];
            // console.log($(this).parent().children(":last-child")[0]);
            console.log(prior_value);
            prior_value = prior_value.value;
            if ($(this).next().val() > 1) {
                $(this).next()[0].value--;
                // total-@ poxel
                if(prior_value != $(this).next()[0].value)  {
                    $(this).parent().children("input:last-child").prev().attr('disabled',false);
                    console.log($(this).parent().children("input:last-child").prev()[0]);

                            }
                var totalPrice = "$" + +$(this).parent().prev().text().replace(/[^\d]/g, "") *
                    +$(this).next().val();
                $(this).parent().next().children(":first").text(totalPrice);
                // total amount-@ poxel
                totalAmountValue = 0;
                for (var i = 0; i < cartTotalPrice.length - 1; i++) {
                    totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
                }
                $(totalAmount).text("$" + totalAmountValue);
            }
        });

        //__On Quantity change__//

        ////___Cart Quantity and Total Price___////

        ////   Cart Remove   ////

        // $('.product_hide_form').on('submit', function (e) {
        //     e.preventDefault();
        //     var hideTr = $(this).parent().parent();

        //     var product_info = new FormData($(this)[0]);
        //     // console.log(product_info);

        //     $.ajaxSetup({
        //         headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
        //     });
        //     $.ajax({
        //         url: location.origin + '/hide-product',
        //         method: 'POST',
        //         data: product_info,
        //         contentType: false,
        //         cache: false,
        //         processData: false,
        //         success: function (data) {
        //             if (data) {
        //                 hideTr.hide();
        //             }
        //         }
        //     });


        // $(this).parent().parent().remove();
        // cartUnitPrice = $('.cart_unit_price');
        // cartTotalPrice = $('.cart_total_price');
        // cartQuantityInput = $(".cart_quantity_input");
        //
        // // ete apranq chka, jnjel total price tox@, hakarak depqum hashvel total price-@
        // if (cartTotalPrice.length === 1) {
        //     $(".total_price").hide();
        // } else {
        //     totalAmountValue = 0;
        //     for (var i = 0; i < cartTotalPrice.length - 1; i++) {
        //         $(cartTotalPrice[i]).text("$" + ($(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val()));
        //         totalAmountValue += $(cartUnitPrice[i]).text().replace(/^\D+/g, '') * $(cartQuantityInput[i]).val();
        //     }
        //     $(totalAmount).text("$" + totalAmountValue);
        // }
        // });

        ////___Cart Remove___////
    }

    //////////___Cart___//////////

    //////////   Contact us - phone   //////////

    if (docTitle === "Contact | Core-Systems") {
        $("#id_phone").mask("(999) 999-999");
    }

    //////////___Contact us - phone___//////////

    //////////___Main scripts___//////////
    $('[data-toggle="tooltip"]').tooltip();

    // ajax
    // Функция для проверки объекта на пустоту
    function isEmpty(anyObj) {
        for (var key in anyObj) {
            return true;
        }
        return false;
    }

    $('.sub-category-select').hide();
    $('#category_list').on('change', function () {
        var sub_cat_list = $('#sub_cat_list');
        var selected = $(this).find(":selected").val();
        $.ajax({
            type: 'get',
            url: '/admin/product/create',
            data: {
                id: selected
            },
            success: function (data) {
                sub_cat_list.empty();
                var options = '<option selected disabled="disabled">Select brand</option>';
                for (var key in data) {
                    options += '<option value="' + data[key]['id'] + '">' + data[key]['title'] + '</option>';
                }
                sub_cat_list.append(options);
                if (isEmpty(data)) {
                    $('.sub-category-select').show();
                } else {
                    $('.sub-category-select').hide();
                }
            },
            error: function () {}
        });
    });
    // ajax
    //////////___Main scripts___//////////


    // User avatar upload
    $('#user-avatar').on('change', function () {
        // $('#avatar-form').submit();
        var img_info = new FormData($('#avatar-form')[0]);
        console.log(img_info);

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: location.origin + '/upload-avatar',

            method: 'POST',
            data: img_info,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data) {
                    // console.log(data);
                    $('#u_avatar').attr('src', location.origin + '/images/' + data);
                }
            }
        });
    });
    // User avatar upload

});

// funkcian veradardznum e objecti arajin handipac ayn elementi index@, vor uni trvac klass@
function getElementIndexByClassname(objectname, classname) {
    for (var i = 0; i < objectname.length; i++) {
        if ($(objectname[i]).hasClass(classname)) {
            return i;
        }
    }
    return -1;


}
$('.search_field').on('keyup', function () {
    // window.setInterval(function () {
    // $('#avatar-form').submit();
    var query = $('.search_field').val();



    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: location.origin + '/search',
        method: 'POST',
        data: {
            word: query
        },
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            if (data) {
                $('.search').attr('value', location.origin + '/images/' + data);
                // console.log(data);
                //$('#u_avatar').attr('src', location.origin + '/images/' + data);
            }
        }
    });

});
$(".rateing").on('click', function () {
    let id = $(this).val();
    let value = $(this).attr('id');
    // var data_value = $(this).val();
    // var all = [value, data_value];
     console.log(id,value);


    $.ajax({
        url: location.origin + '/rate',
        method: 'GET',
        data: {
            id: id,
            value: value
        },
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            console.log(data.id);
        },
    });
});



// let time = 0;

// window.setInterval(function () {
//     //   $( ".cart_quantity_plus" ).on('click',function() {
//     let prior_value = $(".prior_quan").val();
//     let value = $(".cart_quantity_input").val();

//     if (prior_value == value) {
//         $('.cart_quantity_plus').attr('disabled', 'disabled');
//         // alert('sorry but this is max qunatitiy of this product')
//     } else if (prior_value != value) {
//         $('.cart_quantity_plus').removeAttr('disabled');

//     }
//     console.log(prior_value, value);
//     // });

//     time++;
//     if (time == 100) {
//         console.clear();
//         time = 0;
//     }
// }, 150);

// $(".cart_quantity_plus").mouseover(function () {
//     let prior_value = $(".prior_quan").val();
//     let value = $(".cart_quantity_input").val();

//     if (prior_value == value) {
//         // $('.cart_quantity_plus').attr('disabled','disabled');
//         alert('sorry but this is max qunatitiy of this product');
//     } else if (prior_value != value) {
//         // $('.cart_quantity_plus').removeAttr('disabled');

//     }
// });

// $(".buy-button").on('click', function () {
//     let value = $(".cart_quantity_input").val();
//     $(".quantity").value = value;
//     console.log(value);
// });
