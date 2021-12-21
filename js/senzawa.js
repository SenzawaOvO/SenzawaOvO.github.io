getDateAndTime();
window.setInterval(getDateAndTime,1000);
function getDateAndTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var week = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    switch(week){
        case 0:
            week = '星期日';
            break;
        case 1:
            week = '星期一';
            break; 
        case 2:
            week = '星期二';
            break;
        case 3:
            week = '星期三';
            break;
        case 4:
            week = '星期四';
            break;
        case 5:
            week = '星期五';
            break;
        case 6:
            week = '星期六';
            break;    
    }
    function formatHMS(time){
        if(time < 10){
            return '0' + time;
        }else{
            return time;
        }
    } 
    var ym = document.getElementById('ym');
    var d = document.getElementById('d');
    var w = document.getElementById('w');
    var hms = document.getElementById('hms');
    ym.innerHTML = year + '年' + month + '月';
    d.innerHTML = day;
    w.innerHTML = week;
    hms.innerHTML = hour + '时' + minute + '分' + second + '秒';

}