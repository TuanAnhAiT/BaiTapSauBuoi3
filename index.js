// bai 1
function jsStyle(){
    let text = document.getElementById('text');
    text.style.color = "red";
    text.style.fontSize = "24px";
}
//bai2
function getAttributes(){
    let a = document.getElementById('3wr');
    let attributesName = a.getAttributeNames();
    let text = "";
    attributesName.forEach(name => {
        text += name + ": " + a.getAttribute(name) + "\n";
    });
    alert(text);
}
//bai 3
function insertRow(){
    let table = document.getElementById('sampleTable');
    let row = table.insertRow(table.ariaRowCount - 1);
    row.insertCell(0).innerHTML = "new";
    row.insertCell(1).innerHTML = "new";
}
//bai 4: Viết hàm sắp xếp 1 chuỗi theo bảng chữ cái:
function arrange(str){
    console.log(str.split('').sort().join(''));
}
arrange("rikkeisoft");
//bai 5: Viết hàm để in hoa chữ cái đầu tiên của chuỗi
function upperCase(str){
    str = str[0].toUpperCase() + str.slice(1);
    console.log(str);
}
upperCase("công ty cổ phần rikkeisoft");
//bai 6: Viết hàm để lấy ra từ dài nhất trong 1 chuỗi
function maxLengthStr(str){
    let max = 0;
    let maxStr = "";
    str.split(" ").forEach(s => {
        if(s.length > max){
            max = s.length;
            maxStr = s;
        }
    })
    console.log(maxStr);
}
maxLengthStr("Công Ty Cổ Phần Rikkeisoft");
