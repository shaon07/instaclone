import "../App2.css";
import database from "../database/User";
import Header from "./Header";
const SingleProfile = () => {
  return (
    <>
      <Header />
      <header>
        <div className="container">
          <div className="profile mt-5">
            <div className="profile-image">
              <img className="img-fluid shaonImage" src={database[0].profile} alt="" />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{database[0].name}</h1>

              <button className="btn profile-edit-btn">Edit Profile</button>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>

        <main>
          <div className=" container">
            <div className="row">
              {database[0].userPhotos.map((item, ind) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4 my-3 shaon"
                    tabIndex="0"
                    key={ind}
                  >
                    <img src={item} className="gallery-image" alt="" />

                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes">
                          <span className="visually-hidden">Likes:</span>
                          <i className="fas fa-heart" aria-hidden="true"></i> 56
                        </li>
                        <li className="gallery-item-comments">
                          <span className="visually-hidden">Comments:</span>
                          <i
                            className="fas fa-comment"
                            aria-hidden="true"
                          ></i>{" "}
                          2
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default SingleProfile;
