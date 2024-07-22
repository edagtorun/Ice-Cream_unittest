import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from "../Toppings";

test("Soslari ekleme ve cikarma islemlerinin toplam fiyata olan etkisi", async () => {
  const user = userEvent.setup();

  //1.bileseni renderla
  render(<Toppings />);

  //2. toplam spani al
  const total = screen.getByTestId("total");

  //3. butun sos checkboxlarini al
  const toppings = await screen.findAllByRole("checkbox");

  //4. toplam alani 0 mi kontrol et
  expect(total.textContent).toBe("0");

  //5.butun checkboxlarin tiklanmadigini kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  //6. Checkboxlardan birini tikle
  expect(total.textContent).toBe("3");

  //7. Toplam alani 3 mu kontrol et
  expect(total.textContent).toBe("3");

  //8.checkboclardan birine tikle
  await user.click(toppings[4]);

  //9. Toplam alani 6 mi kontrol et
  expect(total.textContent).toBe("6");

  //10. tiklenenlerden birini kaldir
  await user.click(toppings[4]);

  //11. Toplam alani 3 mi kontrol et
  expect(total.textContent).toBe("3");

  //12.Tiklenenlerden digerini kaldir
  await user.click(toppings[0]);

  //13.  Toplam alani 0 mi kontrol et
  expect(total.textContent).toBe("0");
});
