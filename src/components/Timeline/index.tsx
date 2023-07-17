import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Image from "next/image";
import { FC } from "react";
import { ITimelineComponentProps } from "./types";
import {
  StyledSkillMappedData,
  StyledSkillMappedName,
  StyledSkillMappedDescription,
  StyledSkillList,
  StyledSkillListItems,
  StyledSkillListItemsText,
  StyledTimeline,
  StyledTimelineItem,
  StyledTimelineListDot,
  StyledTimelineListIcon,
  StyledTimelineLogoDot,
  StyledTimelineSeparator,
} from "@/styles";

export const TimelineComponent: FC<ITimelineComponentProps> = ({ items }) => {
  const mappedText = items.map(
    ({ name, description, logoSrc, altText }, index) => (
      <StyledTimelineItem key={name}>
        <StyledTimelineSeparator>
          <StyledTimelineLogoDot
            color={index % 2 === 0 ? "primary" : "secondary"}
          >
            {name && (
              <Image width={30} height={30} src={logoSrc} alt={altText} />
            )}
          </StyledTimelineLogoDot>
          <TimelineConnector />
        </StyledTimelineSeparator>
        <TimelineContent>
          <StyledSkillMappedData>
            <StyledSkillMappedName>{name}</StyledSkillMappedName>
            <StyledSkillMappedDescription>
              <StyledSkillList>
                {description.map((point) => (
                  <StyledSkillListItems key={point}>
                    <StyledTimelineListIcon>
                      <StyledTimelineListDot />
                    </StyledTimelineListIcon>
                    <StyledSkillListItemsText primary={point} />
                  </StyledSkillListItems>
                ))}
              </StyledSkillList>
            </StyledSkillMappedDescription>
          </StyledSkillMappedData>
        </TimelineContent>
      </StyledTimelineItem>
    )
  );

  return <StyledTimeline position="alternate">{mappedText}</StyledTimeline>;
};
