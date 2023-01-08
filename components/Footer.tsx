import styles from '@styles/Footer.module.scss'
import Image from 'next/image'
import { YMaps, Map } from '@pbe/react-yandex-maps'

const Footer = () => {
  const defaultState = {
    center: [54.859124, 69.153757],
    zoom: 13,
  };

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles['wrapper-logo']}>
            <Image src="/logo.svg" alt="logo" width={120} height={38} className={styles.logo} />
            <span className={styles.copyright}>{new Date().getFullYear()} &#169; KOREA CARS</span>
          </div>
          <YMaps>
            <Map defaultState={defaultState} className={styles.map} />
          </YMaps>
          <div className={styles['wrap-right']}>
            <div className={styles['group']}>
              <span className={styles['group__title']}>Навигация</span>
              <div className={styles['group__list']}>
                <a href="#">Полный пакет услуг</a>
                <a href="#">Популярные марки и модели</a>
                <a href="#">Новые автомобили без пробега</a>
                <a href="#">Почему авто из Кореи?</a>
                <a href="#">Часто задаваемые вопросы</a>
              </div>
            </div>
            <div className={styles['group']}>
              <span className={styles['group__title']}>Контакты</span>
              <div className={styles['group__list']}>
                <span>8 (777) 777-71-12</span>
                <span>koreacars@gmail.com</span>
                <span>Сатпаева 103/1 <br/> Бц &quot;Улжан&quot; <br/> 2 этаж, офис 2</span>
                <div className={styles.social}>
                  <a href="#">
                    <Image src="/icon/whats-app.png" alt="whats-app" width={18} height={18} />
                  </a>
                  <a href="#">
                    <Image src="/icon/viber.png" alt="viber" width={18} height={19} />
                  </a>
                  <a href="#">
                    <Image src="/icon/telegram.png" alt="telegram" width={18} height={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className={styles['copyright_mobile']}>{new Date().getFullYear()} &#169; KOREA CARS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;