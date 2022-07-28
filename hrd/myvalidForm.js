//현재 날짜 new Date()
const today = new Date()
console.log(today)  //Thu Jul 28 2022 14:39:24 GMT+0900 (대한민국 표준시)
                    //20220728
console.log("년도 : " + today.getFullYear())                    
console.log("월 : " + (today.getMonth()+1))    //월 0~11                
console.log("일 : " + today.getDate())                    
let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')      
             //배열요소를 특정기호로 연결하기
console.log(result)
const month = (today.getMonth()+1).toString().padStart(2,0)
result = [today.getFullYear(),month,today.getDate()].join('')
console.log(result)

//오늘날짜로 초기화
document.forms[0].regdate.value = result

function valid_check() {
    const frm = document.forms[0];
    const name = frm.name;
    const tel = frm.tel;
    const address = frm.address;
    const regdate = frm.regdate;
    const grade = frm.grade;
    const city = frm.city;
    let isValid = true;
  
    if (name.value == "") {
      alert("이름은 필수 입력입니다.");
      name.focus();
      isValid = false;
    }
    
    let phonnumb = /^010-?([0-9]{4})-?([0-9]{4})$/;
    if(phonnumb.test(tel.value) === false){
        alert('전화에 입력된 값은 번호 형식이 아닙니다.');
    }
    
    if (address.value == "") {
      alert("주소는 필수 입력입니다.");
      address.focus();
      isValid = false;
    } 

    if (regdate.value == "") {
        alert("가입일자는 필수 입력입니다.");
        regdate.focus();
        isValid = false;
      } 
    if(regdate.value != result){
        alert("가입일자가 맞지않습니다.");
        regdate.focus();
        isValid = false;    
    }
    if(grade.value!=="A" && grade.value!=="B" && grade.value!=="C"){
        alert("고객등급을 잘못 입력하셨습니다.고객등급 [A,B,C] 중 선택해주세요.");
        grade.focus();
        isValid = false;
    }
    
    if(city.value < 10 || city.value> 99){
        alert("도시코드는 2자리만 허용합니다.")
        city.focus();
        isValid = false;   
    }
   
    if (isValid) {
      frm.action = "13result.html";
    //frm.submit();
    } else {
      alert("등록 실패");
    }
  }
