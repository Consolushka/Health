$('document').ready(function () {
    var list = $('#catalogList');
    var btn = $('.catalog-button');
    var catalogItems = $('.catalog-list__item');
    var innerList = $('.inner-list');
    innerList.hide();
    btn.mouseover(function (e) {
        list.slideDown(300);
    });
    var flag = false;
    catalogItems.mouseover(function () {
        this.classList.add('catalog-list__item--hover');
        var NameList;
        switch (this.id) {
            case "Medications": flag=false;NameList=MedicationsList;break;
            case "Vitamins": flag=false;NameList=VitaminsList;break;
            case "Bads": flag=false;NameList=BadsList;break;
            case "Products": flag=false;NameList=ProductsList;break;
            case "Equipment": flag=false;NameList=EquipmentList;break;
            case "Hygiene": flag=false;NameList=HygieneList;break;
            case "MomBaby": flag=false;NameList=MomBabyList;break;
            case "Diet": flag=false;NameList=DietList;break;
            case "Cosmetics": flag=false;NameList=CosmeticsList;break;
        }
        if(flag===false) {
            innerList.empty();
            for (var i = 0; i < NameList.length; i++) {
                var innerItem = document.createElement('li');
                innerItem.innerHTML = NameList[i];
                innerItem.setAttribute("class", "inner-list__item");
                innerList.append(innerItem);
            }
            flag=true;
        }
        innerList.fadeIn();
    }).mouseout(function () {
        this.classList.remove('catalog-list__item--hover');
    });
    $(document).click(function (e) {
        if (!list.is(e.target)
            && list.has(e.target).length === 0
            && !btn.is(e.target)) {
            list.slideUp();
            innerList.fadeOut(300);
        }
    });
});