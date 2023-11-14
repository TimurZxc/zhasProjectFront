import React from 'react'
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SendOutlined } from "@mui/icons-material";
import { useTranslation } from 'react-i18next'


const QandA = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Accordion className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_1")}

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_2")}

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_3")}

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_4")}

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_4")}

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_5")}

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_5")}

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: 40 }} className='qanda'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={"#125599"} variant="h5">
            {t("Q&A.q_6")}

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Q&A.a_6")}

          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default QandA