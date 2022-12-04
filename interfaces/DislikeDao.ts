import Dislike from "../models/Dislike";

/**
 * @file Declares API for Dislikes related data access object methods
 */
export default interface DislikeDao{

    findAllUsersThatDislikedTuit (tid: string): Promise<Dislike[]>;
    findAllTuitsDislikedByUser (uid: string): Promise<Dislike[]>;
    userUnDislikesTuit (tid: string, uid: string): Promise<any>;
    userDislikesTuit (tid: string, uid: string): Promise<Dislike>;
    findUserDislikesTuit(uid:string, tid:string):Promise<Dislike>;
    countHowManyDislikedTuit(tid:string):Promise<any>;

};