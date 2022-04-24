import Image from "next/image";


const HomePageCard = (props) => {
  return (
    <div
      className="custom-card relative">
      <div className="image-container z-0">
        <Image
          src={props.cardImageSrc}
          layout="fill"
          alt={"Jugsie Bottles"}
          className="image shadow-2xl rounded-3xl"
          objectFit="cover"
        />
      </div>

      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center mx-auto space-y-28">
        {props.cardBody ?
          <span className="prose text-white font-bold capitalize text-xl">
            {props.cardBody}
          </span> : null
        }

        {props.cardTitle ?
          <button
            className="btn btn-primary">
          <span className="card-button-text">
            {props.cardTitle}
          </span>
          </button> : null
        }
      </div>
    </div>
  )
}

export default HomePageCard;