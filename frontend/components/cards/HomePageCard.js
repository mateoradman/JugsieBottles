import Image from "next/image";


const HomePageCard = (props) => {
  return (
    <div
      className="custom-card relative">
      <div className="image-container shadow-2xl z-0">
        <Image
          src={props.cardImageSrc}
          layout="fill"
          alt={"Jugsie Bottles"}
          className="image rounded-3xl shadow-2xl"
          objectFit="cover"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mx-auto space-y-28">
        <span className="prose text-white font-bold capitalize text-xl">
          {props.cardBody}
        </span>
        <button
          className="btn btn-primary">
          <span className="card-button-text">
            {props.cardTitle}
          </span>
        </button>
      </div>
    </div>
  )
}

export default HomePageCard;