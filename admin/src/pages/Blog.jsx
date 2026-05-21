import "./blog.css";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { FaUpload } from "react-icons/fa";

const Blog = () => {
  const editor = useRef(null);

  const [content, setContent] = useState("");

  // Editor Config
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start writing your blog...",
      // height: 210,
    }),
    []
  );

  return (
    <section className="create_blog round flex_box flex_col">
      <div className="poster round">
        <FaUpload />
      </div>

      <form
        action=""
        className="flex_box flex_col blog_inputs"
        method="post"
      >
        <input type="file" accept=".png, .jpg, .jpeg" name="poster" />

        <label htmlFor="title">Post Title</label>
        <input type="text" name="title" placeholder="Title" />

        <label htmlFor="category">Post Category</label>
        <input type="text" name="category" placeholder="Category" />

        <label htmlFor="content">Post Content</label>

        <div className="custom_editor">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Blog;