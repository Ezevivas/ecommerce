import { Navbar, Group, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from './LinksGroup';

const mockdata = [
  {
    label: 'Size',
    icon: IconNotes,
    links: [
      { label: 'Cocktail (11 x 11 cm / 4.5" x 4.5")', link: '/size?cocktail1' },
      { label: 'Dinner (30 x 30 cm / 11.8" x 11.8")', link: '/size?cocktail2' },
      { label: 'Dinner (32 x 32 cm / 12.5" x 12.5")', link: '/size?dinner' },
      { label: 'Luncheon (20 x 20 cm / 7.8" x 7.8")', link: '/size?luncheon' },
      { label: 'Placemats (45 x 32 cm / 17.8" x 12.5")', link: '/size?placemats1' },
      { label: 'Placemats (48 x 32 cm / 19" x 12.5")', link: '/size?placemats2' },
    ],
  },
  {
    label: 'Fabric',
    icon: IconCalendarStats,
    links: [
      { label: 'Cotton', link: '/fabric?cotton' },
      { label: 'Linen', link: '/fabric?linen' },
      { label: 'Recycled Cotton', link: '/fabric?recyclecontton' },
    ],
  },
  { 
    label: 'Style', 
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Patterns', link: '/style?patterns' },
      { label: 'Solid Colors', link: '/style?solidcolors' },
    ],
  },
  { 
    label: 'Colors', 
    icon: IconFileAnalytics,
    links: [
      { label: 'Black', link: '/color?black' },
      { label: 'Blue', link: '/color?blue' },
      { label: 'Brown', link: '/color?brown' },
      { label: 'Green', link: '/color?green' },
      { label: 'Grey', link: '/color?grey' },
      { label: 'Orange', link: '/color?orange' },
      { label: 'Pink', link: '/color?pink' },
      { label: 'Purple', link: '/color?purple' },
      { label: 'Red', link: '/color?red' },
      { label: 'White', link: '/color?while' },
      { label: 'Yellow', link: '/color?yellow' },
    ],
 },
  { 
    label: 'Refine', 
    icon: IconAdjustments,
    links: [
      { label: 'Featured', link: '/refine?featured' },
      { label: 'Holidays', link: '/refine?holidays' },
      { label: 'New Arrivals', link: '/refine?newarrivals' },
      { label: 'On Sale', link: '/refine?onsale' },
   ],
 },
  {
    label: 'Availability',
    icon: IconLock,
    links: [
      { label: 'Available', link: '/' },
      { label: 'Sold Out', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function Filter() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <a>Shop by</a>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

    </Navbar>
  );
}