import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="navbar bottom is-transparent">
        <div className="navbar-start">
          <a
            className="navbar-item has-text-weight-semibold"
            href="/datenschutz"
          >
            Datenschutzrichtlinie
          </a>
          <a className="navbar-item has-text-weight-semibold" href="/kontakt">
            Kontakt
          </a>
          <a className="navbar-item has-text-weight-semibold" href="/impressum">
            Impressum
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item field is-grouped">
            <p className="control">
              <a
                href="#"
                target="_blank"
                className="navbar-item"
                title="Besuche uns auf Facebook"
              >
                <span className="icon">
                  <svg
                    width="15"
                    height="22"
                    viewBox="0 0 15 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0847 13.5L13.7513 9.15656H9.58362V6.33797C9.58362 5.14969 10.1658 3.99141 12.0324 3.99141H13.9271V0.293438C13.9271 0.293438 12.2077 0 10.5638 0C7.13159 0 4.88815 2.08031 4.88815 5.84625V9.15656H1.073V13.5H4.88815V24H9.58362V13.5H13.0847Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </a>
            </p>
            <p className="control">
              <a
                href="#"
                target="_blank"
                className="navbar-item"
                title="Besuche uns auf Instagram"
              >
                <span className="icon">
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5047 6.60952C7.52346 6.60952 5.11878 9.01421 5.11878 11.9955C5.11878 14.9767 7.52346 17.3814 10.5047 17.3814C13.486 17.3814 15.8906 14.9767 15.8906 11.9955C15.8906 9.01421 13.486 6.60952 10.5047 6.60952ZM10.5047 15.497C8.57815 15.497 7.00315 13.9267 7.00315 11.9955C7.00315 10.0642 8.57346 8.4939 10.5047 8.4939C12.436 8.4939 14.0063 10.0642 14.0063 11.9955C14.0063 13.9267 12.4313 15.497 10.5047 15.497ZM17.3672 6.38921C17.3672 7.08765 16.8047 7.64546 16.111 7.64546C15.4125 7.64546 14.8547 7.08296 14.8547 6.38921C14.8547 5.69546 15.4172 5.13296 16.111 5.13296C16.8047 5.13296 17.3672 5.69546 17.3672 6.38921ZM20.9344 7.66421C20.8547 5.9814 20.4703 4.49077 19.2375 3.26265C18.0094 2.03452 16.5188 1.65015 14.836 1.56577C13.1016 1.46733 7.90315 1.46733 6.16878 1.56577C4.49066 1.64546 3.00003 2.02983 1.76722 3.25796C0.534411 4.48608 0.154724 5.97671 0.070349 7.65952C-0.0280883 9.3939 -0.0280883 14.5923 0.070349 16.3267C0.150036 18.0095 0.534411 19.5001 1.76722 20.7283C3.00003 21.9564 4.48597 22.3408 6.16878 22.4251C7.90315 22.5236 13.1016 22.5236 14.836 22.4251C16.5188 22.3455 18.0094 21.9611 19.2375 20.7283C20.4656 19.5001 20.85 18.0095 20.9344 16.3267C21.0328 14.5923 21.0328 9.39858 20.9344 7.66421ZM18.6938 18.1876C18.3281 19.1064 17.6203 19.8142 16.6969 20.1845C15.3141 20.733 12.0328 20.6064 10.5047 20.6064C8.97659 20.6064 5.69065 20.7283 4.31253 20.1845C3.39378 19.8189 2.68597 19.1111 2.31566 18.1876C1.76722 16.8048 1.89378 13.5236 1.89378 11.9955C1.89378 10.4673 1.77191 7.1814 2.31566 5.80327C2.68128 4.88452 3.38909 4.17671 4.31253 3.8064C5.69534 3.25796 8.97659 3.38452 10.5047 3.38452C12.0328 3.38452 15.3188 3.26265 16.6969 3.8064C17.6156 4.17202 18.3234 4.87983 18.6938 5.80327C19.2422 7.18608 19.1156 10.4673 19.1156 11.9955C19.1156 13.5236 19.2422 16.8095 18.6938 18.1876Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </a>
            </p>
            <p className="control">
              <a
                href="#"
                target="_blank"
                className="navbar-item"
                title="Schreib uns auf Telegram"
              >
                <span className="icon">
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9393 4.62195L17.7705 19.5657C17.5315 20.6204 16.908 20.8829 16.0221 20.386L11.194 16.8282L8.86427 19.0688C8.60646 19.3266 8.39084 19.5423 7.89396 19.5423L8.24084 14.6251L17.1893 6.53914C17.5783 6.19226 17.1049 6.00008 16.5846 6.34695L5.52209 13.3126L0.759586 11.822C-0.276351 11.4985 -0.295102 10.786 0.975211 10.2891L19.6033 3.11258C20.4658 2.78914 21.2205 3.30476 20.9393 4.62195V4.62195Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </a>
            </p>
            <p className="control">
              <a
                href="#"
                target="_blank"
                className="navbar-item"
                title="Schreib uns auf WhatsApp"
              >
                <span className="icon">
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8547 4.55156C15.8906 2.58281 13.275 1.5 10.4953 1.5C4.75781 1.5 0.0890625 6.16875 0.0890625 11.9062C0.0890625 13.7391 0.567188 15.5297 1.47656 17.1094L0 22.5L5.51719 21.0516C7.03594 21.8813 8.74688 22.3172 10.4906 22.3172H10.4953C16.2281 22.3172 21 17.6484 21 11.9109C21 9.13125 19.8187 6.52031 17.8547 4.55156V4.55156ZM10.4953 20.5641C8.93906 20.5641 7.41562 20.1469 6.08906 19.3594L5.775 19.1719L2.50313 20.0297L3.375 16.8375L3.16875 16.5094C2.30156 15.1313 1.84688 13.5422 1.84688 11.9062C1.84688 7.13906 5.72812 3.25781 10.5 3.25781C12.8109 3.25781 14.9812 4.15781 16.6125 5.79375C18.2437 7.42969 19.2469 9.6 19.2422 11.9109C19.2422 16.6828 15.2625 20.5641 10.4953 20.5641V20.5641ZM15.2391 14.0859C14.9813 13.9547 13.7016 13.3266 13.4625 13.2422C13.2234 13.1531 13.05 13.1109 12.8766 13.3734C12.7031 13.6359 12.2063 14.2172 12.0516 14.3953C11.9016 14.5688 11.7469 14.5922 11.4891 14.4609C9.96094 13.6969 8.95781 13.0969 7.95 11.3672C7.68281 10.9078 8.21719 10.9406 8.71406 9.94687C8.79844 9.77344 8.75625 9.62344 8.69062 9.49219C8.625 9.36094 8.10469 8.08125 7.88906 7.56094C7.67813 7.05469 7.4625 7.125 7.30313 7.11563C7.15313 7.10625 6.97969 7.10625 6.80625 7.10625C6.63281 7.10625 6.35156 7.17188 6.1125 7.42969C5.87344 7.69219 5.20312 8.32031 5.20312 9.6C5.20312 10.8797 6.13594 12.1172 6.2625 12.2906C6.39375 12.4641 8.09531 15.0891 10.7062 16.2188C12.3562 16.9312 13.0031 16.9922 13.8281 16.8703C14.3297 16.7953 15.3656 16.2422 15.5812 15.6328C15.7969 15.0234 15.7969 14.5031 15.7313 14.3953C15.6703 14.2781 15.4969 14.2125 15.2391 14.0859Z"
                      fill="currentcolor"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
