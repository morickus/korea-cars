import Head from 'next/head'
import { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer"
import { Button, Checkbox, Collapse } from 'antd'
import PhoneInput from 'react-phone-input-2'
import CarCard from "@components/CarCard";
import { cars } from "../data";

const { Panel } = Collapse

export default function Home() {
  const [phone, setPhone] = useState('');

  return (
    <>
      <Head>
        <title>KOREA CARS</title>
        <meta name="description" content="KOREA CARS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.root}>
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
                  <Button className={`antd-button ${styles['form__button']}`} type="primary" htmlType="submit">
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
