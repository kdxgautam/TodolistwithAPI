const todoModel = require("..//models/todomodel");


export async function finddata(data) {
    const data = await todoModel.findOne(data);
    return data;
}
