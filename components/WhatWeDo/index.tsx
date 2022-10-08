import cx from 'classnames';
import styles from './styles.module.scss';

import { ITEMS, useObserveBottom } from './utils';

function WhatWeDo() {
  const { ref: podcastRef, isBottom: isPodcastBottom } = useObserveBottom();
  const { ref: communityRef, isBottom: isCommunityBottom } = useObserveBottom();
  const { ref: codeRef, isBottom: isCodeBottom } = useObserveBottom();

  const refs = [
    {
      ref: podcastRef,
      isBottom: isPodcastBottom
    },
    {
      ref: communityRef,
      isBottom: isCommunityBottom
    },
    {
      ref: codeRef,
      isBottom: isCodeBottom
    }
  ];

  return (
    <section id="vision" className={styles.container}>
      {ITEMS.map(({ src, text, alt, socials }, index) => (
        <div
          key={src.src}
          ref={refs[index].ref}
          className={cx(styles.rowContainer, {
            [styles.visibleRow]: refs[index].isBottom
          })}
        >
          <img src={src.src} alt={alt} className={styles.image} />
          <div className={styles.rowTextContent}>
            <p className={styles.rowText}>{text}</p>
            <div className={styles.socialLinks}>
              {socials.map((social) => (
                <a key={social.title} href={social.href} title={social.title}>
                  <img src={social.icon.src} alt={social.title} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WhatWeDo;
