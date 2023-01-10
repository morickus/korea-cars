import { FC } from "react"
import { Tooltip as TooltipAntd } from 'antd'
import styles from '@styles/Tooltip.module.scss'

interface ITooltip {
  title: string
  text: string
}

const Tooltip: FC<ITooltip> = (props) => {
  const { title, text } = props;

  const card = (
    <div className={styles.root}>
      <div className={styles.header}>
        <i className={`icon-info ${styles.icon}`} />
        <span className={styles.title}>{title}</span>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )

  return (
    <div>
      <TooltipAntd title={card} overlayClassName="antd-tooltip">
        <i className="icon-info" />
      </TooltipAntd>
    </div>
  );
};

export default Tooltip;