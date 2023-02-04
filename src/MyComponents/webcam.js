import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 200,
  facingMode: "user"
};

export const WebCam = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [button_status, SetbuttonClicked] = React.useState(false);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      SetbuttonClicked(false);

    },
    [webcamRef, setImgSrc]
  );
  const startWebCam = React.useCallback(
    () => {
      SetbuttonClicked(true);
    },

  );
  const saveDoc = React.useCallback(
    () => {
      setImgSrc(null);
    },

  );
  return (
    <>
      <div className="content">
        <div className="container">
          {button_status &&
            (
              <>
                <Webcam
                  audio={false}
                  height={200}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={400}
                  videoConstraints={videoConstraints}
                />
                <button onClick={capture}>Capture & Preview</button>
              </>
            )}

          <button onClick={startWebCam}>Face Camera</button>
          {imgSrc && (
            <>
              <img src={imgSrc} />
              <button className="mt-4" onClick={saveDoc}>Save</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};