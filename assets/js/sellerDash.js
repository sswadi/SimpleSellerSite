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

        for (categoryId in subcategory[value]) {
            subcategoryOptions += "<option>" + subcategory[value][categoryId] + "</option>";
        }
        document.getElementById("subCategory").innerHTML = subcategoryOptions;
    }
}


// function displaySelected() {
//     var cat = document.getElementById("category").value;
//     var subcat = document.getElementById("subCategory").value;
//     alert(cat + "\n" + subcat);
// }

// function resetSelection() {
//     document.getElementById("category").selectedIndex = 0;
//     document.getElementById("subCategory").selectedIndex = 0;
// }
