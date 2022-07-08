/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import database from "../database/User";
import SinglePost from "./SinglePost";
const Posts = () => {
  return (
    <div className="posts">
      {database.map((item, ind) => {
        return (
          <SinglePost item={item} ind={ind}/>
        );
      })}
    </div>
  );
};

export default Posts;
