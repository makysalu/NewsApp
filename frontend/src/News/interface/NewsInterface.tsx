export interface News {
    _id: string;
    title: string,
    description: string,
    date: Date;
    content: string,
    author: string,
    archivedDate?: Date;
}