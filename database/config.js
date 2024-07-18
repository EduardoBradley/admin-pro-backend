const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        
        await mongoose.connect( process.env.DB_CNN );
        console.log('BD online');
    } catch (error) {
        console.log('error');
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    dbConnection
}



// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));