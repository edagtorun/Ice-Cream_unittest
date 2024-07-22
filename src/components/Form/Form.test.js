import Form from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("Kosullarin onaylanmasina gore buton aktifligi", () => {
  //1- test edilecek olan bilesen render edilir
  render(<Form />);

  //2- gerekli elemanlari cagir
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //3- Buton inaktiftir.
  expect(button).toBeDisabled();

  //4- Checkboc tiklenmemistir.
  expect(checkbox).not.toBeChecked();

  //5- checkbox tikle
  fireEvent.click(checkbox);

  //6- botunun aktif oldugunu kontrol et
  expect(button).toBeEnabled();

  //7- checkbox tikini kaldir
  fireEvent.click(checkbox);
  //8- botun inaktifitir
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna gore bildirim gozukur", () => {
  // 1. Fromu renderla
  render(<Form />);
  //2. Gerekli elemanlari al
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  const alert = screen.getByText(/size gercekten/i);
  //3. Checkbox'i tikle
  fireEvent.click(checkbox);

  //4. Bildirimin ekranda olmadigini kontrol et
  expect(alert).not.toBeVisible();

  //5 Mouse'u butona getir
  fireEvent.mouseEnter(button);

  //6. Bildirim ekrana geldi mi kontrol et
  expect(alert).toBeVisible();

  //7. Mouse'u butonun uzerinden cek
  fireEvent.mouseLeave(button);

  //8. Bildirimin ekranda olmadigini kontrol et
  expect(alert).not.toBeVisible();
});
