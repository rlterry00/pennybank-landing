import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function FAQShort() {
  return (
    <Accordion atomic={true}>
      <AccordionItem title="Who is Penny Bank Plus inteded for?">
        <p style={{ margin: 10 }}>
          Penny Bank is designed for families with children 13 or younger (old
          enough to use a device). Although there are plenty of uses cases we
          are working on future features that cater to teenagers.
        </p>
      </AccordionItem>
      <AccordionItem title="What’s the difference between Penny Bank and Penny Bank Plus">
        <p style={{ margin: 10 }}>
          Penny Bank was our flagship product considered to be a lite version of
          Penny Bank Plus. At the current moment, we have switched fully over to
          Penny Bank Plus. Penny Bank and Penny Bank Plus are both made by Team
          Penny Bank
        </p>
      </AccordionItem>
      <AccordionItem title="Does it cost to have a Penny Bank account?">
        <p style={{ margin: 10 }}>
          I'm glad you asked. Penny Bank accounts are free. Signing up gives you
          access to a Penny Bank account which can be used to access the web app
          and with future products as well. Penny Bank Plus mobile app is free
          to download in the app stores. The only cost is a small membership fee
          to access Penny Bank Plus mobile app. The web app is for account
          services and is limited on features.
        </p>
      </AccordionItem>
      <AccordionItem title="I signed up/have an account why does it say “Penny Bank Plus not active”?">
        <p style={{ margin: 10 }}>
          Once you have an account in order to use the mobile app you must
          subscribe to being a Penny Bank Plus member. You can go to the get
          started button in the mobile app and it will take you to account
          management or visit the account page in the header. You will then log
          in and are your options for Penny Bank Plus will be available. After
          you are subscribed you can sign back into the mobile app with your
          normal credentials.
        </p>
      </AccordionItem>
      <AccordionItem title="I already have a Penny Bank account why isn’t my log in working?">
        <p style={{ margin: 10 }}>
          Your account still exists from the original Penny Bank. We ask all of
          our legacy users to reset their passwords as this build required us to
          migrate to a new backend
        </p>
      </AccordionItem>
    </Accordion>
  );
}
