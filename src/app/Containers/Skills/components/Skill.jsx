export default function Skill ({name, children}){

  const classStyle = name.toLowerCase()

  return(
    <div className={`skill-card ${classStyle}`}>
      {children}
      <p>{name}</p>
    </div>
  )
}