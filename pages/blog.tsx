export interface BlogProps {
    
}

import Card from "@components/Card"
import Grid from "@components/Grid"

const articles = [
    {
        id: 1,
        img: 'img/bus.jpg',
        title: '12 best web development blogs to read and follow in 2020',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Mike',

    },
    {
        id: 2,
        img: 'img/dinner.jpg',
        title: '10 Tips for Junior Software Developers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Anna',

    },
    {
        id: 3,
        img: 'img/disco.jpg',
        title: 'Javascript tutorial',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Anna',
    },
    {
        id: 4,
        img: 'img/ocean.jpg',
        title: '12 best web development blogs to read and follow in 2020',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Mike',

    },
    {
        id: 5,
        img: 'img/forest.jpg',
        title: '10 Tips for Junior Software Developers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Anna',

    },
    {
        id: 6,
        img: 'img/train.jpg',
        title: 'Javascript tutorial',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Anna',
    },
    {
        id: 7,
        img: 'img/china.jpg',
        title: '12 best web development blogs to read and follow in 2020',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Mike',

    },
    {
        id: 8,
        img: 'img/bus.jpg',
        title: '10 Tips for Junior Software Developers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
        author: 'Anna',
    }
  ]

const Blog: React.FC<BlogProps> = () => {
    return (
        <Grid
            columns="repeat(auto-fit, minmax(320px, 1fr));" 
            gridGap="20px"
        >
            {articles.map(article => {
              return <Card
                    key={article.id}
                    img={article.img}
                    title={article.title}
                >
                    {article.desc}
                </Card>
            })}
        </Grid>
    )
}

export default Blog
