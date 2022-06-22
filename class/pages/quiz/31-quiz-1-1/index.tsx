import LazyLoad from "react-lazy-load";

export default function index() {
  return (
    <div>
      Scroll to load
      <div>
        <LazyLoad height={762} offsetVertical={300}>
          <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height={683} offsetTop={200}>
          <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height={480} offsetHorizontal={50}>
          <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad
          height={720}
          onContentVisible={() =>
            console.log("look ma I have been lazyloaded!")
          }
        >
          <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad
          height={720}
          onContentVisible={() =>
            console.log("look ma I have been lazyloaded!")
          }
        >
          <img src="https://cdn.pixabay.com/photo/2022/05/13/15/46/flower-7194038__340.jpg" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad
          height={720}
          onContentVisible={() =>
            console.log("look ma I have been lazyloaded!")
          }
        >
          <img src="https://cdn.pixabay.com/photo/2022/06/13/12/19/sea-7259914__340.jpg" />
        </LazyLoad>
      </div>
    </div>
  );
}
