module.exports = translate;

// Uwu everything
function translate(message) {
    return new Promise((resolve, reject) => {
        if (message.content != null && typeof(message.content) === 'string') {
            let translation = message.content;
            // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string
            translation = translation.replace(/(?:r|l)/g, 'w');
            translation = translation.replace(/(?:R|L)/g, 'W');
            translation = translation.replace(/(?:no)/g, 'nyo');
            translation = translation.replace(/(?:mo)/g, 'myo');
            translation = translation.replace(/(?:No)/g, 'Nyo');
            translation = translation.replace(/(?:Mo)/g, 'Myo');
            translation = translation.replace(/(?:na)/g, 'nya');
            translation = translation.replace(/(?:ni)/g, 'nyi');
            translation = translation.replace(/(?:nu)/g, 'nyu');
            translation = translation.replace(/(?:ne)/g, 'nye');
            translation = translation.replace(/(?:anye)/g, 'ane');
            translation = translation.replace(/(?:inye)/g, 'ine');
            translation = translation.replace(/(?:onye)/g, 'one');
            translation = translation.replace(/(?:unye)/g, 'une');
            if (message.content === translation) {
                console.log(translation);
                reject('Translated message was the same as original');
            } else {
                resolve(translation + ' uwu');
            }
        } else {
            reject('Message must contain a content field of type string!');
        }
    });
}