import React from "react";

/* Assets */
import { FiveStars } from "./assets";

/* Styles */
import styles from "./styles.module.css";

/* Types */
import ISocialProof from "../../interfaces/SocialProof";

function SocialProof({ author, quote }: ISocialProof) {
  return (
    <div className={styles.SocialProof}>
      <div className={styles.Author}>
        <div className={styles.PersonImageWrapper}>
          <img src={author.picture} alt="" className={styles.Image} />
        </div>

        <div className={styles.Info}>
          <span className={styles.Name}>{author.name}</span>
          <span className={styles.Role}>
            {/* One author must be associated to one company OR industry */}
            {`${author.role} - ${author.company}${author.industry}`}
          </span>
        </div>
      </div>

      <div className={styles.Rating}>
        <img src={FiveStars} alt="Five stars" className={styles.Image} />
      </div>

      <div className={styles.QuoteContainer}>
        <p className={styles.Quote}>{`"${quote}"`}</p>
      </div>
    </div>
  );
}

export default SocialProof;
