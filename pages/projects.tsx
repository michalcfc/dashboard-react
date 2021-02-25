import { HomeProps } from "./Home.d"

import Card     from "@components/Card"
import Grid     from "@components/Grid"

const db = [{
  id: 1,
  name: "Project 1",
  link: "",
  img: ''
},
{
  id: 2,
  name: "Project 2",
  link: "",
  img: ''
},
{
  id: 3,
  name: "Project 3",
  link: "",
  img: ''
},
{
  id: 4,
  name: "Project 4",
  link: "",
  img: ''
},
{
  id: 5,
  name: "Project 5",
  link: "",
  img: ''
},
{
  id: 6,
  name: "Project 6",
  link: "",
  img: ''
},
{
  id: 7,
  name: "Project 7",
  link: "",
  img: ''
},
{
  id: 8,
  name: "Project 8",
  link: "",
  img: ''
}
]

const renderProducts = () => {
  return <>
    {db.map(product => {
      return (
        <Card
          key={product.id}
          img={product.img}
          body={product.name}
          product={product}
        />
      )})}
    </>
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Grid 
        columns="repeat(auto-fit, minmax(320px, 1fr));" 
        gridGap="20px">
        {renderProducts()}
      </Grid>
    </>
  )
}

export default Home