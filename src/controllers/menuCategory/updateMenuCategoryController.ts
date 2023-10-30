import { Request, Response } from "express";

const updateMenuCategoryController = async (req: Request, res: Response) => {
    try {

    } catch (err: any) {
        res.status(400).json({ err })
    }
}

export { updateMenuCategoryController }