import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

export const StyledTimelineItem = styled(TimelineItem)({});

export const StyledTimelineSeparator = styled(TimelineSeparator)({});

export const StyledTimelineLogoDot = styled(TimelineDot)({});

export const StyledTimelineListIcon = styled(ListItemIcon)({});

export const StyledTimelineListDot = styled(TimelineDot)({
  color: "currentColor",
  fontSize: "10px",
});

export const StyledTimeline = styled(Timeline)({});

export const StyledSkillMappedName = styled(Typography)({});

export const StyledSkillMappedDescription = styled(Box)({});

export const StyledSkillList = styled(List)({});

export const StyledSkillListItems = styled(ListItem)({});

export const StyledSkillListItemsText = styled(ListItemText)({});

export const StyledSkillMappedText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const StyledSkillMappedData = styled(Box)({
  display: "flex",
  padding: 15,
  border: "2px solid black",
  flexDirection: "column",
  width: "100%",
});
