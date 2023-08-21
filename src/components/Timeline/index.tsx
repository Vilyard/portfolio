import TimelineConnector from "@mui/lab/TimelineConnector";
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
  StyledTimelineLogoDot,
  StyledTimelineSeparator,
  StyledTimelineContent,
} from "@/styles";
import { Theme, useMediaQuery } from "@mui/material";

export const TimelineComponent: FC<ITimelineComponentProps> = ({ items }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const mappedText = items.map(
    ({ name, description, logoSrc, altText }, index) => (
      <StyledTimelineItem key={name}>
        <StyledTimelineSeparator>
          <StyledTimelineLogoDot
            color={index % 2 === 0 ? "primary" : "secondary"}
            variant={"outlined"}
          >
            {name && (
              <Image width={30} height={30} src={logoSrc} alt={altText} />
            )}
          </StyledTimelineLogoDot>
          {isMobile ? <TimelineConnector /> : null}
        </StyledTimelineSeparator>
        <StyledTimelineContent>
          <StyledSkillMappedData>
            <StyledSkillMappedName>{name}</StyledSkillMappedName>
            <StyledSkillMappedDescription>
              <StyledSkillList>
                {description.map((point) => (
                  <StyledSkillListItems key={point}>
                    <StyledTimelineListDot />
                    <StyledSkillListItemsText
                      disableTypography={true}
                      primary={point}
                    />
                  </StyledSkillListItems>
                ))}
              </StyledSkillList>
            </StyledSkillMappedDescription>
          </StyledSkillMappedData>
        </StyledTimelineContent>
      </StyledTimelineItem>
    )
  );

  return (
    <StyledTimeline position={isMobile ? "right" : "alternate-reverse"}>
      {mappedText}
    </StyledTimeline>
  );
};
