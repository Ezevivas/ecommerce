import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
  Overlay,
} from '@mantine/core';

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

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '50%',
      size: 'xs',
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  Container: {
    maxWidth: rem(900),
    width: rem(900),
  },

  hero: {
    height: rem(900),
    backgroundImage: 'url(https://images.unsplash.com/photo-1579101403194-24b242aa56e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)',
    paddingTop: 'calc(5% + 60px)',
    paddingBottom: 'calc(5% + 60px)',
    position: 'relative',
    '&:hover': {
      backgroundPosition: 'center center',
      transition: 'background-position 10000ms ease-in-out 0s',
    },
  },

  highlight: {
    position: 'relative',
    borderRadius: theme.radius.sm,
    padding: `${rem(0)} ${rem(0)}`,
    '&:hover': {
      color: theme.white,
      transition: 'color 2000ms ease-in-out 0.2s',
    },
  },
}));

export function HomeMain() {
  const { classes } = useStyles();
  return (
    <div  className={classes.hero}>
        <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, .65) 70%)"
        opacity={1}
        zIndex={0}
      />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Marca la diferencia con las<br />
              <span className={classes.highlight}>servilletas y manteles de algodon!</span>
            </Title>
            <Text fw={500}  mt="md">
            Todos nuestros productos están fabricados con fibras naturales. Recientemente estamos introduciendo con éxito algodones reciclados que obtenemos de proveedores locales.
            </Text>

              <Button color="dark"radius="xl" size="md" className={classes.control}>
                Portfolio
              </Button>

          </div>
          
        </div>
      </Container>
    </div>
  );
}