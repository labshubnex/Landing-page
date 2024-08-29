import BlogAndCase from "../custom/BlogAndCase";
import { blogsCardData } from "../../constants";

const Blogs = () => {
  return (
    <div className="w-full">
      <BlogAndCase
        title="Blogs"
        description="Explore the impact we've delivered"
        buttonText="View All"
        card={blogsCardData}
        cardNumber={3}
        isBlogs
      />
    </div>
  );
};

export default Blogs;
