import { useParams } from "react-router"


export const HeroPage = () => {

  const { id } = useParams();


  return (
    <>
      <h1>Hero</h1>
    </>
  )
}
