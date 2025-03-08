const strokes = ["㇐", "㇑", "㇓", "㇔", "㇕", "㇅", "㇇", "㇗", "㇞", "㇛", "㇂", "㇎"];

const characters = [
	"不", "丏", "丐", "丑", "专", "中", "丰", "丹", "为", "乌", "乏", "书", "予", "云", "互",
	"亓", "五", "井", "亢", "什", "仁", "仂", "仃", "仄", "仅", "仆", "仇", "仉", "今", "介",
	"仍", "从", "仑", "仓", "以", "允", "元", "公", "六", "兮", "内", "冈", "冗", "凤", "凶",
	"分", "切", "刈", "劝", "办", "勾", "勿", "匀", "化", "匹", "区", "卅", "升", "午", "卞",
	"卬", "厄", "厅", "历", "友", "双", "反", "壬", "天", "太", "夫", "夬", "夭", "孔", "少",
	"尤", "尹", "尺", "屯", "巨", "巴", "币", "幻", "廿", "开", "引", "心", "忆", "戈", "户",
	"手", "扎", "支", "文", "斗", "斤", "方", "无", "日", "曰", "月", "木", "欠", "止", "歹",
	"殳", "毋", "毌", "比", "毛", "氏", "气", "水", "火", "爪", "父", "爻", "爿", "片", "牙",
	"牛", "犬", "王", "瓦", "艺", "见", "计", "订", "讣", "认", "讥", "贝", "车", "邒", "邓", "长", "闩", "队", "韦", "风" ]; 

