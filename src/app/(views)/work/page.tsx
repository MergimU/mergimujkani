import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mergim Ujkani - About me",
  description: "Experienced Software Engineer with over 6 years of experience working with web frameworks such as React and Vue. Passionate about creating reliable and visually appealing web applications.  Skilled in modern web development techniques, including responsive design, accessibility, and performance optimization. Seeking a challenging role at a company that values creativity and innovation.",
  keywords: "Software Engineer, React, React Native, NextJS, Styled Components, CSS, SCSS, VueJS, UI, Front End, Web Developer, Front End Web Developer, Website, Web-app, SVG, Animations, Responsive, Web Design, Codepen, Netlify"
};

export default function Work() {
  return (
    <div className="work">
      <div className="work__container">
        <h3 className="work__title">Companies I worked for:</h3>
        <div className="work__worked-for">
          <div className="work__worked-for__info">
            <h4>Solidfi</h4>
            <p>Software Engineer / Fintech / (Feb 2019 - Jan 2023)</p>
            <p>
              <span>- Implemented responsive and dynamic user interfaces using React and Vue</span>
              <span>- Developed and maintained modular, reusable components to ensure code efficiency and
                consistency</span>
              <span>- Ensured cross-browser compatibility and optimized the performance of web applications</span>
            </p>
            <a className="btn-glow"
              href="https://www.solidfi.com/"
              target="_blank">Visit website</a>
          </div>
          <div className="work__worked-for__logo">
            <Image alt="Solidfi Fintech" src={"/images/logos/logo-solid.svg"} width={120} height={120} />
          </div>
        </div>
        <div className="work__worked-for">
          <div className="work__worked-for__info">
            <h4>UNE</h4>
            <p>Software Engineer / Web Agency / (Nov 2017 - Mar 2019)</p>
            <p>
              <span>- Managed asynchronous operations using Axios to fetch and update data.</span>
              <span>- Customized and extended components to match project requirements and design guidelines.</span>
              <span>- Shared knowledge through workshops or documentation to improve overall team expertise.</span>
            </p>
            <a className="btn-glow"
              href="https://une.ch/"
              target="_blank">Visit website</a>
          </div>
          <div className="work__worked-for__logo">
            <Image alt="UNE Agency" src={"/images/logos/logo-une.svg"} width={120} height={120} />
          </div>
        </div>
        <div className="work__worked-for work__worked-for--space">
          <div className="work__worked-for__info">
            <h4>Splashdata</h4>
            <p>Front-End Developer / Password manager / (Feb 2016 - Sep 2019)</p>
            <p>
              <span>- Collaborated with backend developers to integrate frontend components with server-side logic.</span>
              <span>- Actively participated in team meetings, code reviews, and discussions to enhance overall project
                quality.</span>
              <span>- Ensured cross-browser compatibility and optimized the performance of web applications.</span>
            </p>
            <a className="btn-glow"
              href="https://www.splashdata.com/"
              target="_blank">Visit website</a>
          </div>
          <div className="work__worked-for__logo">
            <Image alt="SplashData" src={"/images/logos/logo-splashid.svg"} width={120} height={120} />
          </div>
        </div>

        <h3 className="work__title work__title--fun-projects">Fun projects:</h3>
        <div className="work__worked-for">
          <div className="work__worked-for__info">
            <h4>Codepen</h4>
            <p>Playing with CSS in my free time</p>
            <a className="btn-glow"
              href="https://codepen.io/MergimUjkani"
              target="_blank">Go to CodePen</a>
          </div>
          <div className="work__worked-for__logo">
            <Image alt="Codepen" src={"/images/illustrations/codepen.svg"} width={120} height={120} />
          </div>
        </div>
        <div className="work__worked-for">
          <div className="work__worked-for__info">
            {/* <div className="work__worked-for__info">
            <h4>Linky</h4>
            <p><span>Chrome extension:</span> <br />During web browsing you encounter an item that you want to purchase,
              you
              just
              simply highlight that and it will show options on where you want to purchase that item.
              <br /> <br />
              If you like reading online and have unknown words, then you just highlight a word and options are shown like
              Wikipedia so you can get info for that word.
            </p>
            <div className="tags">
              <p className="tags__name">Javascript</p>
              <p className="tags__name">CSS</p>
            </div>
            <a className="btn-glow"
              href="https://chrome.google.com/webstore/detail/linky/alfhdmidbiiklpndmlgakcheoojncdja?hl=en-US"
              target="_blank">Go to extension</a>
          </div> */}
            <h4>Linky</h4>
            <p><span>Chrome extension:</span> <br />
              <strong>Tired of searching for the best deals or struggling with unfamiliar words while browsing?</strong><br /> <br />
              This Chrome extension simplifies your online experience:
              <ol>
                <li>
                  Effortless Price Comparison: Just highlight an item you'd like to buy, and the extension displays purchase options from various retailers, helping you find the best deal.
                </li>
                <li>
                  Instant Word Definitions: Encountered an unfamiliar word? Simply highlight it, and the extension displays definitions and information from trusted sources like Wikipedia, saving you time and keeping you informed.
                </li>

              </ol>
            </p>
            <div className="tags">
              <p className="tags__name">Javascript</p>
              <p className="tags__name">CSS</p>
            </div>
            <a className="btn-glow"
              href="https://chrome.google.com/webstore/detail/linky/alfhdmidbiiklpndmlgakcheoojncdja?hl=en-US"
              target="_blank">Go to extension</a>
          </div>
          <div className="work__worked-for__logo">
            <Image alt="Linky" src={"/images/logos/logo-linky.svg"} width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  )
}