import {getHashtagsFromOpenAi} from "./openAiProvider";

export async function generateHashtags (targetText, numberOfHashtags = 1) {
    const response = await getHashtagsFromOpenAi(targetText, numberOfHashtags);
    console.log(response);
}



