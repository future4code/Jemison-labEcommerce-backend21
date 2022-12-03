"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createCharacters_1 = require("./endpoits/createCharacters");
const deleteCharacter_1 = require("./endpoits/deleteCharacter");
const getAllCharacters_1 = __importDefault(require("./endpoits/getAllCharacters"));
app_1.app.get("/character", getAllCharacters_1.default);
app_1.app.put("/character", createCharacters_1.createCharacter);
app_1.app.delete("/character/:id", deleteCharacter_1.deleteCharacter);
//# sourceMappingURL=index.js.map