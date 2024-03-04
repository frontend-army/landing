import Image from "next/image";
import Link from "next/link";
import FeaLogo from "@/assets/fea_logo.png";
import styles from "./styles.module.css";
import { POSITIONS, Position, classNameForPosition } from "./utils";

interface Props {
  logoPosition?: Position;
}

export const FloatingHeader: React.FC<Props> = ({ logoPosition = POSITIONS.start }) => {
  return (
    <header className={`${styles.floatingHeader} ${classNameForPosition[logoPosition]}`}>
      <Link className={styles.homeLink} href="/">
        <Image src={FeaLogo} alt="" width={60} height={60} />
      </Link>
    </header>
  );
};
