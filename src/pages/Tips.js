import "./Tips.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Tips() {
  return (
    <div className="tips-page">
      <div className="text-left">
        <div className="title-page">Tips and Tricks</div>
        <div className="title-tips">
          We've compiled this list of tips to make <br /> every time in the
          kitchen a successful one. Check ‘em out!
        </div>

        <div className="two-accordions">
          <div className="p">
            <div className="acor">
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tip 1</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Set up your workspace by gathering clean tools, bowls and
                      utensils. And make sure to keep a trashcan within arm’s
                      reach.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tip 2</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      To create an egg wash, whisk together a large egg with one
                      tablespoon of water until smooth. Use as a glue to seal
                      pastries, then brush on top for a glossy appearance.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 3 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Peel tomatoes with ease! Cut an X in the top, and then
                      simmer in a pot of hot water for 15 to 30 seconds. Cool
                      down and the skin will fall right off.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 4 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Get comfortable! Wear comfy clothes and an apron when you
                      work in the kitchen and you won’t have to worry about
                      getting dirty.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 5 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Invest in a baking scale. Scales are not only an accurate
                      way to measure your cooking ingredients, but they
                      streamline the entire process.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 6 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Always read and re-read your recipes before you start
                      cooking.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 7 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">Clean as you go.</div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 8</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Use 2 skewers instead of 1 when grilling or roasting to
                      prevent your food from spinning.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 9 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Learn and practice the rule of thumb to check the
                      readiness of steak.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 10 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      To prevent butter from over-browning in your pan, add a
                      little bit of lemon juice.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="p2">
            <div className="acor">
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tip 11</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Embrace salt. Don’t be afraid to use salt; it pulls the
                      flavors out of your dishes. Cook with kosher salt and
                      season with sea salt.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b> Tip 12</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      No luck finding shallots? Replace with a combination of
                      onions and garlic.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 13 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      After handling garlic, rub your fingers on stainless
                      steel, like your sink, to get rid of the odor.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 14 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Ovens can lie. Place a second thermometer in your oven to
                      ensure proper preheating temperatures.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 15 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Ignore cooking times. Check your dishes by using your own
                      senses (smell, taste, touch) to decide when they are done.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 16 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      The most versatile and important tool is a sharp chef’s
                      knife.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 17 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Learn all the different ways to cook an egg.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 18</b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      When poaching an egg, add a teaspoon of white vinegar to
                      simmering water to help keep the yolk from breaking.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 19 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Always taste your food before seasoning.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: 200 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ backgroundColor: "#fefbf3" }}
                >
                  <Typography>
                    <div className="titles-acor">
                      <b>Tip 20 </b>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                  <Typography>
                    <div className="paragraph">
                      Keep your spices away from sources of heat like the stove
                      or lights. Herbs and spices can lose their flavor when
                      exposed to humidity and heat.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="images-tips">
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2020/11/22%D7%A1%D7%A0%D7%98%D7%94-%D7%A7%D7%AA%D7%A8%D7%99%D7%A0%D7%94-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%A4%D7%99%D7%AA-%D7%A9%D7%9E%D7%97%D7%94-2000x1125.jpg"
          alt="salad"
          className="img-salad"
        ></img>
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2021/12/1638698013_132789_7841-2000x1125.jpg"
          alt="cheers"
          className="img-cheers"
        ></img>
        <img
          src="https://medias.hashulchan.co.il/www/uploads/2019/11/Hamachleva-Benedict-5344-copy_n-2000x1125-1574176726.jpg"
          alt="table"
          className="img-table"
        ></img>
      </div>
    </div>
  );
}
export default Tips;
