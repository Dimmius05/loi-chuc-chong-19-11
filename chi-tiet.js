// CHI TIET: lay phim theo id va hien thong tin.

var phim = layPhimTheoId();
var noiDung = document.getElementById("noiDungChiTiet");

if (!phim) {
    noiDung.innerHTML =
        '<p class="thong-bao">Không tìm thấy phim hoặc phim không phù hợp với tài khoản.</p>' +
        '<a href="../kho-phim/kho-phim.html">Về kho phim</a>';
} else { 
    // Tao poster, thong tin va nut xem phim.
    noiDung.innerHTML =
        '<div class="chi-tiet-layout">' +
        '<img class="poster-chi-tiet" src="' +
        (phim.poster) + '" alt="Poster ' + (phim.ten) + '">' +
        '<div class="noi-dung-chi-tiet">' +
        '<span class="nhan-muc">' + (phim.dinhDang || "PHIM") + '</span>' +
        '<h1>' + (phim.ten) + '</h1>' +
        '<h3>' + (phim.tenGoc || "") + '</h3>' +
        '<div class="dong-thong-tin">' +
        '<span>Năm: ' + (phim.nam) + '</span>' +
        '<span>★ ' + (phim.diem || "-") + '</span>' +
        '<span>' + (phim.chatLuong || "HD") + '</span>' +
        '<span>' + (phim.ngonNgu || "") + '</span>' +
        '</div>' +
        '<p>' + (phim.moTa || "Chưa có mô tả.") + '</p>' +
        '<p><b>Thể loại:</b> ' + (phim.theLoai.join(", ")) + '</p>' +
        '<p><b>Quốc gia:</b> ' + (phim.quocGia || "Chưa cập nhật") + '</p>' +
        '<p><b>Đạo diễn:</b> ' + (phim.daoDien || "Chưa cập nhật") + '</p>' +
        '<a class="nut-xem-chi-tiet" href="../xem-phim/xem-phim.html?id=' +
        encodeURIComponent(phim.id) + '">▶ Xem phim</a>' +
        '<button class="nut-thich-chi-tiet" data-favorite="' +
        (phim.id) + '">♡ Yêu thích</button>' +
        '</div>' +
        '</div>';
}
