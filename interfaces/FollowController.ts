import {Request, Response} from "express";

export default interface FollowController{

    userFollowsAnotherUser (req: Request, res: Response): void;
    userUnfollowsAnotherUser (req: Request, res: Response): void;
    findAllUsersFollowingUser (req: Request, res: Response): void;
    findAllUsersFollowedByUser (req: Request, res: Response): void;
};