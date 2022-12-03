import { Request, Response} from "express"


export function createCharacter(
    req:Request,
    resp: Response
):void{

    const {name, gender, description} = req.body

    // characters.push({
    //     id: Date.now(),
    //     name,
    //     gender,
    //     description
    // })


    resp.status(201).end()
}