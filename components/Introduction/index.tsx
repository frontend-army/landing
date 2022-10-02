import cx from 'classnames';
import styles from './styles.module.scss';

function Introduction() {
  return (
    <section id="introduction" className={styles.container}>
      <h1 className={cx('title-1', styles.text)}>Frontend Army</h1>
      <h2 className={cx('title-2', styles.text)}>
        Comunidad de desarrolladores web y mobile
      </h2>
    </section>
  );
}

export default Introduction;
