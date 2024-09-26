import axios from 'axios';

export const generateMusic = async (req, res) => {
    const { is_auto, title, prompt, isInstrumental } = req.body;

    console.log("Received request to generate music:", {
        is_auto,
        title,
        prompt,
        isInstrumental,
    });

    const requestData = {
        is_auto,
        prompt,
        lyrics: '_',
        title,
        instrumental: isInstrumental ? 1 : 0,
    };

    try {
        console.log("Sending request to music generation API with data:", requestData);

        const response = await axios.post('https://api.topmediai.com/v1/music', requestData, {
            headers: {
                'x-api-key': process.env.MUSIC_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        console.log("Received response from music generation API:", response.data);

        const musicData = response.data;

        res.status(200).json({
            message: 'Music generated successfully!',
            music: musicData,
        });
    } catch (error) {
        console.error('Error generating music:', error);

        if (error.response) {
            console.error('API Response Error:', error.response.data);
            return res.status(error.response.status || 500).json({
                message: 'Failed to generate music. Please try again.',
                error: error.response.data,
            });
        } else {
            return res.status(500).json({ message: 'Failed to generate music. Please try again.', error });
        }
    }
};
