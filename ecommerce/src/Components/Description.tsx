import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },

    Container: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,
        backgroundColor: theme.white,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.black : theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));

  interface ArticleCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    editable: boolean;
  }
  
  export function HeroBullets({
    image,
    title,
    description,
    price,
    editable,
    ...others
  }: ArticleCardProps) {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                {title}
              </Title>
              <Text color="dimmed" mt="md">
                {description}
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  {price}
                </List.Item>

              </List>
              <Group mt={30}>
                {editable ? (
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                Custom
                </Button>
                  ) : (
                <Button radius="xl" size="md" className={classes.control}>
                Add to Carrier
                </Button>
                    )}
              </Group>

            </div>
            <Image src={image} radius={'md'} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }