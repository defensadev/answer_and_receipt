import { Document, Page, View, Text } from "@react-pdf/renderer";

export interface Props {
  caseNumber: string;
  plaintiffName: string;
  defendantName: string;
  defendantAddr: string;
  defendantCityStateZip: string;
  phoneNumber: string;
}

const Answer = ({
  caseNumber,
  plaintiffName,
  defendantName,
  defendantAddr,
  defendantCityStateZip,
  phoneNumber,
}: Props) => {
  const precinctPlace = `${caseNumber[2]}-${caseNumber[3]}`;

  return (
    <Document>
      <Page size="A4">
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}
          >
            {caseNumber}
          </Text>
          <View style={{ display: "flex", width: "100%" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text>{plaintiffName}</Text>
              <Text>Plaintiff</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/*<View
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <Text>§</Text>
                <Text style={{ marginLeft: 64 }}>
                  JUSTICE OF THE PEACE COURT
                </Text>
              </View>*/}
              <Text>
                §
                <Text style={{ marginLeft: 64 }}>
                  JUSTICE OF THE PEACE COURT
                </Text>
              </Text>
              <Text>§</Text>
              <Text>§</Text>
              <Text>§</Text>
              <Text>§</Text>
              <Text>§</Text>
              <Text>§</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Answer;
