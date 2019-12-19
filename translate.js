module.exports = translate;

// Uwu everything
function translate(message) {
    return new Promise((resolve, reject) => {
        if (message.content != null && typeof(message.content) === 'string') {
            let translation = message.content;
            translation = translation.replace('L', 'W');
            translation = translation.replace('R', 'W');
            translation = translation.replace('l', 'w');
            translation = translation.replace('r', 'w');
            translation = translation.replace("no", "nyo");
            translation = translation.replace("mo", "myo");
            translation = translation.replace("No", "Nyo");
            translation = translation.replace("Mo", "Myo");
            translation = translation.replace("na", "nya");
            translation = translation.replace("ni", "nyi");
            translation = translation.replace("nu", "nyu");
            translation = translation.replace("ne", "nye");
            translation = translation.replace("anye", "ane");
            translation = translation.replace("inye", "ine");
            translation = translation.replace("onye", "one");
            translation = translation.replace("unye", "une");
            if (message.content === translation) {
                console.log(translation);
                reject("Translated message was the same as original");
            } else {
                resolve(translation + " uwu");
            }
        } else {
            reject("Message must contain a content field of type string!");
        }
    });
}