import {getHashtagsFromOpenAi} from "./openAiProvider";

export function generateHashtags (targetText, numberOfHashtags = 1) {
    return getHashtagsFromOpenAi(targetText, numberOfHashtags);
}
