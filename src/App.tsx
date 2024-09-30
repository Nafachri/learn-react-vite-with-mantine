import "@mantine/core/styles.css";
import { Container, MantineProvider, Text } from "@mantine/core";
import { HeaderMegaMenu } from "./components/Header/HeaderMegaMenu";
import { LeadGrid } from "./components/Grid/LeadGrid";
import { FooterLinks } from "./components/Footer/FooterLinks";
import { TableSelection } from "./components/Table/TableSelection";
import { StatsGroup } from "./components/Stats/StatsGroup";
import { DropzoneButton } from "./components/Dropzone/DropzoneButton";
import { DragAndDrop } from "./components/DragAndDrop/DragAndDrop";
import { UserCardImage } from "./components/UserCard/UserCardImage";

export default function App() {
  return (
    <MantineProvider>
      <HeaderMegaMenu />
      <Container my={"md"}>
        <UserCardImage />
        <LeadGrid />
        <TableSelection />
        <StatsGroup />
        <DragAndDrop />
        <DropzoneButton />
      </Container>
      <FooterLinks />
    </MantineProvider>
  );
}
