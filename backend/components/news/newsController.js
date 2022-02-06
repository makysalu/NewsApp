const News = require('./newsModel')

exports.getNews = async (req, res, next) => {
    try {
        const news = await News.find({ archivedDate: null }).sort({date: 'desc'});
        res.status(200).json({
            status: 'success',
            data: {
                news
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.getArchivedNews = async (req, res, next) => {
    try {
        const news = await News.find({ archivedDate: {$ne:null} }).sort({archivedDate: 'desc'});
        res.status(200).json({
            status: 'success',
            data: {
                news
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.archiveNews= async (req, res, next) => {
    try{
        const {id} = req.body;        
        const newsArchived = await News.updateOne( { _id: id}, {archivedDate: Date.now()} )
        if (newsArchived.matchedCount === 0) {
            throw new Error('News not found.');
        }
        if (newsArchived.modifiedCount === 0) {
            throw new Error('News not modified.')
        } 
        res.status(200).json({
            status: 'success'
        })     
    } catch (error) {
        next(error);
    }
}

exports.deleteNews = async (req, res, next) => {
    try {
        const {id} = req.params;
        const newsDeleted = await News.deleteOne({ _id: id });
        if (newsDeleted.deletedCount !== 1) {
            throw new Error('Article not deleted');
        }
        res.status(204).json({ status: 'success' });
    } catch (error) {
        next(error);
    }
    
}

