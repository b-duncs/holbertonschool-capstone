import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M31.6432 1.10208C30.1738 -0.367359 27.7985 -0.367359 26.3291 1.10208L24.3094 3.115L30.8783 9.68385L32.8979 7.66422C34.3674 6.19478 34.3674 3.81953 32.8979 2.35009L31.6432 1.10208ZM11.5676 15.8635C11.1583 16.2728 10.843 16.7761 10.6618 17.333L8.67571 23.2912C8.48113 23.8683 8.63545 24.5057 9.06488 24.9418C9.4943 25.378 10.1317 25.5256 10.7155 25.331L16.6737 23.3449C17.2239 23.1637 17.7272 22.8484 18.1432 22.4391L29.3686 11.207L22.793 4.63141L11.5676 15.8635ZM6.44136 3.9403C2.88519 3.9403 0 6.8255 0 10.3817V27.5586C0 31.1148 2.88519 34 6.44136 34H23.6183C27.1745 34 30.0597 31.1148 30.0597 27.5586V21.1173C30.0597 19.9296 29.1002 18.9702 27.9126 18.9702C26.7249 18.9702 25.7655 19.9296 25.7655 21.1173V27.5586C25.7655 28.7463 24.806 29.7058 23.6183 29.7058H6.44136C5.25374 29.7058 4.29424 28.7463 4.29424 27.5586V10.3817C4.29424 9.19404 5.25374 8.23455 6.44136 8.23455H12.8827C14.0704 8.23455 15.0298 7.27505 15.0298 6.08742C15.0298 4.8998 14.0704 3.9403 12.8827 3.9403H6.44136Z'
      fill='#3949AB'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };