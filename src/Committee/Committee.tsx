import React, { useContext } from "react";
import "./Committee.css";
import { Box, Center, Text } from "@mantine/core";
import { NavBarContext } from "../App";

const Committee = () => {
  const committeeRef = useContext(NavBarContext);

  return (
    <div className="committee-outer-container">
      <Text
        fz="xl"
        fw="600"
        style={{
          marginLeft: "10%",
          marginBottom: "1rem",
        }}
        ref={committeeRef.committeeRef}
      >
        Committees
      </Text>
      <div>
        <Box className="committee-container">
          <Text className="committee-scientific-title">
            SCIENTIFIC COMMITTEE
          </Text>
          <Center>
            <Box className="committee-scientific-container">
              <Text>
                Christopher Cederroth -{" "}
                <em>Associate Professor, Kaolinska Institute,</em>
                Sweden
              </Text>
              <Text>
                Rilana Cima -{" "}
                <em>
                  Assistant Professor, Catholic University Leuven, Belgium{" "}
                </em>
              </Text>
              <Text>
                Hazel Goedhart -{" "}
                <em>Director, Tinnitus Hub, U.K./The Netherlands</em>
              </Text>
              <Text>
                Berthold Langguth -{" "}
                <em>
                  Professor of Psychiatry and Psychotherapy, University of
                  Regensburg, Germany
                </em>
              </Text>
              <Text>
                Sarah Michiels -{" "}
                <em>Assistant Professor, University Hasselt, Belgium</em>
              </Text>
              <Text>
                Anusha Mohan -{" "}
                <em>
                  Global Brain Health Fellow, Trinity College Dublin, Ireland
                </em>
              </Text>
              <Text>
                Winfried Schlee -{" "}
                <em>
                  Scientific Coordinator of Tinnitus Research Initiative,
                  University of Regensburg, Germany
                </em>
              </Text>
              <Text>
                William Sedley -{" "}
                <em>
                  Academic Clinical Lecturer, Newcastle University, United
                  Kingdom
                </em>
              </Text>
              <Text>
                Jae-Jin Song -{" "}
                <em>
                  Professor of Neuro-otology, Seoul National University Bundang
                  Hospital, South Korea
                </em>
              </Text>
              <Text>
                Sven Vanneste -{" "}
                <em>
                  Professor of Neuroscience, Trinity College Dublin, Ireland
                </em>
              </Text>
              <Text>
                Nathan Weisz-{" "}
                <em>
                  Professor of Physiological Psychology, University of Salzberg,
                  Austria
                </em>
              </Text>
            </Box>
          </Center>

          <Text className="committee-programme-title">PROGRAMME COMMITTEE</Text>
          <Box className="committee-programme-container">
            <Text>
              Elva Arulchelvan, Gabriel Byczynski, Feifan Chen, Yvette
              Grootjans, Colum Ó Sé, Susanne Staudinger
            </Text>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Committee;
