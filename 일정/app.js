box=document.getElementById('pop_info');
btn_close=document.getElementsByClassName('btn_close')[0];
btn_close.addEventListener('click',function(){
	box.style.display='none';
})
comp=document.getElementsByClassName('comp')[0].children;
act=document.getElementsByClassName('act')[0].children;

table=document.getElementById('calendar');
table.addEventListener('click',function(event){
	if(event.target.nodeName=='TD'&& event.target.innerText>0 &&event.target.innerText<32){
		box.style.display='block';
		tmp=10000*(year-2000)+100*(month+1)+Number(event.target.innerText);
		box.children[0].children[0].innerHTML=year+'년 '+(month+1)+'월 '+event.target.innerText+'일';
		for(let i=0;i<comp_arr.length;i++){
			if(comp_arr[i][0]<=tmp && tmp<=comp_arr[i][1]){
				comp[i].style.display='block'
			}
			else{
				comp[i].style.display='none'
			}
		}
		for(let i=0;i<act_arr.length;i++){
			if(act_arr[i][0]<=tmp && tmp<=act_arr[i][1]){
				act[i].style.display='block'
			}
			else{
				act[i].style.display='none'
			}
		}
	}
})


comp_arr=[[230809,230922],[230809,230919],[231003,231015],[230808,230901],[230626,230903],[230320,230825],[230810,230824],[230807,231009],[230801,230827],[230726,230823],[230801,231031],[230719,230930]];
act_arr=[[230811,230823],[230811,230827],[230801,230831],[230703,999999],[230810,230901],[230721,999999],[230801,230825],[230801,230824],[230801,230827],[230518,999999],[230801,230910],[230811,230827]];

// calendar 함수
function calendar(new_year, new_month){
	// 특정 年月을 시작일부터 조회(year, month, date)
	d = new Date(new_year, new_month-1, 1),
			// 월별 일수 구하기
	d_length = 32 - new Date(new_year, new_month-1, 32).getDate(),
	year = d.getFullYear(),
	month = d.getMonth(),
	date = d.getDate(),
	day = d.getDay();

	// caption 영역 날짜 표시 객체
	var caption_year = document.querySelector('.year'),
			caption_month = document.querySelector('.month');

	start_day = document.querySelectorAll('tr td');

	// 테이블 초기화
	for(var i = 0; i < start_day.length; i++){
		start_day[i].innerHTML = '&nbsp;';
	}
	

	for(var i = day; i < day + d_length; i++){
		start_day[i].innerHTML = date;
		date++;
	}

	// caption 날짜 표시
	caption_year.innerHTML = year;
	caption_month.innerHTML = month + 1;		
}

(function(){
	var prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		year = new Date().getFullYear(),
		month = new Date().getMonth() + 1;
		
	calendar(year, month);
	prev.onclick = function(){
		calendar(year, --month);
	};
	next.onclick = function(){
		calendar(year, ++month);
	};		
})();