import React from 'react'
import styles from '../../styles/showcase.module.css'
import HeroImage from '../../../public/hero-img.svg'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Image from 'next/image';

function Showcase() {
  return (
    <>
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseContent}>
          <div className={styles.heroDescription}>
            <div className={styles.heroDescriptionHeader}>
              <h1>Welcome to Cod Innovations</h1>
            </div>

            <div className={styles.heroDescriptionTagline}>
              <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
            </div>

            <div className={styles.heroDescriptionButton}>
              <button>Get Started</button>
              <div className={styles.watchVideoButton}>
                <PlayCircleOutlineIcon className={styles.icon} />
                <h1>Watch now</h1>
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <Image src={HeroImage} width={900} height={900} alt='logo' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Showcase