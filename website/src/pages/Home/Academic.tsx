import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";

export const Academic = () => {
  return (
    <Section title={{ fr: "Ma formation", en: "My academic background" }}>
      <TableContainer>
        <Table variant="striped">
          <Thead width="auto">
            <Tr>
              <Th>
                <TextL>{{ fr: "Date", en: "Date" }}</TextL>
              </Th>
              <Th>
                <TextL>{{ fr: "Formation", en: "School" }}</TextL>
              </Th>
              <Th>
                <TextL>{{ fr: "Commentaire", en: "Remark" }}</TextL>
              </Th>
            </Tr>
          </Thead>
          <Tbody width="auto">
            <Tr>
              <Td whiteSpace="normal">2022 - ...</Td>
              <Td color="veryAccent" fontWeight="bold" whiteSpace="normal">
                Ecole polytechnique
              </Td>
              <Td whiteSpace="normal">
                <TextL>
                  {{
                    fr: "2ème année • Cycle ingénieur polytechnicien",
                    en: "Second year (Master 1) • France top-ranking engineering university",
                  }}
                </TextL>
              </Td>
            </Tr>
            <Tr>
              <Td whiteSpace="normal">2020 - 2022</Td>
              <Td whiteSpace="normal">
                <TextL>
                  {{
                    fr: "MPSI & MP* (Maths sup/Maths spé)",
                    en: "Preparatory classes (MPSI & MP*)",
                  }}
                </TextL>
              </Td>
              <Td whiteSpace="normal">
                <TextL>
                  {{
                    fr: "Au Lycée Marcelin Berthelot",
                    en: "At Lycée Marcelin Berthelot",
                  }}
                </TextL>
              </Td>
            </Tr>
            <Tr>
              <Td whiteSpace="normal">2020</Td>
              <Td whiteSpace="normal">
                <TextL>
                  {{
                    fr: "Baccalauréat Scientifique",
                    en: 'Scientific "Baccalauréat"',
                  }}
                </TextL>
              </Td>
              <Td whiteSpace="normal">
                <TextL>
                  {{
                    fr: "Mention Très Bien",
                    en: "High school leaving exams. With highest honors",
                  }}
                </TextL>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Section>
  );
};
