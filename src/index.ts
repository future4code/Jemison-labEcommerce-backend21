import { app } from "./app";
import { createCharacter } from "./endpoits/createCharacters";
import getAllCharacters from "./endpoits/getAllCharacters";



app.get("/character", getAllCharacters)

app.put("/character", createCharacter)