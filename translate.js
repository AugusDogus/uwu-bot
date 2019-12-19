module.exports = translate;

// Uwu everything
function translate(message) {
    return new Promise((resolve, reject) => {
        if (message.content != null && typeof(message.content) === 'string') {
            let translation = message.content;
            // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string
            translation = translation.split('L').join('W');
            translation = translation.split('R').join('W');
            translation = translation.split('l').join('w');
            translation = translation.split('r').join('w');
            translation = translation.split('no').join('nyo');
            translation = translation.split('mo').join('myo');
            translation = translation.split('No').join('Nyo');
            translation = translation.split('Mo').join('Myo');
            translation = translation.split('na').join('nya');
            translation = translation.split('na').join('nya');
            translation = translation.split('ni').join('nyi');
            translation = translation.split('nu').join('nyu');
            translation = translation.split('ne').join('nye');
            translation = translation.split('anye').join('ane');
            translation = translation.split('inye').join('ine');
            translation = translation.split('onye').join('one');
            translation = translation.split('unye').join('une');
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