const orders = [
	["1", "3", "2", "4"], ["1", "2", "8", "5"], ["1", "2", "1", "9"], ["5", "2", "1", "1"], ["1", "1", "9", "4"], 
	["2", "5", "1", "2"], ["1", "1", "1", "2"], ["3", "5", "4", "1"], ["4", "3", "5", "4"], ["3", "5", "9", "1"], 
	["3", "4", "7", "4"], ["5", "5", "2", "4"], ["7", "4", "7", "2"], ["1", "1", "8", "4"], ["1", "8", "5", "1"], 
	["1", "1", "3", "2"], ["1", "2", "5", "1"], ["1", "1", "3", "2"], ["4", "1", "3", "6"], ["3", "2", "1", "2"], 
	["3", "2", "1", "1"], ["3", "2", "5", "3"], ["3", "2", "1", "2"], ["1", "3", "3", "4"], ["3", "2", "7", "4"], 
	["3", "2", "2", "4"], ["3", "2", "3", "6"], ["3", "2", "3", "6"], ["3", "4", "4", "5"], ["3", "4", "3", "2"], 
	["3", "2", "5", "3"], ["3", "4", "3", "4"], ["3", "4", "3", "8"], ["3", "4", "5", "8"], ["8", "4", "3", "4"], 
	["8", "4", "3", "8"], ["1", "1", "3", "8"], ["3", "4", "8", "4"], ["4", "1", "3", "4"], ["3", "4", "1", "9"], 
	["2", "5", "3", "4"], ["2", "5", "3", "4"], ["4", "7", "3", "6"], ["3", "6", "7", "4"], ["3", "4", "8", "2"], 
	["3", "4", "5", "3"], ["1", "8", "5", "3"], ["3", "4", "2", "2"], ["7", "4", "5", "3"], ["5", "3", "4", "4"], 
	["3", "5", "8", "4"], ["3", "5", "3", "3"], ["3", "5", "4", "1"], ["3", "2", "3", "8"], ["1", "3", "8", "8"], 
	["1", "3", "4", "8"], ["1", "3", "2", "2"], ["3", "1", "3", "2"], ["3", "1", "1", "2"], ["4", "1", "2", "4"], 
	["3", "8", "5", "2"], ["1", "3", "5", "8"], ["1", "3", "1", "2"], ["1", "3", "5", "3"], ["1", "3", "7", "4"], 
	["7", "4", "7", "4"], ["3", "3", "7", "4"], ["3", "1", "2", "1"], ["1", "1", "3", "4"], ["1", "3", "4", "4"], 
	["1", "1", "3", "4"], ["5", "1", "3", "4"], ["3", "1", "3", "4"], ["7", "2", "1", "8"], ["2", "3", "4", "3"], 
	["1", "3", "8", "4"], ["5", "1", "1", "3"], ["5", "1", "3", "4"], ["1", "8", "2", "8"], ["1", "5", "1", "8"], 
	["5", "2", "1", "8"], ["3", "2", "5", "2"], ["8", "8", "4", "5"], ["1", "2", "2", "1"], ["1", "1", "3", "2"], 
	["5", "1", "9", "2"], ["4", "b", "4", "4"], ["4", "4", "2", "6"], ["1", "b", "3", "4"], ["4", "5", "1", "3"], 
	["3", "1", "1", "2"], ["1", "2", "1", "8"], ["1", "2", "7", "4"], ["4", "1", "3", "4"], ["4", "4", "1", "2"], 
	["3", "3", "1", "2"], ["4", "1", "5", "3"], ["1", "1", "3", "8"], ["2", "5", "1", "1"], ["2", "5", "1", "1"], 
	["3", "5", "1", "1"], ["1", "2", "3", "4"], ["3", "7", "3", "4"], ["2", "1", "2", "1"], ["1", "3", "7", "4"], 
	["3", "6", "7", "4"], ["8", "5", "3", "1"], ["8", "5", "2", "1"], ["1", "8", "3", "8"], ["3", "1", "1", "8"], 
	["3", "8", "1", "b"], ["3", "1", "1", "5"], ["2", "7", "3", "4"], ["4", "3", "3", "4"], ["3", "3", "2", "4"], 
	["3", "4", "3", "4"], ["3", "4", "3", "4"], ["8", "2", "1", "3"], ["3", "2", "1", "5"], ["1", "8", "2", "3"], 
	["3", "1", "1", "2"], ["1", "3", "4", "4"], ["1", "1", "2", "1"], ["1", "8", "6", "4"], ["1", "2", "2", "6"], 
	["2", "5", "3", "8"], ["4", "6", "1", "2"], ["4", "6", "1", "2"], ["4", "6", "2", "4"], ["4", "6", "3", "4"], 
	["4", "6", "3", "6"], ["2", "5", "3", "4"], ["1", "8", "1", "2"], ["1", "2", "c", "2"], ["7", "4", "c", "2"], 
	["3", "1", "8", "4"], ["4", "2", "5", "1"], ["c", "2", "3", "4"], ["1", "1", "5", "2"], ["3", "6", "3", "4"]];


const total_char = 140;
const stroke_num = 4;
const max_round_num = 6;
const result_icon = ["⬜", "🟩", "🟨"];

let now_num = 0;
let round = 0;
let answer_hidden = true;

let answers = new Array(stroke_num);
let question = new Array(stroke_num);
let question_char = "";
let all_result = [];

let is_end = false;

function choose(ID) {
	if (now_num < stroke_num && !is_end) {
		answers[now_num] = ID;
		now_num += 1;
		let spot_id = "line" + (round + 1) + "spot" + now_num;
		document.getElementById(spot_id).innerHTML = strokes[parseInt(ID, 16) - 1];
	}
}

function del() {
	if (now_num > 0 && !is_end) {
		let spot_id = "line" + (round + 1) + "spot" + now_num;
		document.getElementById(spot_id).innerHTML = "";
		now_num -= 1;
		document.getElementById("ans" + (round + 1)).innerHTML = "";	
	}
}

function submit() {
	if (now_num === stroke_num) {
		if(check_char_legal()){
			if(stroke_num == show()){
				success();
			}else if(round == max_round_num){
				fail();
			}
		}
		else{
			document.getElementById("ans" + (round + 1)).innerHTML = "查无此字";
		}
	}
}

