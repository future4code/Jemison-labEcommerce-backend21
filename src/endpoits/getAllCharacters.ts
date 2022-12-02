import { Request, Response } from "express";
import { characters } from "../data";

export default function (
    req: Request,
    resp:Response
){
    resp.send(characters)
}