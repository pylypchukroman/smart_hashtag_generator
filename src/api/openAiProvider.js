import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY
const client = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});

export const getHashtagsFromOpenAi = async (text, count, setLoading) => {
    setLoading(true);
    try {
        const response = await client.responses.create({
            model: "gpt-4.1-nano",
            input: `Generate ${count} relevant hashtags for this post: ${text}`,
            temperature: 1.1
        });

        return response.output_text;
    } catch (error) {
        console.error('Помилка:', error);
    } finally {
        setLoading(false);
    }
}
