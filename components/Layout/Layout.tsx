//@ts-ignore
import type { NextraThemeLayoutProps } from 'nextra';
import { useEffect, useContext } from 'react';
import styles from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Switch } from '@nextui-org/react';
import GlobalContext from '../globalContext';

export default function Layout(props: NextraThemeLayoutProps) {

  const { children, pageOpts, pageProps } = props;
  const { pageMap, headings } = pageOpts;
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  useEffect(() => {
    // console.log('props: ', props);
  }, [props]);

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <a href="/">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="136px" height="45px" viewBox="0 0 168 53" version="1.1">
              <g id="surface1">
                <path fill="currentColor" stroke="currentColor" d="M 68.238281 29.226562 C 68.636719 30.539062 70.488281 30.539062 70.886719 29.226562 L 76.511719 10.679688 C 76.6875 10.09375 77.226562 9.695312 77.835938 9.695312 L 85.75 9.695312 C 86.707031 9.695312 87.375 10.640625 87.054688 11.546875 L 76.175781 42.277344 C 75.980469 42.828125 75.460938 43.199219 74.875 43.199219 L 64.191406 43.199219 C 63.605469 43.199219 63.082031 42.828125 62.886719 42.277344 L 52.011719 11.546875 C 51.691406 10.640625 52.359375 9.695312 53.316406 9.695312 L 61.289062 9.695312 C 61.898438 9.695312 62.4375 10.09375 62.613281 10.679688 Z M 68.238281 29.226562 " />
                <path fill="currentColor" stroke="currentColor" d="M 123.523438 25.90625 C 123.523438 26.484375 123.5 27.074219 123.457031 27.679688 C 123.410156 28.378906 122.8125 28.910156 122.109375 28.910156 L 101.660156 28.910156 C 100.855469 28.910156 100.203125 29.601562 100.382812 30.390625 C 100.6875 31.765625 101.277344 32.875 102.140625 33.710938 C 103.339844 34.792969 104.796875 35.332031 106.511719 35.332031 C 108.742188 35.332031 110.378906 34.511719 111.421875 32.871094 C 111.710938 32.414062 112.1875 32.089844 112.726562 32.089844 L 120.964844 32.089844 C 121.867188 32.089844 122.527344 32.945312 122.203125 33.792969 C 121.613281 35.324219 120.777344 36.738281 119.691406 38.035156 C 118.253906 39.796875 116.4375 41.179688 114.238281 42.179688 C 112.042969 43.179688 109.589844 43.679688 106.875 43.679688 C 103.597656 43.679688 100.683594 42.980469 98.128906 41.578125 C 95.574219 40.175781 93.578125 38.175781 92.140625 35.574219 C 90.703125 32.972656 89.984375 29.929688 89.984375 26.445312 C 89.984375 22.964844 90.683594 19.921875 92.078125 17.320312 C 93.515625 14.71875 95.515625 12.714844 98.070312 11.316406 C 100.625 9.914062 103.558594 9.214844 106.875 9.214844 C 110.105469 9.214844 112.980469 9.894531 115.496094 11.253906 C 118.011719 12.617188 119.96875 14.558594 121.367188 17.078125 C 122.804688 19.601562 123.523438 22.542969 123.523438 25.90625 Z M 111.65625 23.203125 C 112.421875 23.203125 113.0625 22.574219 112.90625 21.828125 C 112.664062 20.695312 112.113281 19.753906 111.246094 19 C 110.046875 17.960938 108.550781 17.441406 106.753906 17.441406 C 105.035156 17.441406 103.578125 17.941406 102.382812 18.941406 C 101.578125 19.636719 100.984375 20.535156 100.601562 21.636719 C 100.324219 22.441406 100.988281 23.203125 101.835938 23.203125 Z M 111.65625 23.203125 " />
                <path fill="currentColor" stroke="currentColor" d="M 137.785156 9.214844 C 138.546875 9.214844 139.167969 9.835938 139.167969 10.601562 L 139.167969 41.8125 C 139.167969 42.578125 138.546875 43.199219 137.785156 43.199219 L 130.308594 43.199219 C 129.546875 43.199219 128.925781 42.578125 128.925781 41.8125 L 128.925781 10.601562 C 128.925781 9.835938 129.546875 9.214844 130.308594 9.214844 Z M 137.785156 9.214844 " />
                <path fill="currentColor" stroke="currentColor" d="M 163.847656 36.53125 C 164.613281 36.53125 165.230469 37.152344 165.230469 37.917969 L 165.230469 42.332031 C 165.230469 43.097656 164.613281 43.71875 163.847656 43.71875 L 160.035156 43.71875 C 156.328125 43.71875 153.441406 42.976562 151.367188 41.488281 C 149.296875 39.96875 148.261719 37.503906 148.261719 34.101562 L 148.261719 27.902344 C 148.261719 27.136719 147.640625 26.515625 146.878906 26.515625 L 145.582031 26.515625 C 144.816406 26.515625 144.199219 25.894531 144.199219 25.128906 L 144.199219 19.992188 C 144.199219 19.226562 144.816406 18.605469 145.582031 18.605469 L 146.878906 18.605469 C 147.640625 18.605469 148.261719 17.984375 148.261719 17.21875 L 148.261719 10.699219 C 148.261719 9.929688 148.878906 9.308594 149.644531 9.308594 L 157.097656 9.308594 C 157.859375 9.308594 158.480469 9.929688 158.480469 10.699219 L 158.480469 17.21875 C 158.480469 17.984375 159.097656 18.605469 159.863281 18.605469 L 163.847656 18.605469 C 164.613281 18.605469 165.230469 19.226562 165.230469 19.992188 L 165.230469 25.128906 C 165.230469 25.894531 164.613281 26.515625 163.847656 26.515625 L 159.863281 26.515625 C 159.097656 26.515625 158.480469 27.136719 158.480469 27.902344 L 158.480469 34.199219 C 158.480469 35.027344 158.71875 35.621094 159.195312 35.984375 C 159.675781 36.347656 160.472656 36.53125 161.585938 36.53125 Z M 163.847656 36.53125 " />
                <path fill="currentColor" stroke="currentColor" d="M 70.794085 16.695607 C 74.167248 15.062647 77.92148 14.443249 81.633371 14.893721 L 116.409412 19.074661 C 120.121303 19.525133 123.621489 21.031397 126.500674 23.410451 L 153.485979 45.736955 C 156.365165 48.116008 158.496326 51.283387 159.639532 54.844929 L 170.267113 88.207989 C 171.410319 91.769531 171.495001 95.584463 170.521159 99.188237 L 161.431966 133.015846 C 160.458124 136.61962 158.468099 139.88554 155.701823 142.391288 L 129.760928 165.928435 C 126.994652 168.434183 123.565034 170.095298 119.881371 170.714696 L 85.331148 176.500442 C 81.647484 177.105764 77.865025 176.655292 74.421294 175.177182 L 42.242164 161.367409 C 38.812547 159.889298 35.862793 157.453936 33.773972 154.356943 L 14.170108 125.34375 C 12.081287 122.246757 10.923968 118.600752 10.839286 114.870283 L 10.034807 79.860186 C 9.950126 76.11564 10.938081 72.44148 12.885765 69.245946 L 31.148833 39.359965 C 33.096517 36.164431 35.919248 33.602373 39.278297 31.969413 Z M 70.794085 16.695607 " transform="matrix(0.276771,0,0,0.277487,0,0)" />
                <path fill="currentColor" stroke="currentColor" d="M 25.144531 11.585938 C 26.191406 11.425781 27.265625 11.570312 28.234375 12.003906 L 33.097656 14.179688 C 34.066406 14.613281 34.894531 15.316406 35.472656 16.207031 L 38.394531 20.671875 C 38.976562 21.5625 39.289062 22.601562 39.296875 23.667969 L 39.34375 29.007812 C 39.355469 30.070312 39.058594 31.113281 38.492188 32.015625 L 35.652344 36.53125 C 35.085938 37.433594 34.273438 38.148438 33.3125 38.601562 L 28.488281 40.863281 C 27.527344 41.3125 26.457031 41.476562 25.40625 41.335938 L 20.125 40.621094 C 19.074219 40.480469 18.085938 40.035156 17.277344 39.347656 L 13.222656 35.886719 C 12.414062 35.195312 11.820312 34.289062 11.511719 33.269531 L 9.964844 28.160156 C 9.660156 27.140625 9.648438 26.054688 9.9375 25.03125 L 11.394531 19.894531 C 11.683594 18.871094 12.261719 17.953125 13.058594 17.25 L 17.050781 13.71875 C 17.847656 13.011719 18.828125 12.554688 19.878906 12.394531 Z M 25.144531 11.585938 " />
              </g>
            </svg> */}
            <img className="velt-logo velt-logo-header dark" src={'/static/velt-logo.png'} />
            <img className="velt-logo velt-logo-header light" src={'/static/velt-logo-light.png'} />
          </a>

        </div>
      </div>
      <div className={styles.mainWindow}>

        <div className={styles.sidebarContainer}>
          <Sidebar pageOpts={pageOpts} />
        </div>
        <div className={styles.pageContainer}>
          {props.children}
        </div>

      </div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="33px" viewBox="0 0 168 53" version="1.1">
                <g id="surface1">
                  <path fill="currentColor" stroke="currentColor" d="M 68.238281 29.226562 C 68.636719 30.539062 70.488281 30.539062 70.886719 29.226562 L 76.511719 10.679688 C 76.6875 10.09375 77.226562 9.695312 77.835938 9.695312 L 85.75 9.695312 C 86.707031 9.695312 87.375 10.640625 87.054688 11.546875 L 76.175781 42.277344 C 75.980469 42.828125 75.460938 43.199219 74.875 43.199219 L 64.191406 43.199219 C 63.605469 43.199219 63.082031 42.828125 62.886719 42.277344 L 52.011719 11.546875 C 51.691406 10.640625 52.359375 9.695312 53.316406 9.695312 L 61.289062 9.695312 C 61.898438 9.695312 62.4375 10.09375 62.613281 10.679688 Z M 68.238281 29.226562 " />
                  <path fill="currentColor" stroke="currentColor" d="M 123.523438 25.90625 C 123.523438 26.484375 123.5 27.074219 123.457031 27.679688 C 123.410156 28.378906 122.8125 28.910156 122.109375 28.910156 L 101.660156 28.910156 C 100.855469 28.910156 100.203125 29.601562 100.382812 30.390625 C 100.6875 31.765625 101.277344 32.875 102.140625 33.710938 C 103.339844 34.792969 104.796875 35.332031 106.511719 35.332031 C 108.742188 35.332031 110.378906 34.511719 111.421875 32.871094 C 111.710938 32.414062 112.1875 32.089844 112.726562 32.089844 L 120.964844 32.089844 C 121.867188 32.089844 122.527344 32.945312 122.203125 33.792969 C 121.613281 35.324219 120.777344 36.738281 119.691406 38.035156 C 118.253906 39.796875 116.4375 41.179688 114.238281 42.179688 C 112.042969 43.179688 109.589844 43.679688 106.875 43.679688 C 103.597656 43.679688 100.683594 42.980469 98.128906 41.578125 C 95.574219 40.175781 93.578125 38.175781 92.140625 35.574219 C 90.703125 32.972656 89.984375 29.929688 89.984375 26.445312 C 89.984375 22.964844 90.683594 19.921875 92.078125 17.320312 C 93.515625 14.71875 95.515625 12.714844 98.070312 11.316406 C 100.625 9.914062 103.558594 9.214844 106.875 9.214844 C 110.105469 9.214844 112.980469 9.894531 115.496094 11.253906 C 118.011719 12.617188 119.96875 14.558594 121.367188 17.078125 C 122.804688 19.601562 123.523438 22.542969 123.523438 25.90625 Z M 111.65625 23.203125 C 112.421875 23.203125 113.0625 22.574219 112.90625 21.828125 C 112.664062 20.695312 112.113281 19.753906 111.246094 19 C 110.046875 17.960938 108.550781 17.441406 106.753906 17.441406 C 105.035156 17.441406 103.578125 17.941406 102.382812 18.941406 C 101.578125 19.636719 100.984375 20.535156 100.601562 21.636719 C 100.324219 22.441406 100.988281 23.203125 101.835938 23.203125 Z M 111.65625 23.203125 " />
                  <path fill="currentColor" stroke="currentColor" d="M 137.785156 9.214844 C 138.546875 9.214844 139.167969 9.835938 139.167969 10.601562 L 139.167969 41.8125 C 139.167969 42.578125 138.546875 43.199219 137.785156 43.199219 L 130.308594 43.199219 C 129.546875 43.199219 128.925781 42.578125 128.925781 41.8125 L 128.925781 10.601562 C 128.925781 9.835938 129.546875 9.214844 130.308594 9.214844 Z M 137.785156 9.214844 " />
                  <path fill="currentColor" stroke="currentColor" d="M 163.847656 36.53125 C 164.613281 36.53125 165.230469 37.152344 165.230469 37.917969 L 165.230469 42.332031 C 165.230469 43.097656 164.613281 43.71875 163.847656 43.71875 L 160.035156 43.71875 C 156.328125 43.71875 153.441406 42.976562 151.367188 41.488281 C 149.296875 39.96875 148.261719 37.503906 148.261719 34.101562 L 148.261719 27.902344 C 148.261719 27.136719 147.640625 26.515625 146.878906 26.515625 L 145.582031 26.515625 C 144.816406 26.515625 144.199219 25.894531 144.199219 25.128906 L 144.199219 19.992188 C 144.199219 19.226562 144.816406 18.605469 145.582031 18.605469 L 146.878906 18.605469 C 147.640625 18.605469 148.261719 17.984375 148.261719 17.21875 L 148.261719 10.699219 C 148.261719 9.929688 148.878906 9.308594 149.644531 9.308594 L 157.097656 9.308594 C 157.859375 9.308594 158.480469 9.929688 158.480469 10.699219 L 158.480469 17.21875 C 158.480469 17.984375 159.097656 18.605469 159.863281 18.605469 L 163.847656 18.605469 C 164.613281 18.605469 165.230469 19.226562 165.230469 19.992188 L 165.230469 25.128906 C 165.230469 25.894531 164.613281 26.515625 163.847656 26.515625 L 159.863281 26.515625 C 159.097656 26.515625 158.480469 27.136719 158.480469 27.902344 L 158.480469 34.199219 C 158.480469 35.027344 158.71875 35.621094 159.195312 35.984375 C 159.675781 36.347656 160.472656 36.53125 161.585938 36.53125 Z M 163.847656 36.53125 " />
                  <path fill="currentColor" stroke="currentColor" d="M 70.794085 16.695607 C 74.167248 15.062647 77.92148 14.443249 81.633371 14.893721 L 116.409412 19.074661 C 120.121303 19.525133 123.621489 21.031397 126.500674 23.410451 L 153.485979 45.736955 C 156.365165 48.116008 158.496326 51.283387 159.639532 54.844929 L 170.267113 88.207989 C 171.410319 91.769531 171.495001 95.584463 170.521159 99.188237 L 161.431966 133.015846 C 160.458124 136.61962 158.468099 139.88554 155.701823 142.391288 L 129.760928 165.928435 C 126.994652 168.434183 123.565034 170.095298 119.881371 170.714696 L 85.331148 176.500442 C 81.647484 177.105764 77.865025 176.655292 74.421294 175.177182 L 42.242164 161.367409 C 38.812547 159.889298 35.862793 157.453936 33.773972 154.356943 L 14.170108 125.34375 C 12.081287 122.246757 10.923968 118.600752 10.839286 114.870283 L 10.034807 79.860186 C 9.950126 76.11564 10.938081 72.44148 12.885765 69.245946 L 31.148833 39.359965 C 33.096517 36.164431 35.919248 33.602373 39.278297 31.969413 Z M 70.794085 16.695607 " transform="matrix(0.276771,0,0,0.277487,0,0)" />
                  <path fill="currentColor" stroke="currentColor" d="M 25.144531 11.585938 C 26.191406 11.425781 27.265625 11.570312 28.234375 12.003906 L 33.097656 14.179688 C 34.066406 14.613281 34.894531 15.316406 35.472656 16.207031 L 38.394531 20.671875 C 38.976562 21.5625 39.289062 22.601562 39.296875 23.667969 L 39.34375 29.007812 C 39.355469 30.070312 39.058594 31.113281 38.492188 32.015625 L 35.652344 36.53125 C 35.085938 37.433594 34.273438 38.148438 33.3125 38.601562 L 28.488281 40.863281 C 27.527344 41.3125 26.457031 41.476562 25.40625 41.335938 L 20.125 40.621094 C 19.074219 40.480469 18.085938 40.035156 17.277344 39.347656 L 13.222656 35.886719 C 12.414062 35.195312 11.820312 34.289062 11.511719 33.269531 L 9.964844 28.160156 C 9.660156 27.140625 9.648438 26.054688 9.9375 25.03125 L 11.394531 19.894531 C 11.683594 18.871094 12.261719 17.953125 13.058594 17.25 L 17.050781 13.71875 C 17.847656 13.011719 18.828125 12.554688 19.878906 12.394531 Z M 25.144531 11.585938 " />
                </g>
              </svg> */}
              <img className="velt-logo velt-logo-footer dark" src={'/static/velt-logo.png'} />
              <img className="velt-logo velt-logo-footer light" src={'/static/velt-logo-light.png'} />
            </div>
            <div className={styles.socials}>
              <a href="https://twitter.com/veltjs" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5C21.5 15 16 21 9.00001 21C6.5881 21 4.17619 20.6768 2.28395 19.7706C1.85057 19.5631 2.01997 18.985 2.49942 18.9532C4.8295 18.7987 6.75771 18.2423 8.00001 17C2.58361 15.1945 1.64931 8.4995 2.6223 5.00719C2.73654 4.59713 3.26967 4.59499 3.48456 4.96246C5.14604 7.80371 8.30521 9.39003 12.2646 9.02396C12.0933 8.54804 12 8.03492 12 7.5C12 5.01472 14.0147 3 16.5 3C18.0182 3 19.3608 3.75182 20.1758 4.90346L21.8929 4.65815C22.3208 4.59703 22.6194 5.07087 22.3797 5.43047L21 7.5Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/veltjs/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8ZM7 10C6.44772 10 6 10.4477 6 11V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V11C8 10.4477 7.55228 10 7 10ZM12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V14C18 11.7909 16.2091 10 14 10C13.2346 10 12.5193 10.215 11.9114 10.5879C11.7544 10.2412 11.4054 10 11 10C10.4477 10 10 10.4477 10 11V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V14Z" fill="currentColor"/></svg>
              </a>
              <a href="https://discord.gg/GupvcYH27h" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3062 5.39992C17.9837 4.74593 16.5696 4.27064 15.0913 4C14.9097 4.34694 14.6976 4.81359 14.5514 5.18481C12.9798 4.93501 11.4228 4.93501 9.88016 5.18481C9.73394 4.81359 9.51701 4.34694 9.33383 4C7.85388 4.27064 6.43821 4.74767 5.11574 5.40338C2.4483 9.66378 1.72521 13.8184 2.08676 17.9139C3.85594 19.3104 5.57049 20.1586 7.25611 20.7137C7.67229 20.1083 8.04348 19.4648 8.36324 18.7865C7.75424 18.5419 7.17094 18.2401 6.6198 17.8897C6.76601 17.7752 6.90904 17.6555 7.04721 17.5323C10.4088 19.1941 14.0613 19.1941 17.3827 17.5323C17.5225 17.6555 17.6655 17.7752 17.8101 17.8897C17.2574 18.2418 16.6725 18.5436 16.0635 18.7882C16.3832 19.4648 16.7528 20.1101 17.1706 20.7155C18.8578 20.1604 20.574 19.3121 22.3432 17.9139C22.7674 13.1661 21.6185 9.04969 19.3062 5.39992ZM8.82122 15.3952C7.8121 15.3952 6.98454 14.3995 6.98454 13.1869C6.98454 11.9744 7.79443 10.9769 8.82122 10.9769C9.84803 10.9769 10.6756 11.9726 10.6579 13.1869C10.6595 14.3995 9.84803 15.3952 8.82122 15.3952ZM15.6087 15.3952C14.5996 15.3952 13.772 14.3995 13.772 13.1869C13.772 11.9744 14.5819 10.9769 15.6087 10.9769C16.6355 10.9769 17.4631 11.9726 17.4454 13.1869C17.4454 14.3995 16.6355 15.3952 15.6087 15.3952Z" fill="currentColor"/></svg>
              </a>
            </div>
            <div>
              <Switch onChange={() => {setDarkMode(!darkMode)}} size="sm" checked={darkMode === null ? false : darkMode} 
                iconOn={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                }
                iconOff={
                (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )
              }/>
            </div>
          </div>
          {/* <div className={styles.footerCenter}>
          </div>
          <div className={styles.footerRight}>
          </div> */}
        </div>
      </div>
    </div>
  );
}