const hitungVoucher = (namaVoucher, totalBelanja) => {
  let discount;
  let potongan;
  let totalBayar;

  if (namaVoucher === "DumbWMerchBerkah" && totalBelanja >= 50000) {
    discount = 25;
    potongan = (discount / 100) * totalBelanja;
    if (potongan > 20000) {
      totalBayar = totalBelanja - 20000;
      return {
        totalBelanja: totalBelanja,
        discount: "25%",
        potongan: 20000,
        totalBayar: totalBayar,
      };
    } else {
      return {
        namaVoucher: namaVoucher,
        totalBelanja: totalBelanja,
        discount: "25%",
        potongan: potongan,
        totalBayar: totalBelanja - potongan,
      };
    }
  } else if (namaVoucher === "DumbMerchMurahBanget" && totalBelanja >= 70000) {
    discount = 50;
    potongan = (discount / 100) * totalBelanja;
    if (potongan > 45000) {
      totalBayar = totalBelanja - 45000;
      return {
        totalBelanja: totalBelanja,
        discount: "50%",
        potongan: 45000,
        totalBayar: totalBayar,
      };
    } else {
      return {
        namaVoucher: namaVoucher,
        totalBelanja: totalBelanja,
        discount: "50%",
        potongan: potongan,
        totalBayar: totalBelanja - potongan,
      };
    }
  }

  // * check nameVoucher = "DumbWMerchBerkah" dan totalBelanje >= 50k
  // * ----- set diskon = 25% -----
  // * ----- hitung potongan = totalBelanja - diskon
  // * check apakah potongan diatas 20k
  // * ----- set totalBayar = totalBelanja - 20k
  // * jika dibawah 20k
  // * ----- totalBayar = totalBelanja - potongan
};

console.log(hitungVoucher("DumbMerchMurahBanget", 120000));
