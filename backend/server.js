const express = require('express');
const cookieParse = require("cookie-parser")
const cors = require("cors")
const prisma = require('./database/databaseConnection.js');

const app = express();
app.use(express.json())
app.use(cookieParse())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));




async function connectToDatabase() {
    try {
        await prisma.$connect();
        console.log(' Database connected successfully.');
    } catch (error) {
        console.error(' Database connection failed:', error);
        process.exit(1); 
    }
}

app.get('/', async (req, res) => {
    const time = await prisma.$queryRaw`SELECT NOW()`;
    res.send(`Server running at ${time[0].now}`);
});


// routes 

const userRoutes = require("./routes/users/usersRoutes.js")
app.use(userRoutes)

const PORT = 5050;

app.listen(PORT, async () => {
    await connectToDatabase(); 
    console.log(` Server listening on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    console.log('🔒 Database connection closed.');
    process.exit();
});
