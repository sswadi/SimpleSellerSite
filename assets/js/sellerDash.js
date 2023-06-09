var subcategory = {
    Mobile: ["Nokia", "Redmi", "Samsung"],
    Clothes: ["Shirt", "Pant", "T-shirt"],
    Electronics: ["Mobiles", "Laptops", "Televisions"],
    Groceries: ["Beverages", "Snacks", "Canned Goods"],
    Pet_Supplies: ["Dog Supplies", "Cat Supplies", "Bird Supplies"],
    Beauty_And_Personal_Care: ["Skincare", "Haircare", "Makeup"],
    Clothing: ["Men's Clothing", "Women's Clothing", "Kids' Clothing"],
    Books: ["Fiction", "Non-Fiction", "Self-Help"],
    Home_And_Kitchen: ["Cookware", "Utensils", "Home Appliances"]
}

function makeSubmenu(value) {
    if (value === "") {
        document.getElementById("subCategory").innerHTML = "<option></option>";
    } else {
        var subcategoryOptions = "";
        //   for (var i = 0; i < subcategory[value].length; i++) {
        //     subcategoryOptions += "<option>" + subcategory[value][i] + "</option>";
        //   }

        for (categoryId in subcategory[value]) {
            subcategoryOptions += "<option>" + subcategory[value][categoryId] + "</option>";
        }
        document.getElementById("subCategory").innerHTML = subcategoryOptions;
    }
}


// function makeSubmenu(value) {
//     if (value.length == 0) document.getElementById("subCategory").innerHTML = "<option>default</option>";
//     else {
//         var citiesOptions = "";
//         for (categoryId in subcategory[value]) {
//             citiesOptions += "<option>" + subcategory[value][categoryId] + "</option>";
//         }
//         document.getElementById("subCategory").innerHTML = citiesOptions;
//     }
// }

// function displaySelected() {
//     var cat = document.getElementById("category").value;
//     var subcat = document.getElementById("subCategory").value;
//     alert(cat + "\n" + subcat);
// }

// function resetSelection() {
//     document.getElementById("category").selectedIndex = 0;
//     document.getElementById("subCategory").selectedIndex = 0;
// }
