const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`Base de donnée connectée`);
	} catch (error) {
		console.error(`Erreur lors de la connexion à la base de donnée`, error);
	}
}

module.exports = connectDB