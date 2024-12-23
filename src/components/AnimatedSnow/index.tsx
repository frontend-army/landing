import styles from "./styles.module.scss";

const SNOWFLAKE_COUNT = 100;

export const AnimatedSnow: React.FC = () => {
  return (
    <div
      className={styles.snowContainer}
      style={{
        "--snowflake-count": SNOWFLAKE_COUNT,
      }}
    >
      {[...Array(SNOWFLAKE_COUNT)].map((_, i) => (
        <div key={i} className={styles.snowflake} />
      ))}
    </div>
  );
};
