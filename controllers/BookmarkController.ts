import BookmarkControllerI from "../interfaces/BookmarkController";
import BookmarkDao from "../daos/BookmarkDao";
import {Express, Request, Response} from "express";

export default class BookmarkController implements BookmarkControllerI {

    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;
    public static getInstance = (app: Express): BookmarkController => {
        if (BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.post("/api/users/:uid/bookmarks/:tid",
                BookmarkController.bookmarkController.userBookmarksTuit);
            app.delete("/api/users/:uid/bookmarks/:tid",
                BookmarkController.bookmarkController.userUnBookmarksTuit);
            app.get("/api/users/:uid/bookmarks",
                BookmarkController.bookmarkController.findAllTuitsBookmarkedByUser);
        }
        return BookmarkController.bookmarkController;
    }

    private constructor() {
    };

    findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao
            .findAllTuitsBookmarkedByUser(req.params.uid)
            .then(bookmarks => res.json(bookmarks));

    userBookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao
            .userBookmarksTuit(req.params.uid, req.params.tid)
            .then(bookmarks => res.json(bookmarks));

    userUnBookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao
            .userUnbookmarksTuit(req.params.uid, req.params.tid)
            .then(status => res.json(status));

};