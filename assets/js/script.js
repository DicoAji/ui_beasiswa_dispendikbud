/*********  Navbar  **********/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};
// active
$(document).ready(function () {
  if (document.title == "Beasiswa Batang | Beranda") {
    $("#nav__beranda").addClass("active");
  } else if (document.title == "Beasiswa Batang | Informasi") {
    $("#nav__informasi").addClass("active");
  } else if (document.title == "Beasiswa Batang | Daftar Beasiswa") {
    $("#nav__beasiswa").addClass("active");
  } else if (document.title == "Beasiswa Batang | Sekolah") {
    $("#nav__sekolah").addClass("active");
  } else if (document.title == "Beasiswa Batang | Soal") {
    $("#nav__soal").addClass("active");
  } else if (document.title == "Beasiswa Batang | Guru") {
    $("#nav__guru").addClass("active");
  }
});

/*** ADMIN ***/

//Datatables
$(document).ready(function () {
  // Add Row
  $("#table_data_pendaftaran").DataTable({
    pageLength: 5,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
  $("#tabel__guru").DataTable({
    pageLength: 5,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
  $("#tabel__sekolah").DataTable({
    pageLength: 5,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
  $("#tabel__soal").DataTable({
    pageLength: 20,
    autoWidth: false,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
  $("#tabel__akun").DataTable({
    pageLength: 10,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
});
