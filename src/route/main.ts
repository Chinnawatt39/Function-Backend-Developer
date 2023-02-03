import { Router } from "express";
import moment = require("moment");
const router = Router();


// ข้อ 1
router.get("/max_min", async function (req, res) {
    res.json(await max_min());
});

// ข้อ 2
router.post("/search/string", async function (req, res) {
    res.json(await search_string(req.body.text));
});

// ข้อ 3
router.post("/check/bracket", async function (req, res) {
    res.json(await check_bracket(req.body.bracket));
});

// ข้อ 4
router.post("/less/number", async function (req, res) {
    res.json(await less_number());
});

// ข้อ 5
router.post("/check/bracket/all", async function (req, res) {
    res.json(await check_bracket_all(req.body.bracket));
});

// ข้อ 6
router.post("/christmas/tree", async function (req, res) {
    res.send(await christmas_tree(req.body.number));
});



//เรียงจากมากไปน้อย
export function compare_numbers_desc(number_1 : number, number_2 : number) {
    return number_2 - number_1;
}

//เรียงจากน้อยไปมาก
export function compare_numbers_asc(number_1 : number, number_2 : number) {
    return number_1 - number_2;
}


function max_min() {
    const array : Array<number> = [ 5,7,9,12,0,-1,7,12 ]
    var max_3 = array.sort(compare_numbers_desc).slice(0,3); //หาค่า 3 ลำดับแรกจากมากไปน้อย
    var min_3 = array.sort(compare_numbers_asc).slice(0,3); //หาค่า 3 ลำดับแรกจากน้อยไปมาก
    let result = {
        "sort_desc" : array.sort(compare_numbers_desc),
        "max_top3" : max_3,
        "min_3" : min_3
    }
    return result;
}

//ข้อ 2
function search_string(text : string){
    let message = "Booleans and Conditionals";
    let check_position = message.search(text); // ค้นหาคำใน string
    if(check_position == -1){ 
        return 0
    }else{
        return 1
    }
}

//ข้อ 3
function check_bracket(bracket : string){
    let stack : any = [];
    for(let i = 0; i < bracket.length; i++){
        let char = stack[stack.length - 1]
        if(bracket[i] == "("){
            stack.push(bracket[i]);
        }else if(char == "(" && bracket[i] == ")"){
            stack.pop()
        }else{
            return 0;
        }
    }
    return 1
}

//ข้อ 4
function less_number(){
    const array : Array<number> = [9,16,3,3,9,1,-1,-1]
    var sort_number_desc = array.sort(compare_numbers_desc)
    let number : any
    let result : any = [];
    for(let i = 0; i < sort_number_desc.length; i++){
        if(sort_number_desc[i] > sort_number_desc[i+1]){
            number = "{"  + sort_number_desc[i] + ":" + sort_number_desc[i+1] + "}"
            result.push(number)
        }else if(i ==  sort_number_desc.length - 1){
            number = "{"  + sort_number_desc[i] + ":" + 0 + "}"
            result.push(number)
        }
    }
    return result;
}

//ข้อ 5
function check_bracket_all(bracket : string){
    let stack : any = [];
    for(let i = 0; i < bracket.length; i++){
        let char = stack[stack.length - 1]
        if(bracket[i] == "(" || bracket[i] == "{" || bracket[i] == "["){
            stack.push(bracket[i]);
        }else if(
            (char == "(" && bracket[i] == ")") || (char == "{" && bracket[i] == "}") || (char == "[" && bracket[i] == "]")
        ){
            stack.pop()
        }else{
            return 0;
        }
    }
    return 1
}

//ข้อ 6
function christmas_tree(number : number){
    let row = ""
    //number = number + 1;
    for (let i = 0; i < number + 1; i++) {
        row += " ".repeat(number - i) + "*" + "*".repeat(i  * 2) + `\n`;
    }
    if(number >= 2){
        for (let j = 0; j < 2; j++) {
            row += " ".repeat(number  - j) + "*" + "*".repeat(j  * 2) + `\n`;
        }
    }
    console.log(row)
    return row
}

//ข้อ 7
function relationship(){
    const string = "ก , ข , ข , ฃ , ค , ? , ฉ , ?, …, L , …?"
    
}




export default router;