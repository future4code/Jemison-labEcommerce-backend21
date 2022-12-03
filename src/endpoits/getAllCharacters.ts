import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";


export default async function (
    req: Request,
    resp:Response
):Promise<void>{

    try{
        
        const {name, orderBy, orderType, page} = req.query

        const resultsPerPage = 5

        const offset = resultsPerPage * (Number(page) - 1)

        const characters: character[] = await connection("character")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(orderBy as string || "name", orderType as string)
            .offset(offset)
        resp.send(characters)
    }catch(error){
        resp.status(500).send("Erro inesperado")
    }
}