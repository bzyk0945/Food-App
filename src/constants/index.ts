import quickDelivery from "../assets/quick-delivery.png";
import superDine from "../assets/super-dine.png";
import easyPickUp from "../assets/easy-pick.png";

export const navLists = {
  pl: [
    { name: "Strona główna", path: "/" },
    { name: "Jedzenie", path: "/foods" },
    { name: "Kontakt", path: "/contact" },
  ],
  en: [
    { name: "Home", path: "/" },
    { name: "Foods", path: "/foods" },
    { name: "Contact", path: "/contact" },
  ],
};

export const services = {
  pl: [
    {
      name: "Szybka Dostawa",
      icon: quickDelivery,
      description:
        "Dzięki usłudze Szybka Dostawa możesz cieszyć się ulubionymi posiłkami dostarczonymi prosto pod drzwi w krótkim czasie. Niezależnie od tego, czy jesteś w domu, czy w biurze, zapewniamy szybką i niezawodną dostawę z naciskiem na świeżość i jakość.",
    },
    {
      name: "Szybki Posiłek",
      icon: superDine,
      description:
        "Ciesz się eleganckim posiłkiem dzięki usłudze Szybki Posiłek. Oferujemy premium doświadczenie kulinarne, niezależnie od tego, czy jesteś w restauracji, czy w domu. Przenosimy restauracyjne doznania prosto do Ciebie z wyjątkowo przygotowanymi potrawami.",
    },
    {
      name: "Łatwy Odbiór",
      icon: easyPickUp,
      description:
        "Usługa Łatwy Odbiór pozwala szybko odebrać zamówienie w biegu. Złóż zamówienie, zatrzymaj się i odbierz bez czekania. Idealne rozwiązanie dla osób z napiętym harmonogramem, szukających szybkiej i wygodnej opcji.",
    },
  ],
  en: [
    {
      name: "Quick Delivery",
      icon: quickDelivery,
      description:
        "With our Quick Delivery service, you can enjoy your favorite meals delivered straight to your door in no time. Whether you're at home or at the office, we ensure fast, reliable delivery with a focus on freshness and quality.",
    },
    {
      name: "Super Dine In",
      icon: superDine,
      description:
        "Dine in style with our Super Dine In service. Enjoy a premium dining experience, whether you’re in a cozy restaurant setting or enjoying a special meal at home. We bring the restaurant experience to you with carefully prepared dishes.",
    },
    {
      name: "Easy Pick Up",
      icon: easyPickUp,
      description:
        "Our Easy Pick Up service makes it simple to grab your order on the go. Just place your order, stop by, and pick it up without the wait. Perfect for those with a busy schedule looking for a fast and convenient option.",
    },
  ],
};
