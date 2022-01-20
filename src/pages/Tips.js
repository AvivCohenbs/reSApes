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
        <div className="title-tips">Hosts (almost) without cooking </div>

        <div className="p-1">
          When you love food, it does not mean that you have to be addicted to
          the kitchen.
          <br />
          you always have to have the right products in the pantry and a few
          tricks up your sleeve.
          <br />
          This is how we are hosted effortlessly
        </div>
        <div className="p">
          <div className="p-2">
            Hospitality with ready-made food has a slightly dubious image, but
            it does not have to be this way - if done right, one can entertain,
            serve excellent food and reap compliments - almost without spending
            time in the kitchen. The key is the right property and treasures -
            knowing how to choose the right and quality products that will suit
            the meal, guests and atmosphere that you want to create and combine
            wisely. The truth is that this is the key to everything you do in
            the kitchen - after all, even when cooking a home-made meal, you
            need to know how to choose quality ingredients - but when most of
            the meal is based on purchased products - there is not much room for
            error.
          </div>
          <div className="p-3">
            But why actually rely on purchased products and not make everything
            yourself? When you love food it does not mean that you should be
            enslaved to the kitchen. We are also allowed to use shortcuts and
            make life easy for ourselves, especially if the goal is to have fun.
            Of course, you do not have to base an entire meal on purchased
            products - you can make some of the dishes and buy some of them, and
            you can also make patented dishes that use shortcuts like sauces,
            seasonings or ready-made doughs, to which you add your personal
            touch.
          </div>
          <div className="p-4">
            Here are three tips to help you do it right:
          </div>

          <div className="acor">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#fefbf3" }}
              >
                <Typography sx={{ color: "#116530" }}>
                  <b> 1. Choose a concept</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                <Typography>
                  When planning a meal one should first decide on a guideline.
                  It does not have to be a super-tight concept, but you do have
                  to make sure the different dishes fit together. This is true,
                  of course, of any meal you plan, but especially true of meals
                  that are based primarily on purchased products; It's terribly
                  easy to buy excellent focaccia, a and quality cheeses, but if
                  you're not careful, your meal may turn out to be "shawarma
                  next to sushi next to ravioli". So how do you decide? Think of
                  one dish or one ingredient that you want to serve and plan the
                  meal around them: if you want an evening on the purity of the
                  cheeses - invest in a nice selection of hard cheeses and
                  cheeses to pair with baguettes, butter, nuts and fruit; If you
                  want a New York-style breakfast buffet - also arrange cream
                  cheeses, pickled fish, egg salad, capers and fresh and pickled
                  vegetables on the table; If you have good hummus next to you -
                  stay with the local concept with pitas, tahini, lavana and
                  local salads like tabula; And if you want to make the pasta or
                  lasagna that everyone always asks for her recipe - also serve
                  a caprese salad with quality mozzarella and tomatoes, focaccia
                  (completely bought will do the job) on which you will arrange
                  vegetables and cheeses and add a patented tiramisu without
                  eggs for dessert.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "#fefbf3" }}
              >
                <Typography sx={{ color: "#116530" }}>
                  <b> 2. Equip the pantry</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                <Typography>
                  <div className="p-8">
                    The fresh raw materials like cheeses, vegetables, fruits and
                    sausages are specially bought, depending on the concept
                    chosen. The others should be added to the pantry or freezer
                    regardless of planned accommodation - they can also shorten
                    the way to the dishes you prepare on a daily basis.
                  </div>
                  <div className="p-9">
                    <span className="span"> Cheeses </span> - can be
                    incorporated into almost any concept and any meal. The
                    obvious is cheese-based hospitality - to which only breads
                    or crackers, fruit and nuts are added - but cheeses can do
                    much more than that. Here are some examples:
                  </div>
                  <div className="p-10">
                    <ul>
                      <li>
                        You can design{" "}
                        <span className="span">
                          {" "}
                          table with different types of bruschettas
                        </span>
                        , each of which has a different topping with a different
                        cheese, for example a broccoli pesto broccoli and a king
                        of the forest steak with parmesan, ratatouille
                        bruschetta and smoked gouda; Bruschetta with gouda tom
                        goats and artichokes etc.
                      </li>
                      <li>
                        Cheeses can also be at the center of light hospitality
                        dishes, ones that have 3-4 quality ingredients, for
                        example stewed asparagus topped with smoked Gouda
                        carvings; Roasted beets with blue cheese and nuts;
                        Halved figs with goat cheese and a drizzle of honey, a
                        loaf of bread that make grooves in it and fill them with
                        various hard cheeses and crushed garlic cloves or
                        spreads like pesto and sun-dried tomatoes or hard cheese
                        cubes seasoned with olive oil and hot pepper or
                        sun-dried tomatoes and served as a snack.
                      </li>
                      <li>
                        {" "}
                        The addition of cheese can also give an invested touch
                        to everyday dishes - for example fried diced cubes on a
                        green salad (the lazy can make it from a purchased
                        washed leaf mixture) or diced Bulgarian cheese on a
                        simple green salad. On the same principle, you can
                        spread sheep or goat yogurt on a nice serving plate,
                        season with a little hyssop, blush or paprika that will
                        add color and thus serve a lentil or cereal salad.
                      </li>
                    </ul>
                  </div>

                  <div className="p-11">
                    <b>Salads and spreads</b> such as pesto, artichoke spread,
                    sun-dried tomato spread, egg salad, eggplant salad and more.
                    You can place them on a buffet table for spreading, or use
                    them as an ingredient in bruschettas or quick pastries.
                    Either way, you do not have to buy dozens of salads - focus
                    on 4-3 that fit the concept you have chosen, but invest in
                    salads from a quality deli and not from an unknown brand
                    that you found in the supermarket.
                  </div>
                  <div className="p-12">
                    <b>Quality preserves</b> The base is olives and pickles of
                    various kinds, but you can expand the canvas with gherkins,
                    capers (small and large) and artichokes a la Romana and even
                    find in deli delicacies also less routine preserves, for
                    example patissons, pickled peppers stuffed with cheese or
                    garlic confit. And of course, if the menu is appropriate -
                    to this category you can also add pickled and smoked fish.
                  </div>
                  <div className="p-13">
                    <b>Spices and spice mixes</b> Beautiful saucers with coarse
                    salt, ground black pepper and a spice mixture that is
                    suitable for cheeses or vegetables will also add to the
                    variety on the table and will also add interest to the
                    dishes.
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "#fefbf3" }}
              >
                <Typography sx={{ color: "#116530" }}>
                  <b>
                    {" "}
                    3. Winning pair - creative uses for doughs and cheeses{" "}
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#fefbf3" }}>
                <Typography>
                  Ready-made doughs are the basis for countless games and
                  impressive hospitality dishes. All you have to do is thaw them
                  according to the manufacturer's instructions, mix them with
                  vegetables and cheeses and create dishes with your personal
                  touch.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
