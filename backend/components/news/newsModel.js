const mongoose = require('mongoose');
const { sendResult } = require('../../websocket/websocket');

const newsSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    date: {
        type: 'date',
        default: Date.now
    },
    content: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    },
    archivedDate: 'date'
});

const News = mongoose.model('news', newsSchema);

News.watch().on('change', data => {
    if (data.operationType === 'insert') {
        sendResult(data.fullDocument);
    }
});

module.exports = News;