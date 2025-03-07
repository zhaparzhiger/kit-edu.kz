import React from 'react';
import styles from '../styles/structure.module.css';
import bigboss from '../../../public/structure/bigboss.svg';
import zam1 from '../../../public/structure/zam1.svg';
import zam2 from '../../../public/structure/zam2.svg';
import zam3 from '../../../public/structure/zam3.svg';
import zam4 from '../../../public/structure/zam4.svg';
import arrow from '../../../public/page-main/yellow-arrow.svg';
import Image from 'next/image';
import Footer from '../../components/Footer'


const Page = () => {
  return (
    <>
    <section className={styles.structure}>
      <div className={styles.structure__container}>
        <div className={styles.structure__head}>
          <div className={styles.structure__title}>Структура</div>
          <div className={styles.structure__subtitle}>Руководитель</div>
          <div className={styles.structure__headimg}>
            <Image src={bigboss} alt="Руководитель" />
          </div>
          <div className={styles.structure__content}>
            <div className={styles.structure__bigboss}>Джартыбаев Серик Тлеуханович</div>
            <a className={styles.structure__link} href="#"><span>Подробнее</span><Image src={arrow} alt="Стрелка" /></a>
          </div>
        </div>
        <div className={styles.structure__bottom}>
          <div className={styles.structure__deputytitle}>Заместители руководителя</div>
          <div className={styles.structure__row}>
          <div className={styles.structure__col}>
              <Image src={zam1} alt="Заместитель 1" />
              <div className={styles.structure__item}>
            <div className={styles.structure__deputyname}>Иванова Ирина Николаевна</div>
            <a className={styles.structure__link} href="#"><span>Подробнее</span><Image src={arrow} alt="Стрелка" /></a>
            </div>
            </div>
          <div className={styles.structure__col}>
              <Image src={zam2} alt="Заместитель 2" />
              <div className={styles.structure__item}>
            <div className={styles.structure__deputyname}>Иванова Ирина Николаевна</div>
            <a className={styles.structure__link} href="#"><span>Подробнее</span><Image src={arrow} alt="Стрелка" /></a>
            </div>
            </div>
          <div className={styles.structure__col}>
              <Image src={zam3} alt="Заместитель 3" />
              <div className={styles.structure__item}>
            <div className={styles.structure__deputyname}>Иванова Ирина Николаевна</div>
            <a className={styles.structure__link} href="#"><span>Подробнее</span><Image src={arrow} alt="Стрелка" /></a>
            </div>
            </div>
          <div className={styles.structure__col}>
            <Image src={zam4} alt="Заместитель 4" />
            <div className={styles.structure__item}>
              <div className={styles.structure__deputyname}>Иванова Ирина Николаевна</div>
              <a className={styles.structure__link} href="#"><span>Подробнее</span><Image src={arrow} alt="Стрелка" /></a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Page;
