import { FC } from "react"
import styles from '@styles/CarCard.module.scss'
import Image from 'next/image'
import { Carousel } from 'antd'

export interface ICarCard {
  images: string[]
  model: string
  price: {
    ko: number,
    ru: number
  }
  characteristic: {
    engineCapacity: number
    engineType: string
    driveType: string
    year: number
  }
}

interface IArrow {
  className?: string
  onClick?(): void
}

const Arrow: FC<IArrow> = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <i className="icon-arrow-right" />
    </div>
  )
}

const settings = {
  nextArrow: <Arrow />,
  prevArrow: <Arrow />
}

const CarCard: FC<ICarCard> = (props) => {
  const { images, model, price, characteristic } = props;

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <Carousel arrows {...settings} className="antd-carousel">
          {images.map(i => (
            <div key={i} className={styles['img-wrap']}>
              <Image src={i} alt="alt" width={260} height={180} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.body}>
        <span className={styles.title}>{model}</span>
        <div className={styles.price}>
          <div className={styles['price__item']}>
            <span className={styles['price-tag']}>${price.ko.toLocaleString()}</span>
            <div className={styles['price-desc']}>
              <span>Цена из</span>
              <Image src="/flag/flag_ko.svg" alt="korea" width={18} height={18} />
            </div>
          </div>
          <span className={styles['price__divider']}>-</span>
          <div className={styles['price__item']}>
            <span className={styles['price-tag']}>${price.ru.toLocaleString()}</span>
            <div className={styles['price-desc']}>
              <span>Цена из</span>
              <Image src="/flag/flag_ru.svg" alt="korea" width={18} height={18} />
            </div>
          </div>
        </div>
        <div className={styles.characteristic}>
          <div className={styles['characteristic__item']}>
            <span className={styles.name}>Объем двигателя</span>
            <div className={styles.divider} />
            <span className={styles.value}>{characteristic.engineCapacity}</span>
          </div>
          <div className={styles['characteristic__item']}>
            <span className={styles.name}>Тип двигателя</span>
            <div className={styles.divider} />
            <span className={styles.value}>{characteristic.engineType}</span>
          </div>
          <div className={styles['characteristic__item']}>
            <span className={styles.name}>Привод</span>
            <div className={styles.divider} />
            <span className={styles.value}>{characteristic.driveType}</span>
          </div>
          <div className={styles['characteristic__item']}>
            <span className={styles.name}>Год выпуска</span>
            <div className={styles.divider} />
            <span className={styles.value}>{characteristic.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;