function check_char_legal(){
	let content = "";
	let is_legal = false;

	for(let i = 0; i < total_char; i++){
		for(let j = 0; j < stroke_num; j++){
			if(answers[j] != orders[i][j]){
				break;
			}
			else if(j == stroke_num-1){
				content += characters[i];
				content += " ";
				is_legal = true;
			}
		}
	}
	document.getElementById("ans" + (round + 1)).innerHTML = content;
	return is_legal;
}

function show(){
	round++;
	let match_result = match();
	let temp = 0;
	for(let i = 0; i < stroke_num; i++){
		if(match_result[i] == 0){
			document.getElementById("line"+round+"spot"+(i+1)).style.background = 'lightgray';
		}
		else if(match_result[i] == 1){
			document.getElementById("line"+round+"spot"+(i+1)).style.background = 'lightgreen';
			temp++;
		}
		else if(match_result[i] == 2){
			document.getElementById("line"+round+"spot"+(i+1)).style.background = 'lightyellow';
		}
		all_result.push(match_result[i]);
	}
	now_num = 0;
	return temp;
}

function match(){
	let match_result = [0,0,0,0];
	let temp_array = [0,0,0,0];
	for(let i = 0; i < stroke_num; i++){
		if(answers[i] == question[i]){
			match_result[i] = 1;
		}
		else{
			temp_array[i] = question[i];
		}
	}
	for(let i = 0; i < stroke_num; i++){
		if(match_result[i] != 1){
			for(let j = 0; j < stroke_num; j++){
				if(answers[i] == temp_array[j]){
					match_result[i] = 2;
					temp_array[j] = 0;
					break;
				}
			}
		}
	}
	return match_result;
}

function success(){
	let content = `恭喜成功！\n————————————————\n正确答案：「${question_char}」\n`;
	let temp = 0;
	for(let i = 0; i < round; i++){
		for(let j = 0; j < stroke_num; j++){
			content += result_icon[all_result[temp]];
			temp++;
		}
		content += "\n";	
	}
	round = 0;
	is_end = true;
	alert(content);
}

function fail(){
	let content = `抱歉你并未完成\n————————————————\n正确答案：「${question_char}」\n`;
	let temp = 0;
	for(let i = 0; i < round; i++){
		for(let j = 0; j < stroke_num; j++){
			content += result_icon[all_result[temp]];
			temp++;
		}
		content += "\n";	
	}
	round = 0;
	is_end = true;
	alert(content);
}

function refresh(){
	let temp = Math.floor((Math.random() * total_char));

	for(let i=0; i<stroke_num; i++){
		question[i] = orders[temp][i];
	}
	question_char = characters[temp];

	round = 0;
	now_num = 0;
	is_end = false;
	all_result = [];
	document.getElementById("head").innerHTML = "STROKLE<span style=\"font-size:3rem\">4</span>";
	document.getElementById("check_answer").innerHTML = "查看答案";
	clear();
}

function show_answer() {
	let content = "";
	let button_content;
	if (!answer_hidden) {
		content = "STROKLE<span style=\"font-size:3rem\">4</span>";
		button_content = "查看答案";
	}
	if (answer_hidden) {
		content = question_char;
		button_content = "隐藏答案";
	}
	document.getElementById("head").innerHTML = content;
	document.getElementById("check_answer").innerHTML = button_content;
	answer_hidden = !answer_hidden;
}

function clear() {
	for(let i=0; i<max_round_num; i++){
		for(let j=0; j<stroke_num; j++){
			document.getElementById("line"+(i+1)+"spot"+(j+1)).innerHTML = "";
			document.getElementById("line"+(i+1)+"spot"+(j+1)).style.background = "white";
		}
		document.getElementById("ans" + (i+1)).innerHTML = "";
	}
}

function clear_line() {
	if(!is_end){
		for(let i=0; i<stroke_num; i++){
			document.getElementById("line"+(round+1)+"spot"+(i+1)).innerHTML = "";
		}
		document.getElementById("ans" + (round + 1)).innerHTML = "";
		now_num = 0;
	}
}

function first_start (){
	refresh();
}
