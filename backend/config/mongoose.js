const mongoose = require('mongoose');


mongoose.connect(mongo_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    .then(() => console.log('Successfully conected to MongoDB'))
    .catch(console.error)