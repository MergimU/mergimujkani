import Image from 'next/image';
import TextAnimation from '@/app/_components/TextAnimation';

const Homeview = () => {
  return (
    <div className='home'>
      <div className='home__info'>
        <div className='home__info__brackets'>
          <svg
            className='icon-bracket-open'
            viewBox='0 0 7 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9C1.26522 9 1.51957 8.89464 1.70711 8.70711C1.89464 8.51957 2 8.26522 2 8V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H6C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1C7 1.26522 6.89464 1.51957 6.70711 1.70711C6.51957 1.89464 6.26522 2 6 2H4V8C3.99833 8.73873 3.72416 9.45088 3.23 10C3.72416 10.5491 3.99833 11.2613 4 12V18H6C6.26522 18 6.51957 18.1054 6.70711 18.2929C6.89464 18.4804 7 18.7348 7 19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20Z'
              fill='var(--color-secondary)'
            />
          </svg>
          <svg
            className='icon-bracket-close'
            viewBox='0 0 7 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 18.7348 0.105357 18.4804 0.292893 18.2929C0.48043 18.1054 0.734784 18 1 18H3V12C3.00167 11.2613 3.27584 10.5491 3.77 10C3.27584 9.45088 3.00167 8.73873 3 8V2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3C3.53043 0 4.03914 0.210714 4.41421 0.585786C4.78929 0.960859 5 1.46957 5 2V8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9C6.26522 9 6.51957 9.10536 6.70711 9.29289C6.89464 9.48043 7 9.73478 7 10C7 10.2652 6.89464 10.5196 6.70711 10.7071C6.51957 10.8946 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12V18C5 18.5304 4.78929 19.0391 4.41421 19.4142C4.03914 19.7893 3.53043 20 3 20Z'
              fill='var(--color-secondary)'
            />
          </svg>
        </div>
        <div className='home__info__about-me'>
          <h2>Hey there! I'm</h2>
          <h1>Mergim Ujkani</h1>
          <div>
            <p>
              "A Front-End Engineer with 6+ years of experience (TypeScript/React ❤️), passionate about building
              elegant, high-performance UIs that delight users. When I'm not crafting sleek applications, I'm either out
              running or mastering the art of staying in—gaming, binge-watching The Office, or geeking out over the
              latest tech. Let's build something amazing together!" 🚀💻🎮
            </p>
            <TextAnimation />
            <br />
          </div>
        </div>
      </div>
      <div className='home__social-networks'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/mergim-ujkani-5007b783/'
          title='Linkedin'>
          <Image
            alt='Linkedin'
            src={'/images/socials/linkedin-icon.svg'}
            width={20}
            height={20}
            style={{ width: '20px', height: '20px' }}
          />
        </a>
        <a
          target='_blank'
          href='https://codepen.io/MergimUjkani'>
          <Image
            alt='Codepen'
            src={'/images/socials/codepen-icon.svg'}
            width={20}
            height={20}
            style={{ width: '20px', height: '20px' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Homeview;
