import cx from 'classnames';
import styles from './styles.module.scss';

import { MEMBERS } from './utils';

function AboutUs() {
  return (
    <section id="us" className={styles.section}>
      <div className={styles.memberListContainer}>
        {MEMBERS.map((member) => (
          <div className={styles.memberContainer}>
            <img
              className={styles.memberImage}
              alt={`${member.name} Avatar`}
              src={member.img.src}
            />
            <h3 className={cx('title-3', styles.memberTitle)}>{member.name}</h3>
            <p className={styles.memberDescription}>{member.description}</p>
            <div className={styles.socials}>
              {member.socials.map(({ href, icon: Icon }) => (
                <a href={href}>
                  <Icon className={styles.socialLinkImg} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
