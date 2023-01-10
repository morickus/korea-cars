import Head from 'next/head'
import { useState } from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer"
import { Button, Checkbox, Collapse } from 'antd'
import PhoneInput from 'react-phone-input-2'
import CarCard from "@components/CarCard"
import { cars, info } from "../data"
import CardModel from "@components/CardModel"
import Tooltip from "@components/Tooltip"
import { Element } from 'react-scroll'

const { Panel } = Collapse

export default function Home() {
  const [phone, setPhone] = useState('')

  return (
    <>
      <Head>
        <title>KOREA CARS</title>
        <meta name="description" content="KOREA CARS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.main}>
          <div className="container">
            <div className={styles.background}>
              <div />
              <div className={styles.cars}>
                <Image className={`${styles.car} ${styles['car-1']}`} src="/car_1.png" alt="car" width={517} height={260} />
                <Image className={`${styles.car} ${styles['car-2']}`} src="/car_2.png" alt="car" width={311} height={163} />
              </div>
            </div>
            <div className={styles['wrapper']}>
              <div className={styles.header}>
                <div className={styles.logo}>
                  <Image src="/logo.svg" alt="logo" width={120} height={38} />
                </div>
                <div className={styles.social}>
                  <span className={styles.tel}>+7 (964) 921-33-83</span>
                  <div className={styles['social-net']}>
                    <a href="#" className={styles['social-net__item']}>
                      <Image src="/icon/whats-app.png" alt="whats-app" width={18} height={18} />
                      <span>Перейти в Whatsapp</span>
                    </a>
                    <a href="#" className={styles['social-net__item']}>
                      <Image src="/icon/viber.png" alt="viber" width={18} height={19} />
                      <span>Перейти в Viber</span>
                    </a>
                    <a href="#" className={styles['social-net__item']}>
                      <Image src="/icon/telegram.png" alt="telegram" width={18} height={18} />
                      <span>Перейти в Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>Экспорт авто из Кореи в РФ</h1>
                <span className={styles.subtitle}>Закажи авто
                  <span className="red-color"> от 1.5 млн</span> рублей, экономия
                  <span className="red-color"> от 30%</span>
                </span>
                <p className={styles.desc}>Контроль на всех этапах — от подбора до доставки.</p>

                <div className={styles['advantages']}>
                  <div className={styles['advantages__item']}>
                    <i className="icon-shield" />
                    <span>Безопасная сделка</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-file-shield" />
                    <span>Страховка транспортировки</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-search" />
                    <span>Подбор автомобиля</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-tower" />
                    <span>Представительство в Корее</span>
                  </div>
                </div>

                <div className={styles.form}>
                  <div className={styles['form__phone']}>
                    <PhoneInput
                      country={'ru'}
                      value={phone}
                      containerClass="phone-input__container"
                      buttonClass="phone-input__button"
                      inputClass="phone-input__input"
                      onChange={phone => setPhone(phone)}
                    />
                  </div>
                  <Button className={`antd-button ${styles['form__button']}`} type="primary">
                    Заказать звонок
                  </Button>
                </div>

                <div className={styles.note}>
                  <Image src="/digit_bank_logo.png" alt="logo" width={130} height={16} />
                  <span>Оплата и переводы в системе Цифра Банк (Банк “Фридом Финанс”)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.logos}>
          <div className="container">
            <div className={styles['wrapper']}>
              <div className={styles['wrap-logos']}>
                <Image src="/cars/logo/580b57fcd9996e24bc43c46e.png" alt="BMW" width={100} height={62} />
                <Image src="/cars/logo/580b57fcd9996e24bc43c4a5.png" alt="Volkswagen" width={100} height={62} />
                <Image src="/cars/logo/5ec3e1ee58550c0004427739.png" alt="Toyota" width={100} height={62} />
                <Image src="/cars/logo/CHEVROLET.png" alt="CHEVROLET" width={120} height={62} />
                <Image src="/cars/logo/LAND-ROVER.png" alt="LAND-ROVER" width={120} height={62} />
                <Image src="/cars/logo/5ec3e30358550c0004427741.png" alt="Mercedes" width={80} height={62} />
                <Image src="/cars/logo/5ec3e36558550c0004427744.png" alt="Lexus" width={100} height={62} />
                <Image src="/cars/logo/638e307b3eae41f3706b4076.png" alt="Kia Motors" width={100} height={62} />
                <Image src="/cars/logo/5ec3e46558550c000442774b.png" alt="Audi" width={100} height={62} />
              </div>
              <span className={styles.desc}>*и еще более 15 мировых брендов</span>
            </div>
          </div>
        </section>
        <Element name="package-services">
          <section className={styles['package-services']}>
            <div className={styles['wrapper']}>
              <div className={styles['top-side']}>
                <div className="container">
                  <div className={styles.before} />
                  <div className={styles.content}>
                    <h4 className={styles.title}>Полный пакет услуг</h4>
                    <p className={styles.text}><span className={styles.weight}>KoreaCars</span> предоставляет для Вас комплексное решение по экспорту автомобилей из Южной Кореи, организует работу, отвечает за технические и юридические вопросы связанные <span className={styles.weight}>с подбором, покупкой, транспортировкой и передачей автомобиля в дальнейшую эксплуатацию.</span></p>
                    <p className={styles.note}>*Возможность оплаты подбора авто отдельной услугой</p>
                    <p className={styles.note}>*Отчет для первого подобранного авто — бесплатный</p>
                  </div>
                </div>
              </div>
              <div className={styles['bottom-side']}>
                <div className="container">
                  <div className={styles.content}>
                    <div className={styles.item}>
                      <i className={`icon-key ${styles.icon}`} />
                      <span className={styles.title}>Оформление <br/> “Под ключ”</span>
                      <p className={styles.text}>Таможенное оформление, постанока на учет в ГИБДД, оформление на физ. или юр. лицо</p>
                    </div>
                    <div className={styles.item}>
                      <i className={`icon-shield-check ${styles.icon}`} />
                      <span className={styles.title}>Безопасная <br/> сделка</span>
                      <p className={styles.text}>Оплата и переводы в системе Цифра Банк (Банк “Фридом Финанс”)</p>
                    </div>
                    <div className={styles.item}>
                      <i className={`icon-check-box ${styles.icon}`} />
                      <span className={styles.title}>Юридическая чистота авто</span>
                      <p className={styles.text}>На этапе подбора авто предоставляется полноценная информация из открытых, достоверных источников </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['wrap-right-side']}>
                <div className="container">
                  <div className={styles['right-side']}>
                    <div className={styles.content}>
                      <div className={styles['wrap-direction']}>
                        <div className={styles.direction}>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>1</span>
                            <span className={styles.text}>Консультация</span>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>2</span>
                            <span className={styles.text}>Подбор с учетом бюджета и желаемых характеристик</span>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>3</span>
                            <span className={styles.text}>Предоставление истории автомобиля</span>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>4</span>
                            <span className={styles.text}>Расчет стоимости</span>
                          </div>
                        </div>
                        <div className={styles.direction}>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>5</span>
                            <span className={styles.text}>Покупка автомобиля</span>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>6</span>
                            <div className={styles['wrap-tooltip']}>
                          <span className={styles.text}>
                            Организация услуг <br/> доставки <span className={styles.weight}>от 30 дней</span>
                          </span>
                              <Tooltip title="Организация услуг доставки" text="Отправка через Китай или Владивосток" />
                            </div>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>7</span>
                            <div className={styles['wrap-tooltip']}>
                              <span className={styles.text}>Таможенное оформление</span>
                              <Tooltip title="Таможенное оформление" text="Пошлина, НДС, первичное оформление, утильсбор, сертификат соответствия, кнопка SOS" />
                            </div>
                          </div>
                          <div className={styles['direction__item']}>
                            <span className={styles.number}>8</span>
                            <span className={styles.text}>Поддержка по сопутствующим юридическим вопросам</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <section className={styles['info']}>
          <div className="container">
            <div className={styles['wrapper']}>
              {info.map(i => (
                <div key={i.icon} className={styles.item}>
                  <i className={`icon-${i.icon} ${styles.icon}`} />
                  <span className={styles.title}>{i.title}</span>
                  <p className={styles.text}>{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Element name="popular-models">
          <section className={styles['popular-models']}>
            <div className="container">
              <div className={styles['wrapper']}>
                <span className={styles.title}>Популярные марки и модели</span>
                <p className={styles.text}>Корейский рынок предлагает для вас новинки из
                  <span className="red-color"> модельного ряда 2023 года</span> в топовой комплектации</p>
                <div className={styles['wrap-cards']}>
                  <CardModel
                    model="KIA KARNIVAL"
                    year={2023}
                    image="/cars/kia_karnival.jpg"
                    price={{
                      ko: 52500,
                      ru: 61000
                    }}
                  />
                  <CardModel
                    model="Hyundai Staria"
                    year={2023}
                    image="/cars/hyundai_staria.jpg"
                    price={{
                      ko: 52500,
                      ru: 72350
                    }}
                  />
                  <CardModel
                    model="Hyundai palisade"
                    year={2023}
                    image="/cars/hyundai_palisade.jpg"
                    price={{
                      ko: 60910,
                      ru: 68500
                    }}
                  />
                  <CardModel
                    model="Genesis GV70"
                    year={2022}
                    image="/cars/genesis_gv70.jpg"
                    price={{
                      ko: 40850,
                      ru: 80800
                    }}
                  />
                </div>
                <Button className={`antd-button ${styles['button']}`} type="primary">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </section>
        </Element>
        <Element name="why-korea">
          <section className={styles['why-korea']}>
            <div className="container">
              <div className={styles['wrapper']}>
                <span className={styles.title}>Почему авто из Кореи?</span>
                <div className={styles['right-side']}>
                  <div className={styles['right-side__item']}>
                    <span>Широкий выбор комплектаций</span>
                    <p>Эксклюзивные функции и оснащение в том числе заводское ГБО</p>
                  </div>
                  <div className={styles['right-side__item']}>
                    <span>Уникальные авто</span>
                    <p>Авто выпущенные только для рынка Южной Кореи</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="new-cars">
          <section className={styles['new-cars']}>
            <div className="container">
              <div className={styles['wrapper']}>
                <h4 className={styles.title}>Новые автомобили без пробега</h4>
                <p className={styles.text}>В наличии у <span className="red-color">KoreaCars</span><br/>
                  Цены из Кореи <span className="red-color">под ключ</span></p>
                <div className={styles['wrap-cards']}>
                  {cars.map(i => <CarCard key={i.model} {...i} />)}
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="question-answer">
          <section className={styles['question-answer']}>
            <div className="container">
              <div className={styles['wrapper']}>
                <h4 className={styles.title}>Часто задаваемые вопросы</h4>
                <div className={styles.grid}>
                  <Collapse
                    defaultActiveKey={['1']}
                    className="antd-collapse"
                    expandIcon={({ isActive }) => (
                      isActive ? (
                        <i className={`icon-minus ${styles.icon} ${styles['icon-minus']}`} />
                      ) : (
                        <i className={`icon-plus ${styles.icon} ${styles['icon-plus']}`} />
                      )
                    )}
                    ghost
                  >
                    <Panel header="Что требуется для начала работы?" key="1">
                      <div className={styles.text}>
                        <p>Для начала нам нужно связаться, для этого выберите удобный для вас способ обращения, вы можете позвонить нам на указанный номер в шапке сайта, заказать звонок, обратится в мессенджер (What’s App, Viber, Telegram).</p>
                        <br/>
                        <p>Далее, наш специалист проведет с Вами подробную консультацию и заполнит бриф, оформит заявку на подбор авто и свяжется с Вами повторно, когда данные по интересующему автомобилю появятся у нашей компании.</p>
                      </div>
                    </Panel>
                    <Panel header="Почему в Корее Б/У авто брать выгоднее?" key="2">
                      <div className={styles.text}>
                        <p>Автомобили на корейском рынке отличаются более бережной эксплуатацией за счёт качества дорог и погодных условий, своевременого технического обслуживания. Также немаловажным фактором является  корейская сборка, которая в свою очередь является признано более качественной и включает в себя больший список комплектаций.</p>
                      </div>
                    </Panel>
                  </Collapse>
                  <Collapse
                    ghost
                    className="antd-collapse"
                    expandIcon={({ isActive }) => (
                      isActive ? (
                        <i className={`icon-minus ${styles.icon} ${styles['icon-minus']}`} />
                      ) : (
                        <i className={`icon-plus ${styles.icon} ${styles['icon-plus']}`} />
                      )
                    )}
                  >
                    <Panel header="Что входит в отчет об автомобиле?" key="1">
                      <div className={styles.text}>
                        <p>Отчёт формируется на основе данных полученных при осмотре авто нашим сотрудником в Южной Корее. В отчёт входит информация: <br/>
                          - круговой осмотр кузова и салона авто для выявления наличия дефектов; <br/>
                          - измерение лакокрасочного покрытия для обнаружения мест шпаклёвка и покраски; <br/>
                          - проверка работы акпп, мотора (рывки, пинки, потеки масла).</p>
                      </div>
                    </Panel>
                    <Panel header="Как долго ждать авто из Кореи?" key="2">
                      <div className={styles.text}>
                        <p>Наша компания предлагает несколько вариантов транспортировки вашего авто из Южной Кореи. <br/>
                          Китай: вагон-сетка – 25-30 дней, контейнер – 40-45 дней. <br/>
                          Владивосток: 25-30 дней.</p>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <section className={styles['call-back']}>
          <div className="container">
            <div className={styles['wrapper']}>
              <div className={styles['left-side']}>
                <Image src="/car_4.png" alt="car" className={styles['left-side__car']} width={500} height={318} />
                <span className={styles['left-side__title']}>Заполните форму</span>
                <div className={styles['left-side__info']}>
                  <i className="icon-list-find" />
                  <span>и получите первый бесплатный отчет на авто при подборе</span>
                </div>
              </div>
              <div className={styles['right-side']}>
                <span className={styles['right-side__title']}>Мы вам перезвоним</span>
                <div className={styles['advantages']}>
                  <div className={styles['advantages__item']}>
                    <i className="icon-shield" />
                    <span>Безопасная сделка</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-file-shield" />
                    <span>Страховка транспортировки</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-search" />
                    <span>Подбор автомобиля</span>
                  </div>
                  <div className={styles['advantages__item']}>
                    <i className="icon-tower" />
                    <span>Представительство в Корее</span>
                  </div>
                </div>
                <div className={styles['form']}>
                  <PhoneInput
                    country={'ru'}
                    value={phone}
                    containerClass="phone-input__container"
                    buttonClass="phone-input__button"
                    inputClass="phone-input__input"
                    onChange={phone => setPhone(phone)}
                  />
                  <div className={styles['form__checkbox']}>
                    <Checkbox className="antd-checkbox" />
                    <span>Я согласен с политикой <a href="#">обработки персональной информации</a></span>
                  </div>
                  <Button className={`antd-button ${styles['form__button']}`} type="primary">
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
