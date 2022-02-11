import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profile from "./profile.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <section>
          <nav>
            <img src="pict.jpg" />
          </nav>
          <article>
            <h1>I'm a Developer</h1>
            <p>
              I am a ﬁnal year BSc Computer Science student at the University of
              the Western Cape and expect to complete my degree in December
              2022. I am currently left with one module to complete my degree
              which I am supposed do second semester. I have experience in tools
              such as Git, GitHub, Jupyter Notebook and Microsoft Project
              amongst others and have developed front-end and back-end in
              Windows and Linux environments using Python, Java, React and
              HTML.I also have a comfortable understanding of Software
              Engineering principles and practices and have worked in a team
              creating software. I am looking for opportunities in which I can
              learn new and relevant skills as I begin my career as a Software
              Developer.
            </p>
            <div>ICON</div>
            <div>
              <table>
                <tr>
                  <th>Occupation</th>
                  <th>Race</th>
                  <th>Languages</th>
                </tr>
                <tr>
                  <td>Developer</td>
                  <td>Black</td>
                  <td>English</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <th>Website</th>
                  <th>Experience</th>
                </tr>
                <tr>
                  <td>1997-12-18</td>
                  <td>www.wiska.com</td>
                  <td>Enrty level</td>
                </tr>
              </table>
            </div>
          </article>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
