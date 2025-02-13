import 'dotenv/config'
import express from "express"
import cors from "cors"
import axios from "axios"



const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;
const LIST_ID = process.env.TRELLO_LIST_ID; // ID of the list where cards should be created


app.post("/create-card", async (req, res) => {
    let { name, description, startDate, dueDate } = req.body;
     console.log(startDate)
    const convertToISO = (dateString) => {
        if (!dateString) return null;
        const [year, month, day] = dateString.split("-"); // Split the date
        return new Date(`${year}-${month}-${day}T00:00:00.000Z`).toISOString();
    };
   try{
    const response = await axios.post("https://api.trello.com/1/cards", null, {
        params: {
            name,
            desc: `Description: ${description}\nStart Date: ${startDate}\nDue Date: ${dueDate}`,
            idList: LIST_ID,
            key: API_KEY,
            token: TOKEN,
            due: convertToISO(dueDate) || null,
            start:convertToISO(startDate) || null
        }
    });

    return res.json({ message: "Card created successfully!", card: response.data });
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Trello card", error: error.response?.data || error.message });
}
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
