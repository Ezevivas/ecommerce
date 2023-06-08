import {
    TextInput,
    Select,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Switch,
    rem,
    createStyles,
  } from '@mantine/core';
  import {PriceInput} from '../Components/PriceInput';

  const useStyles = createStyles((theme) => ({
    root: {position: 'relative' },
    input: {height: rem(54), paddingTop: rem(18),},
    label: {position: 'absolute', pointerEvents: 'none', fontSize: theme.fontSizes.xs, paddingLeft: theme.spacing.sm, paddingTop: `calc(${theme.spacing.sm} / 2)`, zIndex: 1 }
    }));
  
  export function CreateProduct() {
    const { classes } = useStyles();
    return (
      <Container size={400} my={50} ml={10} mr={10}>
        <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}> Load Product </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Name" placeholder="Name Product" required mt="md" />
            <TextInput label="Description" placeholder="Description Product" required mt="md" />
            <PriceInput/>
            <TextInput label="Image" placeholder="File Url" required mt="md" />
            <TextInput label="Category" placeholder="Category Product" required mt="md" />
            <TextInput label="Stock" placeholder="Stock Product" required mt="md" />
            <TextInput label="Type" placeholder="Type Product" required mt="md" />
            <Select mt="md" mb='xl' withinPortal data={['Red', 'Black', 'White', 'Nature', 'etc']} placeholder="Pick one color" label="Color" classNames={{ label: 'colors' }} required  />
                 <Group position="center" mt={50}>
                     <Switch label="Editable" required/>
                 </Group>
            <Text align="left" mt={30} size='xl' sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 500 })}> Sizes </Text>
                 <Group position="apart" mt="md">
                    <TextInput label="Width" placeholder="inch" classNames={classes} required/>
                    <TextInput label="Height" placeholder="inch" classNames={classes} required/>
                 </Group>
            <Button fullWidth mt={50}> Create Product </Button>
        </Paper>
      </Container>
    );
  }