const User = require('../models/sellerInfo');

const generateUniqueId = () => {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let uniqueId = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumeric.length);
        uniqueId += alphanumeric[randomIndex];
    }
    return uniqueId;
};

module.exports.home = function (req, res) {
    return res.render('home', {
        title: "Home"
    });
}


module.exports.signUp = function (req, res) {
    const { email, businessName, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        res.redirect('back');
        return;
    }

    // Check if email is already registered
    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                return res.render('signIn');
            } else {
                // Create a new user
                const newUser = new User({
                    email,
                    businessName,
                    password
                });

                return newUser.save().then(() => {
                    // Redirect to signIn after successful signup
                    return res.render('signIn');
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.send('Error occurred');
            return;
        });
};


module.exports.signIn = async function (req, res) {

    const { email, password } = req.body;

    // Find the user by email
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.redirect('back');
            return;
        }

        // Check if the password is correct
        if (user.password !== password) {
            res.redirect('back');
            return;
        }

        // User authenticated, redirect to sellerDashboard or any other desired page
        return res.redirect(`./sellerDash/${user._id}`);

    } catch (error) {
        res.send('Error occurred');
        return;
    }
}

module.exports.sellerDash = function (req, res) {
    
    const userId = req.params.id; // Retrieve the user ID from the request parameters
    return res.render('sellerDashboard', { userId });
}


module.exports.addStoreInfo = function (req, res) {
    const { address, gst, storeTimings, category, subCategory, productName, mrp, sp, quantity } = req.body;
    const logo = req.files['logo'][0].path;
    const images = req.files['images'].map(file => file.path);
    // const uniqueId = generateUniqueId();
    // const url = `http://localhost:8000/inventoryPage/${uniqueId}`;

    const userId = req.params.id; 

    // Find the user by ID
    User.findById(userId)
    .then(user => {
        if (!user) {
          res.status(404).send('Seller not found');
          return;
        }
  
        // Update the store information
        user.storeInfo = {
          address,
          gst,
          logo,
          storeTimings
        };
  
        // Update the categories field
        if (!user.categories) {
            user.categories = [];
        }
        user.categories.push({
            category: category,
          subcategories: [{ name: subCategory }]
        });
  
        // Update the inventory field
        if (!user.inventory) {
            user.inventory = [];
        }
        user.inventory.push({
          productName: productName,
          MRP: mrp,
          SP: sp,
          quantity: quantity,
          images: images,
        });
  
        // Update the url field
        // user.url = url;
  
        // Save the updated seller
        return user.save();
      })
      .then(() => {
        res.redirect('/inventoryPage');
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error saving store details');
      });
}

module.exports.inventoryPage = function (req, res) {
    return res.render('inventoryPage');
}



