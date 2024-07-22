import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/* 
!Seciciler > 3 ana parcadan olusur
? 1. Method Tipi 2. All Ifadesi 3. Secici Methodu

* Method Tipi > get | find | query
* get > baslangicta dom'da olan elementleri almak icin kullanilir. Elementi bulamazsa test basarisiz olur

* query > get ile benzer calisir. Elementi bulamazsa 'null' dondurur ve test devam eder.

* find > elementin ne zaman ekrana basilacagi belli degilse kullanilir.(api isteklerinde) 
!find methody promise dondurur bu yuzden async await ile kullanilir.

Eger methoda all eklersek secici kosula uyan butun elementleri getirir.
!not: all kullanirsak gelen cevap her zaman bir dizi olur
*/

test("API'dan alinan veriler icin ekrana kartlar basilir", async () => {
  render(<Scoops />);

  //ekrana basilan resimleri al
  const images = await screen.findAllByAltText("cesit-resim");

  //gelen resimlerin (kartlarin) sayisi 1'den buyuk mu veya esit mi
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Cesitlerin ekleme ve sifirlama ozellikleri toplam fiyati etkiler", async () => {
  //userevent'in kurulumunu yap
  const user = userEvent.setup();

  //bileseni ekrana bas
  render(<Scoops />);
  //butun ekleme ve sifirlama butonlarini cagir
  const addButtons = await screen.findAllByRole("button", { name: "Ekle" });

  const delButtons = await screen.findAllByRole("button", { name: "Sifirla" });

  //toplam fiyat elementini cagir
  const total = screen.getByTestId("total");

  //toplam fiyat 0 mi kontrol et
  expect(total.textContent).toBe("0");

  //ekle butonlarindan birine tikla
  await user.click(addButtons[0]);

  //toplam fiyat 20 mi kontrol et
  expect(total.textContent).toBe("20");

  //ekle butonlarindan birine daha cift tikla
  await user.dblClick(addButtons[2]);

  //toplam fiyat 60 mi kontrol et
  expect(total.textContent).toBe("60");

  //ilk ekleneni kaldir
  await user.click(delButtons[0]);

  //toplam fiyati 40 mi kontrol et
  expect(total.textContent).toBe("40");

  //ikinci ekleneni kaldie
  await user.click(delButtons[2]);

  // toplam fiyat 0'mi kontrol et
  expect(total.textContent).toBe("0");
});
