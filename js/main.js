// Vòng lặp While
// Khai báo hàm
function submit(){
    var num = parseInt(document.getElementById("inputNumber").value);
    console.log(num);
    //  count là biến bước nhảy
    var count = 0;
    var content = "";
    // num>1, nếu thỏa đk thì thực hiện hành động bên trong while 
    while(num>1){
        // code xử lý
        // count = count + 1;
        // count +=1;
        count++;
        num = Math.floor(num/2);
        console.log("number: "+num+ "-" + "Count: "+ count); 
        // content (nội dung mới) = content(nội dung cũ) + "Count: "+count+ "-" + "Number: "+num;
        content +="Count: "+count+ "-" + "Number: "+num + "<br>";
    }
    document.getElementById("txtNumber").innerHTML=content;
}

// Gọi hàm để sử dụng
document.getElementById("btnNumber").onclick=submit;


// Cách dùng e preventDefault
// function submit(e{
//     e.preventDefault();
//     var num = parseInt(document.getElementById("txtNumber").value);
//     console.log(num);
//     var count = 0;
// }

// // Gọi hàm để sử dụng
// document.getElementById("btnNumber").onclick=function(e){
    // e(event,evt)=> sự kiện mặc định của thẻ html
    // closure function
//     submit(e);
// }

// biến cục bộ nằm trong hàm có thể đặt trùng tên
// biến toàn cục k dc đặt trùng tên(biến k nằm trong hàm)

// Vòng lặp Do While
function submit2(){
    var num = parseInt(document.getElementById("inputNumber2").value);
    console.log(num);
    var count = 0;
    var content = "";
    do{
        count++;
        num = Math.floor(num/2);
        content += "Count: "+ count + "-" + "Number: "+ num + "<br>";
    }while(num>100);
    document.getElementById("txtNumber2").innerHTML=content;
} 

// Gọi hàm sử dụng
document.getElementById("btnNumbe2r").onclick=submit2;


// Vòng lặp for (phổ biến nhất)

// Tạo chương trình in 5* trong tab console

var inStar = function(){
    for(var i = 0; i<5; i++){
        // code xử lý / Hành động
        console.log("*",i);
    }
}

// gọi hàm
// web sẽ chạy code khi refesh
inStar();

/**
 * Bài tập While, for
 */

 var inSonguyenDuong = function(){
    var num = 100;
    var count = 0;
    // While
    // if(count>=0){
    //     while(count<num){
    //         // Hành động
    //         console.log(count);
    //         count++;
    //     }
    // }
    var soChan = "";
        var soLe = "";
    while(count>=0 && count<num){
        // Hành động
        console.log(count);
        
        if((count%2)==0){
            //  Nếu count chia hết cho 2 => count là số chẵn
            soChan+=count +",";
        }else{
            soLe += count + ",";
        }
        count++;
    }
    document.getElementById("txtChanLe").innerHTML="Danh sách số chẵn: "+ soChan + "<br>"+ "Danh sách số lẻ: "+ soLe;
    
    var soChanfor = "";
    var soLefor = "";
    for(var i=0; i<100; i++){
        // Hành động
        if((i%2)==0){
            //  Nếu count chia hết cho 2 => count là số chẵn
            soChanfor+=i +",";
        }else{
            soLefor += i + ",";
        }
    }
    document.getElementById("txtChanLefor").innerHTML="Danh sách số chẵn của for: "+ soChanfor + "<br>"+ "Danh sách số lẻ của for: "+ soLefor;
}
 inSonguyenDuong();

//  2 vòng lặp(ứng dụng: sắp xếp giá tiền từ thấp đến cao...)
var inHinhVuong = function(){
    var content = "";
    for(var i =0; i<5; i++){
        // vòng lặp lớn, bao ngoài tạo nhìu dòng dấu *
        for(var j=0; j<5; j++){
            // vòng lặp nhỏ tạo 1 dòng 5 dấu *
            content+="*";
        }

        content += "\n";
    }
    console.log(content);
}

// Gọi hàm
inHinhVuong();