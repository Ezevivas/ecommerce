//import React from "react";
import { createStyles, Image, Title, Chip, Group, Text, Paper, rem, Button } from "@mantine/core";
import ListDescription from "./ListDescription";

const useStyles = createStyles((theme) => ({
  card: {
    borderRadius: theme.radius.md,
    position: 'relative',
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'initial',
  },

  content: {
    maxWidth: rem(350),
    marginRight: `calc(${theme.spacing.xl} * 3)`,
    marginLeft: `calc(${theme.spacing.xl} * 1)`,
    marginTop: `calc(${theme.spacing.xl} * 0.5)`,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },


  //39978
  Container: {
    maxWidth: rem(900),
    backgroundColor: theme.white,
    borderRadius: theme.radius.sm,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),   
    fontWeight: 900,
    marginBottom: rem(20),
   },

   description: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(14),
   },

  control: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    [theme.fn.smallerThan("sm")]: {
      size:"sm",
      marginRight: 1,
    },
    },
  button: {
    position: 'absolute',
    bottom: theme.spacing.xs,
    right: rem(12),
    [theme.fn.smallerThan("sm")]: {
      size:"sm",
      marginRight: 1,
    },
    },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "flex",
    },
  },
}));

interface ProductDetailCardProps {
  article: {
    image: string;
    title: string;
    description: string;
    price: number;
    editable: boolean;
    category: string;
    fabricType: string;
    fabricColors: string;
    size: {
      width: number;
      height: number;
    }
  }
}

export function DetailsProducts({ article }: ProductDetailCardProps) {
  const {classes} = useStyles();
  
  return (
    <Paper className={classes.card}>
      <div className={classes.content}>
        <Title className={classes.title}>{article.title}</Title>
        <Text className={classes.description} lineClamp={4}>{article.description}</Text>
        <Group mt={20}>
        <ListDescription description={article}/>
        </Group>
        

      </div>
      <Image src={article.image} radius="md" className={classes.image} />
      <Group className={classes.control}>
          {article.editable ? (
               <Chip checked={true} type="checkbox" size='xs' color="dark" variant='filled'>Custom Product</Chip>  
                  ) : (
                    <Chip checked={false} color="dark" size='xs' variant="filled">No Custom Product</Chip>
                    )}
        </Group>
        <Button color="dark" radius="xl" size="xs" className={classes.button}>
          Add to Cart
        </Button>
    </Paper>
  );
}