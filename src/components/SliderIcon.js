/* eslint-disable jsx-a11y/img-redundant-alt */
import database from "../database/User";
const SliderIcon = () => {
  return (
    <div className="stories__content">
      {database.map((item, ind) => {
        return (
          <button class="story story--has-story" key={ind}>
            <div class="story__avatar">
              <div class="story__border">
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <circle r="31" cy="32" cx="32" />
                  <defs>
                    <linearGradient
                      y2="0"
                      x2="1"
                      y1="1"
                      x1="0"
                      id="--story-gradient"
                    >
                      <stop offset="0" stop-color="#f09433" />
                      <stop offset="0.25" stop-color="#e6683c" />
                      <stop offset="0.5" stop-color="#dc2743" />
                      <stop offset="0.75" stop-color="#cc2366" />
                      <stop offset="1" stop-color="#bc1888" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="story__picture">
                <img
                  src={item.profile}
                  alt="User Picture"
                />
              </div>
            </div>
            <span class="story__user">{item.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SliderIcon;
