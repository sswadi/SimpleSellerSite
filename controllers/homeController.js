const User = require('../models/user');

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
        return res.render('sellerDashboard', { category: '' });

    } catch (error) {
        res.send('Error occurred');
        return;
    }
}

module.exports.sellerDash = function (req, res) {
    return res.render('sellerDashboard', { category: '' });
}


module.exports.addStoreInfo = function (req, res) {
    console.log('addStoreInfo!!!');
    return;
}

module.exports.inventoryPage = function (req, res) {
    return res.render('inventoryPage');
}



