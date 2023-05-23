import { useState } from 'react';
import { Grommet, Nav, Anchor, Box, Header, Heading, DataTable, Meter, Text } from "grommet";
import { List, AddCircle } from 'grommet-icons';

const App = () => {
  const [navIndex, setNavIndex] = useState(0);

  const changeNavIndexState = (selectedIndex) => {
    setNavIndex(selectedIndex)
  }

  return (
    <Grommet full={true}
      theme={{
        global: {
          colors: { primary: "#617A55", secondary: "#FFF8D6", peachYellow: "#F7E1AE", etonBlue: "#A4D0A4" }
        }
      }}
    >
      <Header background={"primary"} pad={"small"}>
        <Box direction={"row"} align={"center"} gap={"small"} >
          <Heading margin={"none"} color={"secondary"} level={3}> {"React App Demo"} </Heading>
        </Box>
        <Nav direction={"row"} background={"primary"} pad={"small"} >
          <Anchor icon={<List />} hoverIndicator color={`${navIndex == 0 ? "secondary" : "peachYellow"}`} onClick={() => changeNavIndexState(0)} />
          <Anchor icon={<AddCircle />} hoverIndicator color={`${navIndex == 1 ? "secondary" : "peachYellow"}`} onClick={() => changeNavIndexState(1)} />
        </Nav>
      </Header>

      <Box background={"secondary"} flex={true} align={"start"} pad={{ top: "medium", bottom: "200px", left: "medium", right: "medium", }} elevation={"large"}>
        <Heading margin={"none"} color={"primary"} level={3}> {"Employee Detail"} </Heading>
        <DataTable
          background={{ header: "primary", body: ["etonBlue", "peachYellow"] }}
          border={true}
          fill={true}
          columns={[
            {
              property: 'emp_id',
              header: <Text color={"secondary"}>{'Emp Number'}</Text>,
            },
            {
              property: 'name',
              header: <Text color={"secondary"}>{'Name'}</Text>,
            },
            {
              property: 'mobile_number',
              header: <Text color={"secondary"}>{'Mobile Number'}</Text>,
            },
            {
              property: 'email_address',
              header: <Text color={"secondary"}>{'Email'}</Text>,
            },
            {
              property: 'department',
              header: <Text color={"secondary"}>{'Department'}</Text>,
            },
            {
              property: 'salary',
              header: <Text color={"secondary"}>{'Salary'}</Text>,
            },
          ]}
          data={[
            { name: 'Alan', emp_id: 20, mobile_number: 12132, email_address:"", department:"", salary: "" },
            { name: 'Bryan', emp_id: 30, mobile_number: 12132, email_address:"", department:"", salary: ""  },
            { name: 'Chris', emp_id: 40, mobile_number: 12132, email_address:"", department:"", salary: "" },
            { name: 'Eric', emp_id: 80, mobile_number: 12132, email_address:"", department:"", salary: "" },
          ]}
        />
      </Box>
    </Grommet>
  )
}

export default App;
