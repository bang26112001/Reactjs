// Hàm, Input nhận vào n phần tử (1 : 1,2 : 1,2,3,4,5,6,7)
//OUTPUT tổng các phần tử
let a = [1,2,3];

function TinhTong(...args) {
    var Tong = 0;
    for (var i = 0; i < args.length; i++) {
         Tong = Tong + args[i];
    }
    return Tong;
}

