import React, { useState, useEffect } from "react";
interface CaseStudyProps {
  about: string;
  designer?: string;
  webpage?: any;
  direction?: string;
  number: number;
  video?: any;
  website?: string;
  showDetail?: boolean;
  tags: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  about,
  designer,
  webpage,
  direction,
  number,
  video,
  website,
  showDetail,
}) => {
  const [renderCaseStudy, setRenderCaseStudy] = useState<boolean>(true);

  // useEffect(() => {
  //   console.log(filterValues, "filter values");
  //   if (filterValues.length === 0) {
  //     setRenderCaseStudy(true);
  //   } else {
  //     // Check if any of the tags in CaseStudy match the filter values
  //     setRenderCaseStudy(tags.some((tag) => filterValues.includes(tag)));
  //   }
  // }, [tags, filterValues]);

  return (
    <article>
      <div className="number">
        <h2>No.</h2>
        <p className="font-thin">{number}</p>
      </div>

      {direction === "left" && webpage && (
        <a href={website} className="website-image large-column">
          <div className="website-image-container">
            <img className="website-image-image" src={webpage} alt="chorus" />
          </div>
        </a>
      )}
      {direction === "left" && video && (
        <a href={website} className="website-image  large-column-left">
          <div className="website-image-container">
            <video
              playsInline
              className="website-image-image"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </a>
      )}

      <div className="website-info large-column">
        <div className="website-info-about">
          <h2>About</h2>
          <p className="font-thin">{about}</p>

          {designer && (
            <>
              <h2>Designer</h2>
              <p className="font-thin">{designer}</p>
            </>
          )}
        </div>
        {showDetail && (
          <p className="font-thin show-detail">
            Show detail <span className="font-thin antialiased"> &#8594;</span>
          </p>
        )}
      </div>
      {direction === "right" && !video && (
        <a href={website} className="website-image  large-column-right">
          <div className="website-image-container">
            <img className="website-image-image" src={webpage} alt="chorus" />
          </div>
        </a>
      )}
      {direction === "right" && video && (
        <a href={website} className="website-image  large-column">
          <div className="website-image-container">
            <video
              className="website-image-image"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </a>
      )}
    </article>
  );
};

export default CaseStudy;
