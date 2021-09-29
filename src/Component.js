import axios from "axios";
import React, { useState } from "react";
const Component = () => {
  const [picture, setPicture] = useState();
  const uploadPicture = (e) => {
    setPicture(e.target.files[0]);
  };

  function handlePicInput(event) {
    event.preventDefault();
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWYzOGJkNmE3YzMzOTU2NDEwNWIyZGY1OGQxYzA1YTRhOGJjYzdmYzhkOTRmOGMxZjdmZTc2NzBiMWUyMmM5ZTc3N2IxMTJiZDBkZjgzMjciLCJpYXQiOjE2MzI3MjA2NzQuNjU2NDYxLCJuYmYiOjE2MzI3MjA2NzQuNjU2NDY0LCJleHAiOjE2NjQyNTY2NzQuNjUzMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nJi6Qz9DYlamaaIwxLgkwvm6rSsqTHaur1VoAqndce0ST5cFAbFt4Z9-UdizNnWuXNAKlqVYE543TOvTMtC7bBPC1uRwFtJEvGWFSLYqoeJtObPnmmx9Og_CWQo9vLfpEuu9V3oIOsutdn88W3JPYz7Vmq0sH61qFuigCcymguFLkrEVfMja9zxciszPDztFTIYHrLH0oc0SdnuFbU49xPPtVwQk9fxJP8N46DjcC7ll5dz0fEK77_ED4Q2MDaKIkd60KculYhQ5X5oHLXh_D1NeJYRhsRwRMAvST21VwO-2BYCP0RTimGLxSG2-UgtVVlQIT2R4yHvMuP6d9P_65dmibf-MQDe1xdYljWDqGW0VzsR0Oy4issP_AfNVO100yz23rI7wpgrQgbt6U5s-HumZuMbHXy_RwRHYPBSdasBvoXSsATn-YhuEzz9MFaYmjdhkgEzVJpFThH51TO16FckbWE3rS-084GCRuLelqqF4K9ZaRGG6yLynDv-dhf11IruGz6wIyBeSLF3YrbxPk2XcwcpVM5fT0YhnZz8IqwuhS-VKRg3vrsUebD3SxAaFF2AECqYrqKUd_ELrV1kzff7mctYz7RZbIStLqrBVh8XKXDGTD6RzyVrSuWTNBwg73Q3Ibw93xzMtKYj7LROVPNXxL0UaFa4ABzNMsb62cCk";
    let images = picture;
    let fd = new FormData();
    fd.append("image", images);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    const data = axios
      .post(
        "https://puruliaproperties.com/api/v1/profile/updateprofileimage",
        fd
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(data);
  }
  return (
    <div className="content landing">
      <form onSubmit={handlePicInput}>
        <input type="file" name="image" onChange={uploadPicture} />
        <br />
        <br />
        <button type="submit" name="upload">
          Upload
        </button>
      </form>
    </div>
  );
};
export default Component;
