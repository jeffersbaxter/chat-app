const messages = [];

const onCreatedMessage = (message, callback) => {
    messages.push(message);
}


export const onCreatedMessageListener = (callback) => onCreatedMessage(message, callback)