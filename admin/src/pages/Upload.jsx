import "./upload.css";

const Upload = () => {
  let more_info = [
    {
      license: "CG Trade",
      formate: ["GLB", "FBX", "GLTF", "USDZ"],
      size: "223mb",
      texture: false,
      textures: 33,
      materials: 9,
      material: true,
      vertices: "23k",
      triangle: "233k",
      pbr: "metalness",
    },
  ];
  return (
    <section className="upload flex_box justify_between">
      <div className="upload_form round">
        <form action="" method="POST" className="flex_box flex_col">
          <div className="row file_input">
            <label htmlFor="asset">
              Choose Asset Files (.png, .jpg, .jpeg, .glb, .fbx)
            </label>
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .glb, .fbx"
              name="asset"
            />
          </div>

          <div className="row file_input">
            <label htmlFor="thumbnail">
              Choose Thumbnail Files (.png, .jpg, .jpeg)
            </label>
            <input type="file" accept=".png, .jpg, .jpeg" name="thumbnail" />
          </div>

          <div className="flex_box row">
            <input type="text" name="name" placeholder="Asset Name" />
          </div>

          <div className="flex_box row">
            <textarea
              name="des"
              placeholder="Asset description"
            ></textarea>
          </div>

          <div className="flex_box row">
            <div>
              <input type="radio" name="price_select" value="Paid" />
              <label htmlFor="Paid"> Paid</label>
            </div>

            <div className="ml-24">
              <input type="radio" name="price_select" value="free" />
              <label htmlFor="free"> Free</label>
            </div>
          </div>

          <div className="flex_box row">
            <input type="text" name="price" placeholder="Price" />
          </div>

          <div className="submit_btn">
            <input type="submit" value="submit" className="round" />
          </div>
        </form>
      </div>
      <div className="preview round">
        <h3>Preview</h3>
        <div className="preview_asset"></div>
        <div className="preview_info">
          <h3>Asset Name</h3>
          {more_info.map((item, index) => (
            <ul className="info_details" key={index}>
              <li className="flex_box justify_between">
                <strong>License:</strong> {item.license}
              </li>
              <li className="flex_box justify_between">
                <strong>Formats:</strong> {item.formate.join(", ")}
              </li>
              <li className="flex_box justify_between">
                <strong>Size:</strong> {item.size}
              </li>
              <li className="flex_box justify_between">
                <strong>Textures:</strong>{" "}
                {item.texture ? `${item.textures} textures` : "No"}
              </li>
              <li className="flex_box justify_between">
                <strong>Materials:</strong>{" "}
                {item.material ? `${item.materials} materials` : "No"}
              </li>
              <li className="flex_box justify_between">
                <strong>Vertices:</strong> {item.vertices}
              </li>
              <li className="flex_box justify_between">
                <strong>Triangles:</strong> {item.triangle}
              </li>
              <li className="flex_box justify_between">
                <strong>PBR:</strong> {item.pbr}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upload;
