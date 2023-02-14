import { POSTER_PATH } from '../globals'

const ClothesList = (props) => {
  return (
    <div className="grid">
      {props.clothing.map((clothes) => (
        <div key={clothes.id} className="card">
          <img src={`${clothes.image}`} alt="poster" />
          <h3>{clothes.name}</h3>
          <button>View Clothes</button>
        </div>
      ))}
    </div>
  )
}

export default ClothesList
