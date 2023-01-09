import { FC } from "react"
import styles from '@styles/CardModel.module.scss'
import Image from 'next/image'

interface ICardModel {
  model: string
  image: string
  price: {
    ko: number,
    ru: number
  }
  year: number
}

const CardModel: FC<ICardModel> = (props) => {
  const { image, model, price, year} = props;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={image} alt="car" width={260} height={180} />
      </div>
      <div className={styles.body}>
        <div className={styles.desc}>
          <span className={styles.title}>{model}</span>
          <span className={styles.year}>{year} г.</span>
        </div>
        <div className={styles['wrap-price']}>
          <div className={styles['wrap-price__item']}>
            <span className={styles['price-desc']}>Цена в</span>
            <Image src="/flag/flag_ko.svg" alt="car" width={18} height={18} />
            <span className={styles['price-tag']}>от ${price.ko.toLocaleString()}</span>
          </div>
          <div className={styles['wrap-price__item']}>
            <span className={styles['price-desc']}>Цена в</span>
            <Image src="/flag/flag_ru.svg" alt="car" width={18} height={18} />
            <span className={styles['price-tag']}>от ${price.ru.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModel;