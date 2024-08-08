import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mergim Ujkani - About me',
  description:
    'Experienced Software Engineer with over 6 years of experience working with web frameworks such as React and Vue. Passionate about creating reliable and visually appealing web applications.  Skilled in modern web development techniques, including responsive design, accessibility, and performance optimization. Seeking a challenging role at a company that values creativity and innovation.',
  keywords:
    'Software Engineer, React, React Native, NextJS, Styled Components, CSS, SCSS, VueJS, UI, Front End, Web Developer, Front End Web Developer, Website, Web-app, SVG, Animations, Responsive, Web Design, Codepen, Netlify',
};

export default function Work() {
  return (
    <div className='work'>
      <div className='work__container'>
        <h3 className='work__title'>Work Experience:</h3>
        <div className='work__worked-for no-bg'>
          <div className='work__worked-for__info'>
            <h4>Freelance — Software Engineer</h4>
            <p>Freelance / (January 2023 - now)</p>
            <p>
              <span>
                As a freelancer, I've worked with clients that required mostly
                experience as a front-end engineer and personal projects like
                chrome extensions and full-stack apps with NextJS .
              </span>
              <span>
                Client project (Dashboard UI) - This project was used by a
                school system for managing data for teachers and students.
                Creating a dashboard using technologies like ReactJS,
                Redux-toolkit and SCSS was a great choice for this product since
                the app was mid-large size.
              </span>
              <span>
                Personal project (chrome extension) - This Chrome extension
                simplifies your online experience:{' '}
                <Link
                  target='_blank'
                  href='https://chromewebstore.google.com/detail/linky/alfhdmidbiiklpndmlgakcheoojncdja?hl=en-US'>
                  Linky
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className='work__worked-for'>
          <div className='work__worked-for__info'>
            <h4>Solidfi</h4>
            <p>Software Engineer / Fintech / (Feb 2019 - Jan 2023)</p>
            <p>
              <span>
                - Implemented responsive and dynamic user interfaces using React
                and Vue
              </span>
              <span>
                - Developed and maintained modular, reusable components to
                ensure code efficiency and consistency
              </span>
              <span>
                - Ensured cross-browser compatibility and optimized the
                performance of web applications
              </span>
            </p>
            <a
              className='btn-glow'
              href='https://www.solidfi.com/'
              target='_blank'>
              Visit website
            </a>
          </div>
          <div className='work__worked-for__logo'>
            <Image
              alt='Solidfi Fintech'
              src={'/images/logos/logo-solid.svg'}
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className='work__worked-for'>
          <div className='work__worked-for__info'>
            <h4>UNE</h4>
            <p>Software Engineer / Web Agency / (Nov 2017 - Mar 2019)</p>
            <p>
              <span>
                - Managed asynchronous operations using Axios to fetch and
                update data.
              </span>
              <span>
                - Customized and extended components to match project
                requirements and design guidelines.
              </span>
              <span>
                - Shared knowledge through workshops or documentation to improve
                overall team expertise.
              </span>
            </p>
            <a
              className='btn-glow'
              href='https://une.ch/'
              target='_blank'>
              Visit website
            </a>
          </div>
          <div className='work__worked-for__logo'>
            <Image
              alt='UNE Agency'
              src={'/images/logos/logo-une.svg'}
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className='work__worked-for work__worked-for--space'>
          <div className='work__worked-for__info'>
            <h4>Splashdata</h4>
            <p>
              Front-End Developer / Password manager / (Feb 2016 - Sep 2019)
            </p>
            <p>
              <span>
                - Collaborated with backend developers to integrate frontend
                components with server-side logic.
              </span>
              <span>
                - Actively participated in team meetings, code reviews, and
                discussions to enhance overall project quality.
              </span>
              <span>
                - Ensured cross-browser compatibility and optimized the
                performance of web applications.
              </span>
            </p>
            <a
              className='btn-glow'
              href='https://www.splashdata.com/'
              target='_blank'>
              Visit website
            </a>
          </div>
          <div className='work__worked-for__logo'>
            <Image
              alt='SplashData'
              src={'/images/logos/logo-splashid.svg'}
              width={120}
              height={120}
            />
          </div>
        </div>

        <h3 className='work__title work__title--fun-projects'>Fun projects:</h3>
        <div className='work__worked-for'>
          <div className='work__worked-for__info'>
            <h4>Codepen</h4>
            <p>Playing with CSS in my free time</p>
            <a
              className='btn-glow'
              href='https://codepen.io/MergimUjkani'
              target='_blank'>
              Go to CodePen
            </a>
          </div>
          <div className='work__worked-for__logo'>
            <Image
              alt='Codepen'
              src={'/images/illustrations/codepen.svg'}
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className='work__worked-for'>
          <div
            className='work__worked-for__info app-linky'
            id='linky'>
            <h4>Linky</h4>
            <div>
              <span>Chrome extension:</span> <br />
              <p>
                Tired of searching for the best deals or struggling with
                unfamiliar words while browsing?
                <br />
                <br />
                This Chrome extension simplifies your online experience:
              </p>
              <ol>
                <li>
                  <p>
                    Effortless Price Comparison: Just highlight an item you'd
                    like to buy, and the extension displays purchase options
                    from various retailers, helping you find the best deal.
                  </p>
                </li>
                <li>
                  <p>
                    Instant Word Definitions: Encountered an unfamiliar word?
                    Simply highlight it, and the extension displays definitions
                    and information from trusted sources like Wikipedia, saving
                    you time and keeping you informed.
                  </p>
                </li>
              </ol>
            </div>
            <div className='tags'>
              <p className='tags__name'>Javascript</p>
              <p className='tags__name'>CSS</p>
            </div>
            <a
              className='btn-glow'
              href='https://chrome.google.com/webstore/detail/linky/alfhdmidbiiklpndmlgakcheoojncdja?hl=en-US'
              target='_blank'>
              Go to extension
            </a>
          </div>
          <div className='work__worked-for__logo'>
            <Image
              alt='Linky'
              src={'/images/logos/logo-linky.svg'}
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
