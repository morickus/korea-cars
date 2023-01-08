import Head from 'next/head'
import { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer"
import { Button, Checkbox } from 'antd'
import PhoneInput from 'react-phone-input-2'

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
        <section className={styles['call-back']}>
          <div className="container">
            <div className={styles['call-back__wrapper']}>
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
