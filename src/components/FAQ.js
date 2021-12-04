import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function FAQ() {
  return (
    <Accordion atomic={true}>
      <AccordionItem title="Who is Penny Bank Plus inteded for?">
        <p style={{ margin: 10 }}>
          Penny Bank is designed for families with children 13 or younger (old
          enough to use a device). Although there a plenty of uses cases we are
          working on features that cater to teenagers.
        </p>
      </AccordionItem>
      <AccordionItem title="Does my child need a bank account to use Penny Bank Plus?">
        <p style={{ margin: 10 }}>
          Absolutely not. Penny Bank is desgned for delegating tasks and
          creating habits with your child not for sending money electronically
          to your child.
        </p>
      </AccordionItem>
      <AccordionItem title="Does it cost to have a Penny Bank account?">
        <p style={{ margin: 10 }}>
          I'm glad you asked. Penny Bank acounnts are free. Signing up gives you
          access to a Penny Bank account which can be used to access the web app
          and with future products as well. Penny Bank Plus mobile app is free
          to download in the app stores. The only cost is a small membership fee
          to access Penny Bank Plus mobile app. The web app is for account
          services and is limited on features.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
