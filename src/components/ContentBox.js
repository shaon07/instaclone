/* eslint-disable jsx-a11y/img-redundant-alt */

import Posts from "./Posts";
import SliderIcon from "./SliderIcon";
import SliderMenu from "./SliderMenu";

const ContentBox = () => {
  return (
    <main className="main-container">
      <section className="content-container">
        <div className="content">
          <div className="stories">
            <SliderIcon />

            <Posts />
          </div>
          <SliderMenu />
        </div>
      </section>
    </main>
  );
};

export default ContentBox;
