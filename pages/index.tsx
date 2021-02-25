import { HomeProps } from "./Home.d"

import Card     from "@components/Card"
import Grid     from "@components/Grid"
import Avatar   from "@components/Avatar"

const topCards = [{
  id: 1,
  icon: '',
  title: "+ 12.58%",
  footer: "0.82% since last week"
},
{
  id: 2,
  icon: '',
  title: "45,254",
  footer: "10.51% since last week"
},
{
  id: 3,
  icon: '',
  title: "5,643",
  footer: "6.24% since last week"
},
{
  id: 4,
  icon: '',
  title: "$34,152",
  footer: "2.65% since last week",
  progress: 'role="progressbar aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}'
},
]

const BOOKMARK_TITLE = "Hello there!"
const BOOKMARK_DESCRIPTION = "Discover this UI dashboard framework that will help speed up your next web application project."

const renderTopCards = () => {
  return <>
    {topCards.map(card => {
      return (
        <Card
          key={card.id}
          >
            <h3>{card.title}</h3>
            <span>{card.footer}</span>
            <div 
              style={{
                  background: 'darkBlue',
                  width: '56%',
                  height: '.25rem'
              }}
              {...card.progress}
              >
            </div>
          </Card>
      )})}
    </>
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
        <h2>{BOOKMARK_TITLE}</h2>
        <p>{BOOKMARK_DESCRIPTION}</p>
        <Grid 
          columns="repeat(auto-fit, minmax(240px, 1fr));" 
          gridGap="20px"
        >
          {renderTopCards()}
        </Grid>
        <Card
           mt={3}
        >
          <div>
            <Avatar 
              img="/img/anna.jpg"
            />
            <Avatar
            img="/img/maria.jpg"
          />
          <Avatar 
            img="/img/kevin.jpg"
          />
          </div>
        </Card>
    </>
  )
}

export default Home