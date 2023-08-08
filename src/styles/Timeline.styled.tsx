import {
  Timeline,
  TimelineContent,
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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: 0,
  "&.MuiTimelineItem-root:before": {
    padding: 2,
    flex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    "&.MuiTimelineItem-root:before": {
      display: "none",
    },
  },
}));

export const StyledTimelineSeparator = styled(TimelineSeparator)({});

export const StyledTimelineLogoDot = styled(TimelineDot)({});

export const StyledTimelineListIcon = styled(ListItemIcon)({});

export const StyledTimelineListDot = styled(FiberManualRecordIcon)(
  ({ theme }) => ({
    fontSize: "10px",
    marginRight: "5px",
    marginLeft: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5px",
      marginRight: "5px",
      marginLeft: "5px",
    },
  })
);

export const StyledTimeline = styled(Timeline)(({ theme }) => ({
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  width: "80%",
  padding: 0,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledSkillMappedName = styled(Typography)({});

export const StyledSkillMappedDescription = styled(Box)({
  width: "100%",
  overflow: "hidden",
  wordBreak: "break-word",
  display: "flex",
  flexDirection: "column",
});

export const StyledSkillList = styled(List)({});

export const StyledSkillListItems = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: 2,
    margin: "0 auto",
  },
}));

export const StyledSkillListItemsText = styled(ListItemText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginBottom: "4px",
    whiteSpace: "normal",
  },
}));
export const StyledSkillMappedData = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  margin: "0 auto",
  padding: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid black",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",
  },
}));
