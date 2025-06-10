import Image from "next/image";
import Link from "next/link";
import FeaLogo from "@/assets/fea_logo.png";
import styles from "./styles.module.css";
import { POSITIONS, Position, classNameForPosition } from "./utils";

interface Props {
  logoPosition?: Position;
  priority?: boolean;
  prefetch?: boolean;
}

export const FloatingHeader: React.FC<Props> = ({ logoPosition = POSITIONS.start, priority = false, prefetch = true }) => {
  return (
    <header className={`${styles.floatingHeader} ${classNameForPosition[logoPosition]}`}>
      <Link className={styles.homeLink} href="/" prefetch={prefetch} aria-label="Link a la página de inicio de Frontend Army">
        <Image src={FeaLogo} alt="" width={60} height={60} priority={priority} />
      </Link>
    </header>
  );
};
