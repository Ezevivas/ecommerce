import {ArticleCard} from "./Card";
import { SimpleGrid, Container } from '@mantine/core';


interface Props {
  articles: {
    image: string;
    title: string;
    description: string;
    price: string;
    editable: boolean;
  }[];
}

const Grid: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <Container>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 3 }]}>
          {articles?.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              description={article.description}
              price={article.price}
              editable={article.editable}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Grid;
