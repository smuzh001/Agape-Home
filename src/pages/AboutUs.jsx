import React from "react";
import { Card } from "@material-ui/core";

export default function AboutUs() {
  return (
    <section>
      <h1>About Us</h1>
      <p>
        Agape, Eco-Spiritual Resort is a Project as the name suggests that it
        provides an environment to be and stay in harmony with nature. This
        project is jointly owned by Joseph P. J. Who lives in the USA and JoJo
        Augustine who lives in Japan. They initiated this project originated
        from the idea as they believe in the sacredness of Earth, environment
        and of course the universe. The project features rustic cottages-a
        treehouse- which was built by traditional eco-friendly technology and
        materials such as real wood and terracotta. It is located in a secluded
        environment that it is away from hustles and bustles of the town but yet
        in the same magnificent geo climatic environment of Vagamon hill ranges.
        Agape offers quality stay in organic comfort for the nature lovers and
        those who want to get away from Urban hustles and seek refuge in organic
        setting.
      </p>
      <h1>Booking</h1>
      <p>Please see our Calendar for availabilities.</p>
      <span>
        <Card>
          <h2>Treehouse</h2>
          <h3>Double Room.</h3>
          <h6>Additional beds may be provided</h6>
        </Card>
        <Card>
          <h2>Amenities</h2>
          <h3>Veg or non-veg upon prior request</h3>
        </Card>
        <Card>
          <h2>Free Wifi</h2>
        </Card>
        <Card>
          <h2>Ayurvedic Massage</h2>
          <h3>
            Herbal steam bath offered by government certified proffessionals
          </h3>
          <h6>(both male and female)</h6>
        </Card>
        <Card>
          <h2>Convenience for solitary meditation and yoga</h2>
        </Card>
        <Card>
          <h2>Wood trekking offered by Forest and wild life department</h2>
          <h3>Accompanied by experienced guides</h3>
        </Card>
        <Card>
          <h2>Campfire and Barbeque</h2>
        </Card>
        <Card>
          <h2>Explore and swim</h2>
          <h3>in the quite, unsoiled water flowing through the resort land</h3>
        </Card>
      </span>
    </section>
  );
}
