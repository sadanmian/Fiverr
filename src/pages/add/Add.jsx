import React from "react";
import "./add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label>Title</label>
            <input
              type="text"
              placeholder="e.g. I will go something I'm really good at"
            />
            <label>Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label>Cover Image</label>
            <input type="file" name="" id="" />
            <label>Upload Images</label>
            <input type="file" multiple />
            <label>Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label>Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label>Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            ></textarea>
            <label>Delivery Time (e.g. 3 days)</label>
            <input type="number" name="" id="" min={1} />
            <label>Revision Number</label>
            <input type="number" name="" id="" min={1} />
            <label>Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label>Price</label>
            <input type="number" name="" id="" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
