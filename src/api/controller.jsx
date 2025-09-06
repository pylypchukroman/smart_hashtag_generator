import {getHashtagsFromOpenAi} from "./openAiProvider";

export async function generateHashtags (targetText, numberOfHashtags = 1, setLoading) {
    const response = await getHashtagsFromOpenAi(targetText, numberOfHashtags, setLoading);
    console.log(response)
    return response.split(' ');
}



