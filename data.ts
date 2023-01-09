import { ICarCard } from "@components/CarCard";

export const cars: ICarCard[] = [
  {
    images: [
      '/cars/hyundai_palisade/8f1d36c1-6529-4f76-9240-412fcb465f9c.jpg',
      '/cars/hyundai_palisade/c31700c1-1ee0-44fb-8281-d7d05166b656.jpg',
      '/cars/hyundai_palisade/61a30fa3-8791-4319-aee1-9d3fe1adde9d.jpg',
      '/cars/hyundai_palisade/05b408d8-3039-4f1b-9519-d56955c463d5.jpg'
    ],
    model: "Hyundai palisade",
    price: {
      ko: 71400,
      ru: 79550
    },
    characteristic: {
      engineCapacity: 2.2,
      engineType: "дизель",
      driveType: "полный",
      year: 2022
    }
  },
  {
    images: [
      '/cars/hyundai_staria/24fc310b-6736-4c95-b70c-8c62631ff25e.jpg',
      '/cars/hyundai_staria/cd4bfc45-8a62-45e7-a7e4-1c97ab5e0e74.jpg',
      '/cars/hyundai_staria/092a72f2-a47d-4d94-bfaf-9be61a2cdbdf.jpg',
      '/cars/hyundai_staria/71b36244-4cf9-4106-9b3f-d12a6d4a7364.jpg'
    ],
    model: "Hyundai staria",
    price: {
      ko: 69400,
      ru: 72185
    },
    characteristic: {
      engineCapacity: 2.2,
      engineType: "дизель",
      driveType: "полный",
      year: 2022
    }
  },
  {
    images: [
      '/cars/kia_sorento/6ee9ff06-0e76-42d3-87e8-78034528207b.jpg',
      '/cars/kia_sorento/1f8f85ea-2693-4173-a7a3-1a99b2b3f38c.jpg',
      '/cars/kia_sorento/df5f99b7-4b37-4e97-8cc4-d476208872a9.jpg',
      '/cars/kia_sorento/1d3866a4-3a41-427e-941c-9560abdbfd26.jpg'
    ],
    model: "KIA Sorento",
    price: {
      ko: 54900,
      ru: 61700
    },
    characteristic: {
      engineCapacity: 2.2,
      engineType: "дизель",
      driveType: "полный",
      year: 2022
    }
  },
  {
    images: [
      '/cars/kia_carnival/WhatsApp Image 2022-12-18 at 12.38.jpg',
      '/cars/kia_carnival/WhatsApp Image 2022-12-18 at 12.38-15.jpg',
      '/cars/kia_carnival/WhatsApp Image 2022-12-18 at 12.38-14.jpg',
      '/cars/kia_carnival/WhatsApp Image 2022-12-18 at 12.38-10.jpg'
    ],
    model: "KIA CARNIVAL",
    price: {
      ko: 54900,
      ru: 68350
    },
    characteristic: {
      engineCapacity: 2.2,
      engineType: "дизель",
      driveType: "передний",
      year: 2022
    }
  },
  {
    images: [
      '/cars/toyota_sienna/05ce533e-07d5-4a21-b323-d4c7e1ab4381 1.jpg',
      '/cars/toyota_sienna/acc0ff12-d6b0-485d-bc4e-795e3de84d0e.jpg',
      '/cars/toyota_sienna/67c18d0a-0cb1-413e-b469-dc7607ce38ff.jpg',
      '/cars/toyota_sienna/6d136ede-870b-4017-9960-4984e6a562d3.jpg'
    ],
    model: "TOYOTA SIENNA",
    price: {
      ko: 66400,
      ru: 75150
    },
    characteristic: {
      engineCapacity: 2.5,
      engineType: "гибрид",
      driveType: "полный",
      year: 2022
    }
  },
  {
    images: [
      '/cars/bmw_x7/b17f0524-7a18-4175-8634-c56288244a50.jpg',
      '/cars/bmw_x7/de6ff020-a611-482a-850d-60f28a3998a7.jpg',
      '/cars/bmw_x7/9a8fc57f-31b1-4a5f-9c85-494f72e8719c.jpg',
      '/cars/bmw_x7/3b3a940b-8249-4faf-8b7b-cf926a448706.jpg'
    ],
    model: "BMW X7",
    price: {
      ko: 147500,
      ru: 204800
    },
    characteristic: {
      engineCapacity: 3.0,
      engineType: "дизель",
      driveType: "полный",
      year: 2022
    }
  },
  {
    images: [
      '/cars/toyota_camry_75/d0fd74aa-4bfb-4a2f-ab9b-944e3db92e63.jpg',
      '/cars/toyota_camry_75/45294bfa-0057-41f4-a83e-7950258e7659.jpg',
      '/cars/toyota_camry_75/37711a93-0b79-422c-85c3-264d07f50425.jpg',
      '/cars/toyota_camry_75/527b26a1-99c0-4016-a999-f4b25c6e236a.jpg'
    ],
    model: "Toyota Camry 75",
    price: {
      ko: 52600,
      ru: 96430
    },
    characteristic: {
      engineCapacity: 2.5,
      engineType: "дизель",
      driveType: "передний",
      year: 2022
    }
  },
  {
    images: [
      '/cars/kia_mohave/e549a8dc-48a7-4c2b-900a-01a6ba380480.jpg',
      '/cars/kia_mohave/2fd5d52f-a532-459e-a403-699674acdcb3.jpg',
      '/cars/kia_mohave/d194f95c-edd0-447c-92a5-5e74bde101f6.jpg',
      '/cars/kia_mohave/72064883-ef18-417a-960d-70b7055acd24.jpg'
    ],
    model: "KIA MOHAVE",
    price: {
      ko: 75150,
      ru: 84930
    },
    characteristic: {
      engineCapacity: 3.0,
      engineType: "дизель",
      driveType: "полный",
      year: 2022
    }
  }
]

export const info = [
  {
    icon: "camera",
    title: "Отчет об автомобиле",
    text: "Видео-отчет, подробная информация о ньюансах авто"
  },
  {
    icon: "service",
    title: "Консультация специалиста",
    text: "Поддержка клиента на всех этапах сопровождения в удобном для него формате"
  },
  {
    icon: "steering",
    title: "Собственный автопарк",
    text: "В нашем маркете есть выкупленные автомобили — выберите свой"
  },
  {
    icon: "car",
    title: "Особенные автомобили",
    text: "Премиум и люкс класс автомобилей на ваш выбор"
  },
  {
    icon: "feedback",
    title: "Специальные условия",
    text: "Для постоянных клиентов существует система скидок"
  },
  {
    icon: "map-pin",
    title: "Приезжайте к нам лично",
    text: "Мы имеем офис в Казахстане, г. Алматы, офис в Корее"
  }
]


