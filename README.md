# Selectors

- https://testing-library.com/docs/ecosystem-testing-library-selector/

# Matchers

- Expect ile kullanilir ve element uzerindeki beklentimizi ifade eden methodlardir.
- ELEMENTLER ICIN: https://github.com/testing-library/jest-dom
- DIGERLERI : https://jestjs.io/docs/using-matchers

# HTML Element Rolleri

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kutuphaneler

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

# Test Gelistirme Sureci

# -- TDD(TEST Driven Development)

- red to green test
- Once bilesenin testleri yazilir daha sonra bilesen kodlari yazilir.
- Testleri yazma yukunu ortadan kaldirir. Gelistirme surecinin bir parcasi oluyo. Testleri yazarken dinamik yapinin algoritmasini olustudugumuz icin islevi daha hizli kodlayabiliriz.

# -- BDD (Behaviour Driven Development)

- Once bilesen gelistirilir daha sonra testleri yazilir.

# FireEvent

- React testing library icerisnden gelen olay tetiklme methodu
- Gercek kullanicidan uzak tepkiler verdigi icin yerini userEvent'e birakti
- Tetiklenen olay gercek bir insanun tepkisinden daha hizli bir sekilde aniden tetiklendigi icin testlerde tutarsizliklara sebep olabiliyor.

# UserEvent

- Bu yolu kullanmak icin UserEvent paketi indirilmeli
- Fireevent'in modern daha gelismis versiyonu
- Tetikledimiz olaylar gercek kullanicinin yapacagi gibi bir gecikmenin ardindan gerceklesir
- Gecikme oldugunda async await kullaniriz.
# Ice-Cream_unittest
