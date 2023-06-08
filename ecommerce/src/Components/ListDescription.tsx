import React from "react";
import { createStyles, rem, Group, Text, ActionIcon } from "@mantine/core";
import { IconCash, IconEdit, IconEditOff, IconToolsKitchen2, IconGlassFull, IconChefHat, IconRulerMeasure, IconClubs, IconRecycle, IconPlant2, IconFlower, IconCircleFilled, IconCircle, IconDropCircle, } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  table: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.white,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: theme.radius.md,
    [theme.fn.smallerThan("md")]: {
      flexDirection: 'initial',
      transform: 'scale(1.05)',
      transition: 'all 1s ease-in-out',
    },
  },
  text: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(20),
   // padding: rem(10),
    textAlign: 'center',  
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(15),
    },
    '&': {
      transition: 'all 1s ease-in-out',
      marginTop: rem(30),
      fontSize: rem(20),
     
    },
  },
  icon: {
    position: 'absolute',
    top: rem(45),
    alignContent: "center",
    '&': { 
        transition: 'all 1s ease-in-out',
        top: rem(10),
    },
  },
  item: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.white,
    borderRadius: theme.radius.md,
    height: "80px",
    width: "100px",
    display: 'flex',
    alignItems: "center",
    position: 'relative',
    [theme.fn.smallerThan("md")]: {
      flexDirection: 'initial',
      transform: 'scale(0.9)',
    },
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  fill: {

  },

}));

interface ListDescriptionProps {
  description: {
    price: number;
    editable: boolean;
    category: string;
    fabricType: string;
    fabricColors: string;
    size: {
      width: number;
      height: number;
    };
  };
}

const ListDescription = ({ description }: ListDescriptionProps) => {
  const { classes } = useStyles();

  const renderCategory = () => {
    switch (description.category) {
      case "COCKTAILS":
        return <IconGlassFull/>;
      case "LUNCHEON":
        return <IconToolsKitchen2/>;
      case "DINNER":
        return <IconChefHat/>;
      default:
        return <IconChefHat/>;
    }
  };

  const renderFabricType = () => {
    switch (description.fabricType) {
      case "COTTON":
        return <IconClubs/>;
      case "RECYCLED":
        return <IconRecycle/>;
      case "LINEN":
        return <IconPlant2/>;
      default:
        return <IconFlower/>;
    }
  };

  const renderFabricColors = () => {
    switch (description.fabricColors) {
      case "WHITE":
        return <ActionIcon variant="transparent"><IconCircle/></ActionIcon>;
      case "BLUE":
        return <ActionIcon variant="transparent" color="blue"><IconCircleFilled /></ActionIcon>;
      case "CYAN":
        return <ActionIcon variant="transparent" color="cyan"><IconCircleFilled/></ActionIcon>;
      case "TEAL":
        return <ActionIcon variant="transparent" color="teal"><IconCircleFilled/></ActionIcon>;
      case "GRAY":
        return <ActionIcon variant="transparent"><IconCircleFilled/></ActionIcon>;
      case "BLACK":
        return <ActionIcon variant="transparent" color="dark"><IconCircleFilled/></ActionIcon>;
      case "RED":
        return <ActionIcon variant="transparent" color="red"><IconCircleFilled/></ActionIcon>;
      case "PINK":
        return <ActionIcon variant="transparent" color="pink"><IconCircleFilled/></ActionIcon>;
      case "PURPLE":
        return <ActionIcon variant="transparent" color="grape"><IconCircleFilled/></ActionIcon>;
      case "VIOLET":
        return <ActionIcon variant="transparent" color="violet"><IconCircleFilled/></ActionIcon>;
      case "INDIGO":
        return <ActionIcon variant="transparent" color="indigo"><IconCircleFilled/></ActionIcon>;
      case "GREEN":
        return <ActionIcon variant="transparent" color="green"><IconCircleFilled/></ActionIcon>;
      case "LIME":
        return <ActionIcon variant="transparent" color="lime"><IconCircleFilled/></ActionIcon>;
      case "YELLOW":
        return <ActionIcon variant="transparent" color="yellow"><IconCircleFilled/></ActionIcon>;
      default:
        return <ActionIcon variant="subtle"><IconDropCircle/></ActionIcon>;
    }
  };

  return (
    <Group className={classes.table}>
      <div id="one" className={classes.fill}> 
      <div className={classes.item}>
        <Text className={classes.text} fz="lg" tt="lowercase" fw={600} c="dimmed">
          {description.category}
          <div className={classes.icon}>
          <ActionIcon   radius="xl" variant="outline">
          {renderCategory()}
           </ActionIcon>
           </div>
        </Text>
      </div>
      

 
      <div className={classes.item}>
        <Text className={classes.text} fz="lg" tt="lowercase" fw={600} c="dimmed">
          {description.fabricType}
          <div className={classes.icon}>
          <ActionIcon   radius="xl" variant="outline">
          {renderFabricType()}
           </ActionIcon>
           </div>
        </Text>
      </div>
      </div>
      <div id="two" className={classes.fill}>
      <div className={classes.item}>
        <Text className={classes.text} fz="lg" tt="lowercase" fw={600} c="dimmed">
          {description.fabricColors}
          <div className={classes.icon}>
          {renderFabricColors()}
           </div>
        </Text>
      </div>

      <div className={classes.item}>
        <Text className={classes.text} fz="lg" tt="lowercase" fw={600} c="dimmed">
          {description.size.width} x {description.size.height}
          <div className={classes.icon}>
          <ActionIcon   radius="xl" variant="outline">
          <IconRulerMeasure />
           </ActionIcon>
           </div>
        </Text>
      </div>
      </div>

      <div id="three" className={classes.fill}>
      <div className={classes.item}>
        <Text className={classes.text} fz="lg" tt="lowercase" fw={600} c="dimmed">
          $ {description.price}
          <div className={classes.icon}>
          <ActionIcon   radius="xl" variant="outline">
          <IconCash />
          </ActionIcon>
           </div>
        </Text>
      </div>

      
      <div className={classes.item}>
      <Text className={classes.text} fz='xs' tt="lowercase" fw={600} c="dimmed">
        {description.editable ? 'custom' : 'no custom'}
        <div className={classes.icon}>
        <ActionIcon   radius="xl" variant="outline">
        {description.editable ? <IconEdit /> : <IconEditOff />}
         </ActionIcon>
         </div>
      </Text>
    </div>
      
      </div>
    </Group>

  );
};

export default ListDescription;