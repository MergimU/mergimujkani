import Image from 'next/image'

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
          </div>
          <div className="work__worked-for__logo">
            <Image alt="Linky" src={"/images/logos/logo-linky.svg"} width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  )
}