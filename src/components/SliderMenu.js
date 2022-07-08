/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import database from "../database/User";

const SliderMenu = () => {
  return (
    <>
      <section class="side-menu">
        <div class="side-menu__user-profile">
          <a
            href="/"
            target="_blank"
            class="side-menu__user-avatar"
            rel="noreferrer"
          >
            <img src={database[0].profile} alt="User Picture" />
          </a>
          <div class="side-menu__user-info">
            <a href="/" target="_blank" rel="noreferrer">
              {database[0].name}
            </a>
            <span>{database[0].name}</span>
          </div>
          <button class="side-menu__user-button">Switch</button>
        </div>

        <div class="side-menu__suggestions-section">
          <div class="side-menu__suggestions-header">
            <h2>Suggestions for You</h2>
            <button>See All</button>
          </div>
          <div class="side-menu__suggestions-content">
            {database.map((item, ind) => {
              return (
                <div class="side-menu__suggestion" key={ind}>
                  <a href="#" class="side-menu__suggestion-avatar">
                    <img
                      src={item.profile}
                      alt="User Picture"
                    />
                  </a>
                  <div class="side-menu__suggestion-info">
                    <a href="#">{item.name}</a>
                    <span>Followed by user1, user2 and 9 others</span>
                  </div>
                  <button class="side-menu__suggestion-button">Follow</button>
                </div>
              );
            })}
          </div>
        </div>

        <div class="side-menu__footer">
          <div class="side-menu__footer-links">
            <ul class="side-menu__footer-list">
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  About
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Help
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Press
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  API
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Jobs
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Privacy
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Terms
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Locations
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Top Accounts
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Hashtag
                </a>
              </li>
              <li class="side-menu__footer-item">
                <a class="side-menu__footer-link" href="#">
                  Language
                </a>
              </li>
            </ul>
          </div>

          <span class="side-menu__footer-copyright">
            &copy; 2021 instagram from facebook
          </span>
        </div>
      </section>
    </>
  );
};

export default SliderMenu;
