
$(function() {  
    var data = [  
        {
            "value":"Apple MacBook Air M1 256GB 2020",
            "label":"Apple MacBook Air M1 256GB 2020 - 19.290.000",
            "namesp":"Apple MacBook Air M1 256GB 2020",
            "masp":"SP1",
            "price": 19290000,
            "unit":"LP",
            "type":"Laptop"

        },
        {
            "value":"Apple Macbook Air M2 2022 8GB 256GB",
            "label":"Apple Macbook Air M2 2022 8GB 256GB - 27.090.000",
            "namesp":"Apple Macbook Air M2 2022 8GB 256GB",
            "masp":"SP2",
            "price": 27090000,
            "unit":"LP",
            "type":"Laptop"

        },
        {
            "value":"Laptop MSI Modern 14 B11MOU-1032VN",
            "label":"Laptop MSI Modern 14 B11MOU-1032VN - 14.790.000",
            "namesp":"Laptop MSI Modern 14 B11MOU-1032VN",
            "masp":"SP3",
            "price": 14790000,
            "unit":"LP",
            "type":"Laptop"

        },
        {
            "value":"Surface Laptop Go Core i5",
            "label":"Surface Laptop Go Core i5 - 15.790.000",
            "namesp":"Surface Laptop Go Core i5",
            "masp":"SP4",
            "price": 15790000,
            "unit":"LP",
            "type":"Laptop"

        }
    ];  
    $( "#txtSanpham" ).autocomplete({  
      source: data,
      select: function (e, ui){
        $("#lblChon").html("Bạn đã chọn <b>["+ ui.item.namesp+"]</b> với giá " + formatNumber(ui.item.price) + " VNĐ");
      }
    });  
  }); 

  function formatNumber(n){
    return new Intl.NumberFormat('vi-VN', {maximumSignificantDigits: 3}).format(n);
  }