import axios from 'axios';

export const generateMusic = async (req, res) => {
    const { is_auto, title, prompt, isInstrumental } = req.body;

    // Log incoming request data
    console.log("Received request to generate music:", {
        is_auto,
        title,
        prompt,
        isInstrumental,
    });

    // Prepare the request data for the external API
    const requestData = {
        is_auto,
        prompt,
        lyrics: '_',
        title,
        instrumental: isInstrumental ? 1 : 0,
    };

    try {
        // Log the request data being sent to the external API
        console.log("Sending request to music generation API with data:", requestData);

        const response = await axios.post('https://api.topmediai.com/v1/music', requestData, {
            headers: {
                'x-api-key': process.env.MUSIC_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        // Log the response from the music generation API
        console.log("Received response from music generation API:", response.data);

        const musicData = response.data;

        res.status(200).json({
            message: 'Music generated successfully!',
            music: musicData,
        });
    } catch (error) {
        // Log the error if the request fails
        console.error('Error generating music:', error);

        // Check if error has a response object
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
