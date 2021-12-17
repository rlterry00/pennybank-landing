import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function FAQ() {
  return (
    <Accordion atomic={true}>
      <AccordionItem title="What is Penny Bank Plus?">
        <p style={{ margin: 10 }}>
          Penny Bank Plus is the full-featured mobile app for habit creation by
          way of completing chores. It is designed with a reward system to pay
          your child in cash and free time. Penny Bank Plus also rewards your
          child with XP points, Achievements, and badges they can share with
          their peers.
        </p>
      </AccordionItem>
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
      <AccordionItem title="Does my child need a bank account to use Penny Bank Plus?">
        <p style={{ margin: 10 }}>
          Absolutely not. Penny Bank is designed for delegating tasks and
          creating habits with your child not for sending money electronically
          to your child.
        </p>
      </AccordionItem>
      <AccordionItem title="Does my child need a email address for their account?">
        <p style={{ margin: 10 }}>
          No, your child does not need an email address to use Penny Bank Plus.
          When signing up you are creating a family and that email you use to
          sign up will be used with the whole family to login
        </p>
      </AccordionItem>
      <AccordionItem title="What personal information does Penny Bank Plus collect?">
        <p style={{ margin: 10 }}>
          The main information we collect is an email to set up an account.
          Penny Bank Plus does not do include advertising. So we do not give
          your data or device info to any third-party advertising agency. We do
          collect data device data for analytics and crashes, none of which
          involves personal data. We ask for a family name and preferably want a
          real last name. We also ask for each child in your family’s first and
          last name for future features that will be integrated with real bank
          accounts. Your child will be identified by their user name within the
          Penny Bank community. Please refer to our privacy section of the
          website for more details.
        </p>
      </AccordionItem>
      <AccordionItem title="Can more than one child use the same account?">
        <p style={{ margin: 10 }}>
          Each family shares a mutual email and password to login. As a the
          parent you can add a child to the same family and assign a pin number
          that is specific for each individual child.
        </p>
      </AccordionItem>
      <AccordionItem title="Can my family use it on multiple devices?">
        <p style={{ margin: 10 }}>
          Yes. Penny Bank works better if you and your child use separate
          devices. If you login on an other device your notifications will be
          sent to the last device you logged into.
        </p>
      </AccordionItem>
      <AccordionItem title="How do I know if my child really completed their task?">
        <p style={{ margin: 10 }}>
          Penny Bank Plus now has picture verification and you can require your
          child to take a picture that you have to verify before approving the
          chore completed. If a picture is not suitable for the task assigned
          you can physically check it and approve or deny afterward.
        </p>
      </AccordionItem>
      <AccordionItem title="Can my family use it on multiple devices?">
        <p style={{ margin: 10 }}>
          Penny Bank Plus now has picture verification and you can require your
          child to take a picture that you have to verify before approving the
          chore completed. If a picture is not suitable for the task assigned
          you can physically check it and approve or deny afterwards.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
