import React from "react";
////////
import "../../../Styles/DetailpageAboutU.css";
const DetailpageAboutU = () => {
  return (
    <div>
      <div class="relative">
        {/* <input id="read-more-controller" type="checkbox" /> */}
        <div class="content-font text-gray-700 leading-7 text-justify content_area">
          <p>
            <strong>Nottingham Two</strong> is a well-facilitated{" "}
            <a
              href="https://www.universityliving.com/united-kingdom/city/nottingham"
              target="_self"
            >
              <strong>student accommodation Nottingham</strong>
            </a>
            <strong> </strong>that promises a superior student living
            experience. Students need not worry about reaching university late
            because The{" "}
            <a
              href="https://www.universityliving.com/united-kingdom/nottingham/u/university-of-nottingham"
              target="_self"
            >
              <strong>University of Nottingham</strong>
            </a>
            , <strong>Jubilee Campu</strong>s is only a 7-minutes’ walk away. If
            your day doesn’t begin without coffee, grab a cup from Starbucks
            before attending your lectures. Even the N
            <a
              href="https://www.universityliving.com/united-kingdom/nottingham/u/nottingham-trent-university-(ntu)"
              target="_blank"
            >
              <strong>ottingham Trent University</strong>
            </a>
            <strong> </strong>takes only 12-minutes to reach by bus.
          </p>
          <p>
            You can plan your weekend without stressing over the conveyance cost
            and traveling facilities since the accommodation is well-connected
            to the entire city. Getting from one place to the other is
            effortless as Nottingham Two is only a minute’s walk away from the
            nearest bus station. You can plan a trip to the prominent places in
            the city as <strong>Hyson Green Market Tram station</strong> is only
            a 23-minutes’ ride away.
          </p>
          <p>
            The<strong> rooms at Nottingham </strong>Two are fully-furnished to
            the highest of standards so the students feel at home. Complete your
            assignments in your room and then head to the communal lounge when
            you feel like taking a break. Play board games or challenge your
            mates to a game of air-hockey and table tennis while you’re there.
            After you’ve regained most of your energy, get back to work on the
            rest of your assignment.
          </p>
          <p>
            During the morning, take a walk in the outdoor courtyard, and
            breathe in the fresh air before heading to your lectures. The
            communal kitchen also has a TV so you don’t miss your favourite
            shows or movies while you’re busy cooking. To ensure that your
            parcels do not get misplaced, the accommodation also offers parcel
            receipt services that take care of your package till you can collect
            them.
          </p>
        </div>
        <span class="overlay"></span>
        <label class="te-readmore" for="read-more-controller">
          Less More
        </label>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-2 flex">
          <div className="text-center bg-gray-400/20 text-[.65rem] mr-2.5 px-2 py-1 rounded capitalize text-gray-700">
            No Visa No Pay
          </div>
          <div className="text-center bg-gray-400/20 text-[.65rem] px-2 py-1 rounded capitalize text-gray-700">
            No University No Pay
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailpageAboutU;
