const ClothesList = (props) => {
  return (
    <div className="grid">
      {props.clothing.map((clothing) => (
        <div key={clothing.id} className="card">
          <img src={`${clothing.image}`} alt="poster" />
          <h3>{clothing.title}</h3>
          <button>View Clothing</button>
        </div>
      ))}
    </div>
  )
}

export default ClothesList
