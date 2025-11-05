import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Replace 'YOUR_OPENAI_API_KEY' with your actual API key
const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are Honest Bulilu, a helpful and professional graphic design assistant.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const reply = completion.data.choices[0].message.content;

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch response from AI' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
