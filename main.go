package main

import "fmt"

var NamaVoucher string
var TotalBelanja int
var Discount int
var Potongan int
var TotalBayar int

// var AfterDiscount int

func hitungVoucher(totalBelanja int, NamaVoucher string) {
	if NamaVoucher == "DumbWMerchBerkah" && totalBelanja >= 50000 {
		Discount = 25
		Potongan = (Discount / 100) * totalBelanja

		if Potongan > 20000 {
			TotalBayar = TotalBelanja - 20000
			fmt.Println("Total Belanja:", totalBelanja)
			fmt.Println("Discount: 25%")
			fmt.Println("Potongan:", Potongan)
			fmt.Println("Total Bayar:", TotalBayar)
		} else {
			fmt.Println("Total Belanja:", totalBelanja)
			fmt.Println("Discount: 25%")
			fmt.Println("Potongan:", Potongan)
			fmt.Println("Total Bayar:", TotalBayar)

		}
	}
}

func main() {

	hitungVoucher(55000, "DumbWMerchBerkah")

	// if Total >= 50000 {
	// 	Discount = 25
	// 	Potongan = (Discount /100) * Total
	// } else if Total >= 70000 {
	// 	Discount = 50
	// 	Potongan = (Discount /100) * Total
	// } else if Total < 50000 {
	// 	Discount = 0
	// }

	// // Potongan = (Discount / 100) * Total
	// fmt.Println("Diskon", Discount,"%")

	// Price = (Total - Potongan)
	// if Potongan >= 20000 {
	// 	Price = Total - 20000
	// } else if Potongan >= 450000 {
	// 	Price = 450000
	// } else {
	// 	Price = (Total * Discount / 100)
	// }

	// Price = Total - Price
	// // fmt.Println(Price)
	// fmt.Println("Harga Menjadi", Price)

}
