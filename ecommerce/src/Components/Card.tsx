import { IconShoppingCart, IconEdit, IconEditOff} from '@tabler/icons-react';
import { Card, Image, Text, ActionIcon, Group, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.xs,
    marginBottom: rem(2),
  },

  price: {
    display: 'block',
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  personizable: {
    position: 'absolute',
    top: theme.spacing.xs,
    left: rem(12),
  },

  footer: {
    marginTop: theme.spacing.xxs,
  },
}));

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  editable: boolean;
}

export function ArticleCard({ 
  image,
  title,
  description,
  price,
  editable,
  ...others
}: ArticleCardProps) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card withBorder radius="md" className={cx(classes.card)}>
      <Card.Section>
        <a>
          <Image src={image}/>
          <ActionIcon className={classes.personizable}>
          {editable ? (
           <IconEdit size="1rem" color={theme.colors.gray[6]} />
          ) : (
          <IconEditOff size="1rem" color={theme.colors.gray[6]} /> )
          }
            
          </ActionIcon>
        </a>
      </Card.Section>

      <Text className={classes.title} fw={500} component="a">
        {title}
      </Text>

      <Text fz="sm" color="dimmed" lineClamp={3}>
        {description}
      </Text>

      <Group position="right"  >
      <Text className={classes.price} fw={500} color="black">
        {price}
      </Text>
      </Group>

      <Group position="right" className={classes.footer}>
          <ActionIcon className={classes.action}>
          <IconShoppingCart size="1rem" color={theme.colors.blue[6]}/>
          </ActionIcon>
      </Group>
    </Card>
  );
}