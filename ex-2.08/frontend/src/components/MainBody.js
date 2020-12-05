import React from "react";
import { Header, Segment, Image, Button } from "semantic-ui-react";

const square = { width: 175, height: 175 };

const MainBody = ({ menu }) => {
  if (menu.activeItem !== "home") return <></>;

  return (
    <div>
      <Segment floated="left" style={{ height: 175 }}>
        <Header as="h2">
          If you see this page, then you have completed the first step.
          <Header.Subheader>Congrats!!</Header.Subheader>
          <Button
            style={{ margin: 10 }}
            color="black"
            onClick={() => {
              alert("test completed !");
            }}
          >
            test
          </Button>
        </Header>
      </Segment>
      <Segment circular floated="right" style={square}>
        <Image
          src="https://res.cloudinary.com/aldahdouh/image/upload/v1599993771/edustats/jyssdhpqszdpymr9mrb1.jpg"
          as="a"
          size="small"
          href="https://www.linkedin.com/in/alaa-al-dahdouh-7158196a/"
          target="_blank"
        />
      </Segment>
    </div>
  );
};

export default MainBody;
