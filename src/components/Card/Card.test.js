import { render, screen } from "@testing-library/react";
import Card from "./index";
import userEvent from "@testing-library/user-event";

const item = {
  id: "123",
  name: "Vanilla",
  imagePath: "/images/vanilla.png",
};

//Prop olarak veri alan bir bileseni test ediyorsak aldigi proplarin benzerini gondermemiz gerekiyor.
test("Miktar, baslik ve fotograf gelen propa gore ekrana basilir", () => {
  render(<Card item={item} amount={3} />);

  //miktar spanini cagir
  const amount = screen.getByTestId("amount");

  //miktar spani 3 mu kontrol et
  expect(amount.textContent).toBe("3");

  //vanilla yazisi ekrana geldi mi kontrol et
  //getBy elementi bulmazsa hata firlatir
  //Sadece element ekranda mi kontrolu yapmak istiyorsak onu "getBy" ile cagirmamiz yeterli. Eleman ekradaysa geyBy onu alir, problem olmaz degilse hata firlatir testi bitirir.
  //Yani elementi getBy ile cagirmamiz bir nevi ekranda mi kontrolu yapmis olmamiz anlamina gelir =, expect'e gerek kalmaz.
  screen.getByText("Vanilla");

  //resmi al
  const image = screen.getByAltText("cesit-resim");

  //src degeri gonderilen propa gore mi kontrol et
  expect(image).toHaveAttribute("src", "/images/vanilla.png");
});

test("Butonlara tiklaninca fonksiyonlar dogru parametrelerle cagrilir", async () => {
  const user = userEvent.setup();
  //prop olarak scoops bileseninde gonderilen orjinal fonksiyonlari gonderemeyecegimizden fonksiyonlar dogru sekilde dogru zamanda dogru parametreler ile calisiyor mu ? kontrolunu yapabilmek icin asil fonksiyonlarin yerine test fonksiyonlari gonderecegiz.
  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();
  render(
    <Card
      amount={0}
      item={item}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );
  //butonlari al
  const addBtn = screen.getByRole("button", { name: /ekle/i });
  const clearBtn = screen.getByRole("button", { name: /sifirla/i });

  //ekle butonuna tikla
  await user.click(addBtn);
  //addtobasket fonksiyonu dogru parametreleri alarak calisti mi?
  expect(addMockFn).toHaveBeenCalledWith(item);

  //sifirla butonuna tikla
  await user.click(clearBtn);

  //clearFromBasket fonksiyonu dogru parametreleri alarak calisti mi?
  expect(clearMockFn).toHaveBeenCalledWith(item.id);
});
