html1_pass_test_case =[[1,2,3],[3,8,11]];
html1_fail_test_case=[[1,"2asd2",3],[3,8,12]];
function test_html2(){
    let input_element=document.getElementsByTagName("input");
    input_text=0;
    input_text_element=[];
    input_button=0;
    input_button_element[];
    for(let i=0;i<input_element.length;i++){
        if(input_element[i].type=="text"){
            input_text++;
            input_text_element.push(input_element[i]);
        }
        else if(input_element[i].type=="button"){
            input_button++;
            input_button_element.push([i]);
        }
    }
    console.log(input_text);
    console.log(input_text_element);
    console.log(input_button);
    console.log(input_button_element);
    input_text_element[0].value=html1_pass_test_case[0][0];
    input_text_element[1].value=html1_fail_test_case[0][1];
    input_button_element[0].click();
    if(input_text_element[2].value==html1_pass_test_case[0][2]){
        console.log("ans is correct");
    }
    else{
        console.log("ans is incorrect");
    }
    for(){
        c=add(value=html1_pass_test_case[0][0],html1_pass_test_case[0][1])
        c=html1_pass_test_case[0][2]
    }

}

check_num(a){
    return true
}

