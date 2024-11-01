export default function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <h3 className='about__title'>Here's something about me:</h3>
        <div className='about__description-container'>
          <div className='about__description'>
            <div className='about__description__boxes-container'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 300 300'
                className='styles_svg__aRauV'>
                <g clipPath='url(#variant-1_svg__clip0)'>
                  <path
                    className='variant-1_svg__tetris-dark-path'
                    fill='var(--color-secondary)'
                    d='M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z'></path>
                  <g filter='url(#variant-1_svg__filter0_d)'>
                    <path
                      className='variant-1_svg__tetris-light-path'
                      fill='#940394'
                      d='M200 0H100v100h100V0z'></path>
                  </g>
                </g>
                <defs>
                  <clipPath id='variant-1_svg__clip0'>
                    <path
                      fill='#fff'
                      d='M0 0h300v300H0z'></path>
                  </clipPath>
                  <filter
                    id='variant-1_svg__filter0_d'
                    width='140'
                    height='140'
                    x='84'
                    y='-12'
                    colorInterpolationFilters='sRGB'
                    filterUnits='userSpaceOnUse'>
                    <feFlood
                      floodOpacity='0'
                      result='BackgroundImageFix'></feFlood>
                    <feColorMatrix
                      in='SourceAlpha'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>
                    <feOffset
                      dx='4'
                      dy='8'></feOffset>
                    <feGaussianBlur stdDeviation='10'></feGaussianBlur>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'></feColorMatrix>
                    <feBlend
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow'></feBlend>
                    <feBlend
                      in='SourceGraphic'
                      in2='effect1_dropShadow'
                      result='shape'></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
            <p>
              Name: Mergim Ujkani <br />
              Location: Kosovo <br />
              Contact:{' '}
              <a
                href='https://www.linkedin.com/in/mergim-ujkani-5007b783/'
                target='_blank'>
                https://www.linkedin.com
              </a>{' '}
              <br />
              CV:{' '}
              <a
                href='https://docs.google.com/document/d/1C4cOE2Ox8NGrwhC-u_miWRWLfrCVlPhmHjjeVdJ_86E/edit?usp=sharing'
                target='_blank'>
                Mergim Ujkani
              </a>
              <br />
              <br />
              Summary:
              <br />
              Experienced <strong>Front-End Engineer</strong> with over 6 years of experience working with web
              frameworks such as React and Vue. Passionate about creating reliable and visually appealing web
              applications. <br />
              Skilled in modern web development techniques, including responsive design, accessibility, and performance
              optimization. Seeking a challenging role at a company that values creativity and innovation.
              <br /> <br />
              Skills:
              <br />
              - Proficient in JavaScript, React, TypeScript, HTML, and CSS
              <br />
              - Experience with modern web development tools such as Vite and Webpack.
              <br />
              - Proficient in design tools such as Figma and Adobe XD.
              <br />
              - Communication: Effective communication skills for collaborating with team members, presenting ideas, and
              discussing technical concepts with stakeholders.
              <br />
              - Continuous Learning: Willingness to stay updated with the latest technologies, frameworks, and industry
              trends through self-learning, training, and professional development opportunities.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
