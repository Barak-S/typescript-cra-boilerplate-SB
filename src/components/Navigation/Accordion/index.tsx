import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { Title } from 'components/Common'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import NavigationAccordionIcon from './components/Icon'
import { colors, ms, StyleProps, Styles, useHover } from 'styles'

interface Props extends StyleProps {
  id: string;
  title: string;
  expanded: boolean;
  onChange?: (newExpanded: boolean) => void;
}

const ControlledAccordion: FC<Props> = ({ id, expanded, title, onChange, children, style }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(isOpen)
  }, [expanded])

  const handleChange = (event: ChangeEvent<{}>, isExpanded: boolean) => {
    setIsOpen(isExpanded)
    onChange && onChange(isExpanded)
  }

  const { hover, hoverProps } = useHover();
  const styles = getStyles(isOpen);

  return (
    <Accordion style={ms(styles.container, style)} expanded={isOpen} onChange={(e) => handleChange(e, !isOpen)}>
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        style={isOpen ? styles.expandedHeader : styles.header}
        expandIcon={<NavigationAccordionIcon hovered={hover} expanded={isOpen} />}
        {...hoverProps}
      >
        <Title type="h4" style={styles.title}>
          {title}
        </Title>
      </AccordionSummary>
      <AccordionDetails style={styles.details}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

const getStyles = (expanded: boolean): Styles => ({
  container: {
    background: expanded ? colors.white : `linear-gradient(90deg, ${colors.paleGrey}, ${colors.lightPeriwinkle})`,
    borderRadius: 12,
    boxShadow: 'none',
    marginBottom: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 76,
    color: colors.textGray,
  },
  expandedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 76,
    color: colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export type AccordionProps = Props
export default ControlledAccordion
